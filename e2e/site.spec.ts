import { expect, test } from "@playwright/test";

const pages = [
  "/",
  "/produse",
  "/etichete-tesute",
  "/etichete-textile",
  "/blog",
  "/contact",
  "/cere-oferta",
  "/despre-noi",
];

for (const path of pages) {
  test(`pagina ${path} se încarcă și are SEO de bază`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    expect((await page.title()).length).toBeGreaterThan(10);
    const description = await page
      .locator('meta[name="description"]')
      .first()
      .getAttribute("content");
    expect(description?.length ?? 0).toBeGreaterThan(50);
    await expect(page.locator('link[rel="canonical"]').first()).toHaveAttribute(
      "href",
      /^https:\/\/etichetetextile\.ro/,
    );
  });

  test(`pagina ${path} nu are scroll orizontal`, async ({ page }) => {
    await page.goto(path);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test("blogul listează articolele din baza de date și deschide un articol", async ({ page }) => {
  await page.goto("/blog");
  const first = page.locator('a[href^="/blog/"]').first();
  await expect(first).toBeVisible();
  const href = await first.getAttribute("href");
  const response = await page.goto(href!);
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1").first()).toBeVisible();
});

test("o adresă inexistentă răspunde 404", async ({ page }) => {
  const response = await page.goto("/pagina-care-nu-exista");
  expect(response?.status()).toBe(404);
});

test("sitemap și robots sunt servite", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect((await sitemap.text()).match(/<loc>/g)?.length ?? 0).toBeGreaterThan(40);
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Sitemap: https://etichetetextile.ro/sitemap.xml");
});

test("formularul de contact validează câmpurile obligatorii", async ({ page }) => {
  await page.goto("/contact");
  const form = page
    .locator("form")
    .filter({ has: page.locator("textarea") })
    .first();
  await expect(form).toBeVisible();
  await expect(form.getByLabel("Nume *")).toHaveAttribute("required", "");
  await expect(form.getByLabel("Email *")).toHaveAttribute("type", "email");
  const invalid = await form.evaluate((element) => !(element as HTMLFormElement).checkValidity());
  expect(invalid).toBe(true);
});

test("formularul de contact salvează mesajul", async ({ page }) => {
  test.skip(process.env.E2E_SUBMIT !== "1", "scrie în baza de date reală");
  await page.goto("/contact");
  const form = page
    .locator("form")
    .filter({ has: page.locator("textarea") })
    .first();
  await form.getByLabel("Nume *").fill("Test automat");
  await form.getByLabel("Email *").fill("test-e2e@example.com");
  await form.getByLabel("Mesaj *").fill("Mesaj trimis de testul automat e2e.");
  await form.getByRole("button").last().click();
  await expect(page.getByText("Mulțumim! Mesajul a fost trimis.")).toBeVisible();
});
