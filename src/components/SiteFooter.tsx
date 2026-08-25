import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <img src="/images/logo.png" alt="Etichett Prod" className="h-9 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground">
            Producător de etichete textile personalizate din Cluj-Napoca. Peste 30 ani de experiență în etichete țesute, imprimate și de compoziție.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Navigare</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/despre-noi" className="hover:text-primary">Despre noi</Link></li>
            <li><Link to="/produse" className="hover:text-primary">Produse</Link></li>
            <li><Link to="/etichete-cluj" className="hover:text-primary">Etichete Cluj</Link></li>
            <li><Link to="/galerie" className="hover:text-primary">Galerie</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Produse</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/etichete-textile" className="hover:text-primary">Etichete textile</Link></li>
            <li><Link to="/etichete-personalizate" className="hover:text-primary">Etichete personalizate</Link></li>
            <li><Link to="/etichete-haine" className="hover:text-primary">Etichete pentru haine</Link></li>
            <li><Link to="/etichete-autocolante" className="hover:text-primary">Etichete autocolante</Link></li>
            <li><Link to="/etichete-autoadezive" className="hover:text-primary">Etichete adezive (autoadezive)</Link></li>
            <li><Link to="/etichete-termoadezive" className="hover:text-primary">Etichete termoadezive</Link></li>
            <li><Link to="/etichete-tesute" className="hover:text-primary">Etichete țesute</Link></li>
            <li><Link to="/etichete-satin" className="hover:text-primary">Etichete satin</Link></li>
            <li><Link to="/etichete-carton" className="hover:text-primary">Etichete carton</Link></li>
            <li><Link to="/etichete-haine-copii" className="hover:text-primary">Etichete haine copii</Link></li>
            <li><Link to="/simboluri-etichete-haine" className="hover:text-primary">Simboluri etichete haine</Link></li>
            <li><Link to="/etichete-cluj-napoca" className="hover:text-primary">Etichete Cluj-Napoca</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Str. Uzinei Electrice Nr. 9, Cluj-Napoca</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:+40747264832" className="hover:text-primary">0747 264 832</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:0264599966" className="hover:text-primary">0264 599 966</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> <a href="mailto:etichettprod@yahoo.com" className="hover:text-primary">etichettprod@yahoo.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} S.C. Etichett Prod S.R.L. Toate drepturile rezervate.</p>
          <p>Producător etichete textile Cluj-Napoca • Livrare în toată România</p>
        </div>
      </div>
    </footer>
  );
}
