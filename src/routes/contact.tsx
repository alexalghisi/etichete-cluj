import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact etichete Cluj-Napoca | ETICHETT PROD — ofertă etichete textile" },
      { name: "description", content: "Cere ofertă pentru etichete textile în Cluj-Napoca: etichete țesute, imprimate, de compoziție și personalizate. WhatsApp, telefon 0747 264 832, email etichettprod@yahoo.com. Atelier Str. Uzinei Electrice 9, Cluj." },
      { name: "keywords", content: "etichete cluj, etichete cluj-napoca, etichete textile cluj, contact etichete, oferta etichete textile, etichete personalizate cluj, etichete tesute cluj, etichete imprimate cluj, etichete compozitie, producator etichete cluj, etichete haine cluj, etichett prod" },
      { property: "og:title", content: "Contact etichete Cluj-Napoca | ETICHETT PROD" },
      { property: "og:description", content: "Producător etichete textile în Cluj-Napoca. Cere ofertă rapid pe WhatsApp, telefon sau email." },
      { property: "og:url", content: "https://etichetetextile.ro/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/hero-labels.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact ETICHETT PROD — etichete textile Cluj" },
      { name: "twitter:description", content: "Cere ofertă pentru etichete textile personalizate în Cluj-Napoca." },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://etichetetextile.ro/#business",
          name: "ETICHETT PROD",
          legalName: "S.C. ETICHETT PROD S.R.L.",
          description: "Producător de etichete textile în Cluj-Napoca: etichete țesute, imprimate, de compoziție și personalizate pentru haine, încălțăminte, marochinărie și branduri. Peste 30 de ani experiență.",
          url: "https://etichetetextile.ro/",
          telephone: ["+40747264832", "+40264599966"],
          email: "etichettprod@yahoo.com",
          image: "https://etichetetextile.ro/images/hero-labels.webp",
          logo: "https://etichetetextile.ro/images/logo.png",
          priceRange: "$$",
          foundingDate: "1993",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Str. Uzinei Electrice Nr. 9",
            addressLocality: "Cluj-Napoca",
            addressRegion: "Cluj",
            postalCode: "400000",
            addressCountry: "RO",
          },
          geo: { "@type": "GeoCoordinates", latitude: 46.7712, longitude: 23.6236 },
          areaServed: [
            { "@type": "City", name: "Cluj-Napoca" },
            { "@type": "AdministrativeArea", name: "Județul Cluj" },
            { "@type": "Country", name: "România" },
          ],
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00", closes: "17:00",
          }],
          contactPoint: [{
            "@type": "ContactPoint",
            telephone: "+40747264832",
            contactType: "sales",
            areaServed: "RO",
            availableLanguage: ["Romanian", "English"],
          }],
          sameAs: ["https://etichetetextile.ro/"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Etichete textile",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Etichete țesute Cluj" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Etichete imprimate Cluj" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Etichete de compoziție" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Etichete personalizate pentru branduri" } },
            ],
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9", reviewCount: "87", bestRating: "5", worstRating: "1",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://etichetetextile.ro/contact" },
          ],
        }),
      },
    ],
  }),
});

const MAILTO = "mailto:etichettprod@yahoo.com?subject=Cerere%20oferta%20etichete%20textile&body=Buna%20ziua%2C%0A%0ADoresc%20o%20oferta%20pentru%20etichete%20textile.%0A%0ADetalii%3A%0A-%20Tip%20eticheta%20(tesuta%2Fimprimata%2Fcompozitie)%3A%0A-%20Dimensiuni%3A%0A-%20Cantitate%3A%0A-%20Material%2Fculori%3A%0A%0AMultumesc!";
const WHATSAPP = "https://wa.me/40747264832?text=" + encodeURIComponent(
  "Bună ziua! Doresc o ofertă pentru etichete textile (Cluj-Napoca).\n\n- Tip etichetă (țesută/imprimată/compoziție):\n- Dimensiuni:\n- Cantitate:\n- Material/culori:\n\nMulțumesc!"
);

function Contact() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact etichete Cluj-Napoca"
        title="Cere ofertă pentru etichete textile în Cluj"
        subtitle="ETICHETT PROD — producător de etichete țesute, imprimate, de compoziție și personalizate în Cluj-Napoca. Răspundem rapid pe WhatsApp, telefon sau email."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">S.C. ETICHETT PROD S.R.L. — Cluj-Napoca</h2>
            <p className="mt-3 text-muted-foreground">
              Suntem unul dintre cei mai vechi producători de <strong>etichete textile în Cluj</strong> — peste 30 de ani de experiență în <strong>etichete țesute</strong>, <strong>etichete imprimate</strong>, <strong>etichete de compoziție</strong> și <strong>etichete personalizate</strong> pentru branduri de îmbrăcăminte, încălțăminte și marochinărie din Cluj-Napoca și din toată România.
            </p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-primary" /> Str. Uzinei Electrice Nr. 9<br/>Cluj-Napoca, Jud. Cluj</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a className="hover:text-primary" href="tel:+40747264832">Mobil: 0747 264 832</a></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a className="hover:text-primary" href="tel:0264599966">Telefon/Fax: 0264 599 966</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> <a className="hover:text-primary" href="mailto:etichettprod@yahoo.com">etichettprod@yahoo.com</a></li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> Luni–Vineri: 08:00–17:00</li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Hartă ETICHETT PROD — etichete textile Cluj-Napoca"
                src="https://maps.google.com/maps?q=Strada+Uzinei+Electrice+9+Cluj-Napoca&z=15&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-elegant">
            <h2 className="text-2xl font-bold">Cere ofertă în 30 de secunde</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Alege canalul preferat. Spune-ne tipul de etichetă (țesută, imprimată, compoziție), dimensiunile, cantitatea și materialul — îți răspundem cu preț și termen de livrare.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Scrie-ne pe WhatsApp
            </a>

            <a
              href={MAILTO}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Trimite email
            </a>

            <a
              href="tel:+40747264832"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-semibold hover:bg-accent"
            >
              <Phone className="h-4 w-4" /> Sună 0747 264 832
            </a>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> Ofertă personalizată în aceeași zi lucrătoare</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> Producție internă în Cluj-Napoca</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> Livrare prin curier în toată România</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 rounded-2xl border border-border bg-secondary/40 p-6 md:p-10">
          <h2 className="text-2xl font-bold">De ce ETICHETT PROD pentru etichete în Cluj-Napoca?</h2>
          <p className="text-muted-foreground">
            Căutarea pentru <em>„etichete Cluj”</em>, <em>„etichete Cluj-Napoca”</em> sau <em>„etichete textile”</em> duce de obicei la noi pentru un motiv simplu: producem local, cu utilaje proprii, și livrăm exact ce ai nevoie — fie că vorbim de <strong>etichete țesute pentru haine</strong>, <strong>etichete de compoziție conforme</strong>, <strong>etichete imprimate pe satin sau nylon</strong>, ori <strong>etichete personalizate cu logo</strong> pentru branduri mici și mari.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Etichete textile Cluj", d: "Producție internă pentru branduri locale și naționale, cu termene rapide." },
              { t: "Etichete personalizate", d: "Realizate după grafica ta sau dezvoltate împreună cu echipa noastră." },
              { t: "Etichete de compoziție", d: "Conforme cu legislația, în mai multe limbi, pentru export și retail." },
            ].map((b) => (
              <div key={b.t} className="rounded-xl bg-background p-4">
                <h3 className="font-semibold">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
