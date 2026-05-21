import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { MapPin, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — ETICHETT PROD Cluj-Napoca | Cere ofertă etichete textile" },
      { name: "description", content: "Contactează ETICHETT PROD pentru o ofertă personalizată. Str. Uzinei Electrice Nr. 9, Cluj-Napoca. Tel: 0747 264 832 · etichettprod@yahoo.com" },
      { property: "og:title", content: "Contact ETICHETT PROD | Cere ofertă etichete textile" },
      { property: "og:description", content: "Cere o ofertă pentru etichete textile personalizate. Atelier în Cluj-Napoca." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const mailto = `mailto:etichettprod@yahoo.com?subject=${encodeURIComponent("Cerere ofertă etichete textile - " + (form.name || ""))}&body=${encodeURIComponent(form.message + "\n\n— " + form.name + " (" + form.email + ")")}`;
  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="Hai să discutăm despre etichetele tale" subtitle="Trimite-ne grafica sau dezvoltăm una împreună. Stabilim toate detaliile, iar după finalizarea comenzii ridici etichetele de la sediu sau le trimitem prin curier." />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">S.C. ETICHETT PROD S.R.L.</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-primary" /> Str. Uzinei Electrice Nr. 9<br/>Cluj-Napoca, Jud. Cluj</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a className="hover:text-primary" href="tel:+40747264832">Mobil: 0747 264 832</a></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a className="hover:text-primary" href="tel:0264599966">Telefon/Fax: 0264 599 966</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> <a className="hover:text-primary" href="mailto:etichettprod@yahoo.com">etichettprod@yahoo.com</a></li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Hartă ETICHETT PROD Cluj-Napoca"
                src="https://maps.google.com/maps?q=Strada+Uzinei+Electrice+9+Cluj-Napoca&z=15&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-elegant"
          >
            <h2 className="text-2xl font-bold">Scrie-ne mesajul tău</h2>
            <p className="mt-2 text-sm text-muted-foreground">Răspundem în cel mai scurt timp.</p>
            <div className="mt-6 space-y-4">
              <label className="block">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-elegant">
            <h2 className="text-2xl font-bold">Trimite-ne un email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Apasă butonul de mai jos pentru a deschide aplicația ta de email cu adresa noastră deja completată. Scrie-ne despre cantitate, dimensiuni, material și atașează grafica (dacă o ai).
            </p>
            <a
              href="mailto:etichettprod@yahoo.com?subject=Cerere%20oferta%20etichete%20textile&body=Buna%20ziua%2C%0A%0ADoresc%20o%20oferta%20pentru%20etichete%20textile.%0A%0ADetalii%3A%0A-%20Tip%20eticheta%20(tesuta%2Fimprimata%2Fcompozitie)%3A%0A-%20Dimensiuni%3A%0A-%20Cantitate%3A%0A-%20Material%2Fculori%3A%0A%0AMultumesc!"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Trimite email la etichettprod@yahoo.com
            </a>
            <div className="mt-6 rounded-lg bg-secondary/50 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Preferi telefonul?</p>
              <p className="mt-1">Sună-ne direct la <a href="tel:+40747264832" className="font-semibold text-primary hover:underline">0747 264 832</a> — răspundem rapid în timpul programului.</p>
            </div>
          </div>
