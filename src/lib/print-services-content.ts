import type { LabelType } from "./business-facts";

/**
 * Print & label services beyond textile labels (ribbons, food labels, QR, bottles,
 * stickers, business cards, flyers, safety signs, printed accessories).
 * Copy is factual: no prices or minimums — those stay in business-facts / the quote.
 */
export type PrintService = {
  slug: string;
  type: LabelType;
  title: string;
  description: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  image: string;
  short: string;
  options: string[];
  uses: string[];
  sections: [string, string][];
  faq: { q: string; a: string }[];
};

export const PRINT_SERVICES: PrintService[] = [
  {
    slug: "panglici-personalizate",
    type: "panglici",
    title: "Panglică personalizată cu logo pentru flori și cadouri | Etichett Prod",
    description: "Panglici personalizate cu logo pentru florării, cadouri, nunți și evenimente. Satin imprimat pe rolă, producție în Cluj",
    keywords: "panglica personalizata, panglici personalizate, panglica cu logo, panglica imprimata, panglica satin personalizata, panglica florarie, panglica nunta personalizata, panglica cadouri",
    eyebrow: "Nou · Panglici",
    h1: "Panglică personalizată cu logo pentru împachetat cadouri și flori",
    subtitle: "Panglici din satin imprimate cu numele florăriei, al magazinului sau al evenimentului — pe rolă, în culoarea și lățimea potrivite ambalajului tău.",
    image: "/images/servicii/panglici-personalizate.svg",
    short: "Satin imprimat pe rolă, cu logo sau mesaj, pentru florării, magazine și evenimente.",
    options: ["Satin în mai multe culori (alb, ivoire, roz, roșu, verde, negru etc.)", "Imprimare logo, text sau model repetat pe toată lungimea", "Diferite lățimi, livrată pe rolă", "Culoare de imprimare aleasă după panglică (inclusiv auriu/argintiu la cerere)", "Mesaje pentru nunți, botezuri, aniversări, evenimente corporate"],
    uses: ["Florării — buchete, aranjamente, cutii cu flori", "Magazine și ateliere — împachetat cadouri și pungi", "Cofetării și ciocolaterii — cutii de prăjituri și praline", "Nunți și botezuri — mărturii, lumânări, invitații", "Evenimente corporate — cadouri de brand, kituri de bun venit"],
    sections: [
      ["Ambalajul care poartă numele tău", "Un buchet sau un cadou trece prin multe mâini după ce iese din magazin. O panglică personalizată cu logo face ca numele florăriei sau al brandului să rămână vizibil exact în momentul în care darul este oferit și fotografiat. Imprimăm pe satin, material cu aspect fin și luciu discret, numele firmei, adresa site-ului sau un scurt mesaj, repetat pe toată lungimea rolei. Astfel poți tăia orice bucată ai nevoie fără să pierzi textul. Panglica se leagă ușor, face funde frumoase și se potrivește atât cu hârtia kraft, cât și cu folia sau cutiile rigide."],
      ["Cum pregătim panglica imprimată", "Pornim de la logoul tău, de preferat în format vectorial (PDF, AI, SVG sau CDR). Graficienii noștri îl adaptează în CorelDRAW la lățimea panglicii, stabilesc distanța dintre repetări și îți trimit o simulare înainte de producție. Alegi culoarea satinului și culoarea de imprimare astfel încât contrastul să fie bun și textul să se citească de la distanță. Pentru branduri cu culori fixe căutăm cea mai apropiată nuanță disponibilă. Producția se face în atelierul nostru din Cluj-Napoca, pe aceleași utilaje pe care imprimăm de peste trei decenii etichete textile."],
      ["Panglici pentru evenimente și cadouri corporate", "Pe lângă florării, panglicile personalizate sunt cerute pentru nunți (numele mirilor și data), botezuri, aniversări sau lansări de produs. Pentru firme, o panglică cu sigla închide elegant cutiile cu cadouri de sărbători și completează pungile sau etichetele din carton. Dacă ai nevoie și de etichete agățătoare pentru același cadou, le putem produce împreună, cu aceeași grafică, ca setul să arate unitar."],
    ],
    faq: [
      { q: "Pe ce material imprimați panglicile personalizate?", a: "Lucrăm în principal cu panglică din satin, în mai multe culori și lățimi. Spune-ne pentru ce o folosești și îți recomandăm varianta potrivită." },
      { q: "Pot pune logoul florăriei pe panglică?", a: "Da. Imprimăm logo, nume, site sau un mesaj scurt, repetat pe toată lungimea panglicii. Trimite logoul și îți pregătim o simulare gratuită." },
      { q: "Cât costă panglica personalizată?", a: "" },
      { q: "În cât timp primesc panglicile?", a: "" },
    ],
  },
  {
    slug: "etichete-alimentare",
    type: "alimentare",
    title: "Etichete caserole, produse alimentare și data expirării | Etichett Prod",
    description: "Etichete pentru caserole, catering și produse alimentare, cu ingrediente, alergeni, lot și data expirării. Cluj-Napoca",
    keywords: "etichete caserole, etichete produse alimentare, etichete alimentare, etichete data expirarii, etichete catering, etichete ingrediente, etichete alergeni, etichete patiserie, etichete autocolante alimente",
    eyebrow: "Nou · Alimentare",
    h1: "Etichete pentru caserole și produse alimentare, cu dată de expirare",
    subtitle: "Etichete autocolante pentru catering, restaurante, patiserii și producători locali — cu loc pentru ingrediente, alergeni, lot și data expirării.",
    image: "/images/servicii/etichete-alimentare.svg",
    short: "Pentru caserole, cutii de catering, patiserie, miere, dulcețuri și produse cu termen de valabilitate.",
    options: ["Etichete cu logo pentru sigilarea caserolelor și cutiilor", "Câmp liber pentru data expirării / lot (scris de mână sau ștampilat)", "Variante cu ingrediente, alergeni evidențiați și valori nutriționale", "Hârtie, folie albă sau transparentă, adeziv permanent sau pentru frig", "Pe role, pentru aplicare rapidă la ambalare"],
    uses: ["Catering și livrări — caserole și meniuri zilnice", "Restaurante și fast-food — ambalaje la pachet", "Patiserii, brutării, cofetării", "Producători locali — miere, dulcețuri, zacuscă, brânzeturi", "Magazine care preambalează produse proaspete"],
    sections: [
      ["Etichete pentru caserole care vând a doua comandă", "Într-o livrare, caserola este singurul contact direct dintre client și bucătăria ta. O etichetă cu logo, număr de telefon și adresa site-ului sigilează capacul, arată profesionist și îl ajută pe client să comande din nou. Pentru catering și restaurante producem etichete autocolante pe role, ușor de aplicat chiar și la volum mare, cu adeziv care se prinde bine pe plastic, carton sau aluminiu."],
      ["Data expirării, lot și ingrediente", "Produsele preambalate au nevoie de informații clare: denumire, ingrediente cu alergenii evidențiați, cantitate, condiții de păstrare și data limită de consum sau data durabilității minimale. Putem pregăti etichete cu tot textul fix imprimat și un câmp liber unde notezi data și lotul pentru fiecare șarjă, cu pixul sau cu ștampila. Responsabilitatea pentru conținutul legal rămâne a producătorului alimentar, însă te ajutăm să așezi informațiile lizibil, într-un format care chiar încape pe ambalaj."],
      ["Materiale potrivite pentru frig și umezeală", "Pentru produse ținute la frigider sau congelator recomandăm adezivi și materiale sintetice care nu se dezlipesc la condens. Pentru borcane și cutii de cadou există hârtie kraft sau texturată, cu aspect artizanal. Dacă ai nevoie și de etichete pentru sticle sau borcane, vezi pagina dedicată, iar pentru trasabilitate poți adăuga un cod QR care duce la meniul sau la pagina produsului."],
    ],
    faq: [
      { q: "Puteți face etichete cu loc liber pentru data expirării?", a: "Da. Imprimăm tot textul fix (logo, denumire, ingrediente) și lăsăm un câmp liber pentru dată și lot, pe care îl completezi la fiecare șarjă." },
      { q: "Rezistă etichetele la frigider?", a: "Pentru produse refrigerate sau congelate folosim materiale și adezivi recomandați pentru temperaturi scăzute și umiditate." },
      { q: "Faceți etichete pentru caserole de catering?", a: "Da, etichete autocolante pe role, cu logo și date de contact, pentru sigilarea caserolelor și cutiilor de livrare." },
      { q: "Cât costă etichetele pentru produse alimentare?", a: "" },
    ],
  },
  {
    slug: "etichete-borcane-sticle",
    type: "sticle",
    title: "Etichete pentru borcane și sticle personalizate | Etichett Prod",
    description: "Etichete personalizate pentru borcane de miere, dulcețuri, sticle de vin și țuică, pentru producători și nunți. Cluj",
    keywords: "etichete pentru borcane, etichete borcane, etichete sticle, etichete sticle vin, etichete vin personalizate, etichete tuica, etichete miere, etichete dulceata, etichete sticle personalizate",
    eyebrow: "Nou · Borcane și sticle",
    h1: "Etichete personalizate pentru borcane și sticle",
    subtitle: "Pentru miere, dulcețuri, zacuscă, vin, țuică, ulei sau siropuri — etichete care arată bine pe raft și rezistă la manipulare.",
    image: "/images/servicii/etichete-borcane-sticle.svg",
    short: "Pentru borcane de miere și dulceață, sticle de vin, țuică, ulei, sucuri și cadouri de eveniment.",
    options: ["Hârtie albă, crem, kraft sau texturată (tip vin)", "Folie transparentă pentru efect „fără etichetă”", "Folio auriu/argintiu și lac selectiv la cerere", "Formă dreptunghiulară, rotundă, ovală sau decupată pe contur", "Etichetă față + contraetichetă cu informații"],
    uses: ["Apicultori — etichete pentru borcane de miere", "Producători de dulcețuri, zacuscă, conserve", "Crame și producători de țuică, pălincă, vișinată", "Sucuri, siropuri, uleiuri presate la rece", "Nunți și botezuri — sticle și borcănele personalizate"],
    sections: [
      ["Eticheta face produsul să pară gata de raft", "Același borcan de miere sau aceeași sticlă de vin se vinde altfel când are o etichetă bine făcută. Pentru producătorii mici, eticheta este cel mai ieftin mod de a arăta profesionist la târguri, în magazinele locale sau online. Imprimăm etichete pentru borcane și sticle pe role sau coli, în formele uzuale (dreptunghi, cerc, oval) sau decupate pe conturul ales de tine."],
      ["Etichetă față și contraetichetă", "Pe eticheta din față pui numele produsului și identitatea vizuală, iar pe contraetichetă informațiile: ingrediente, cantitate, producător, lot și termen de valabilitate, după caz. Separarea lor păstrează designul curat. Te ajutăm să verifici dimensiunea reală a zonei de aplicare: un borcan conic sau o sticlă cu umeri înalți cere o etichetă mai îngustă decât pare la prima vedere."],
      ["Etichete pentru evenimente și cadouri", "La nunți și botezuri sunt foarte căutate sticlele de vin sau țuică și borcănelele cu miere personalizate cu numele mirilor și data evenimentului. Pentru firme, o sticlă cu etichetă proprie este un cadou de sfârșit de an memorabil. Le putem combina cu panglici personalizate și etichete agățătoare din carton, toate cu aceeași grafică."],
    ],
    faq: [
      { q: "Faceți etichete pentru borcane de miere?", a: "Da. Producem etichete pentru borcane de miere, dulcețuri și conserve, inclusiv contraetichete cu informațiile despre produs." },
      { q: "Ce material recomandați pentru sticle de vin?", a: "Pentru vin se folosesc des hârtiile texturate sau crem, iar pentru sticle care stau la rece sau în gheață, materiale sintetice rezistente la umezeală." },
      { q: "Puteți face etichete pentru sticle de nuntă?", a: "Da, cu numele mirilor, data și grafica aleasă, pe sticle de vin, țuică sau pe borcănele de mărturii." },
      { q: "Cât costă etichetele pentru borcane?", a: "" },
    ],
  },
  {
    slug: "etichete-coduri-qr",
    type: "qr",
    title: "Etichete cu cod QR și coduri de bare personalizate | Etichett Prod",
    description: "Etichete și stickere cu cod QR (meniu, recenzii Google, site) și coduri de bare pentru produse și inventar. Cluj",
    keywords: "etichete cod qr, etichete coduri qr, stickere cod qr, etichete coduri de bare, etichete cod de bare, etichete inventar, sticker qr recenzii google, etichete qr personalizate",
    eyebrow: "Nou · QR și coduri de bare",
    h1: "Etichete cu cod QR și coduri de bare",
    subtitle: "Stickere și etichete cu cod QR pentru meniuri, recenzii, site, Wi-Fi sau pagini de produs — și etichete cu cod de bare pentru produse și inventar.",
    image: "/images/servicii/etichete-coduri-qr.svg",
    short: "QR pentru meniuri, recenzii, site sau Wi-Fi; coduri de bare pentru produse și inventar.",
    options: ["Cod QR static spre site, meniu, recenzii Google, Wi-Fi, Instagram", "Coduri de bare EAN/Code128 cu codurile furnizate de tine", "Etichete de inventar numerotate secvențial", "Hârtie, folie albă sau transparentă, laminare pentru exterior", "Text de îndemn lângă cod („Scanează pentru meniu”)"],
    uses: ["Restaurante și cafenele — meniu digital pe mese", "Magazine și saloane — recenzii Google, Instagram, site", "Producători — pagina produsului, instrucțiuni, trasabilitate", "Firme — etichete de inventar pentru echipamente", "Evenimente — program, galerie foto, confirmare participare"],
    sections: [
      ["Un cod QR mic, multe vizite", "Un sticker cu cod QR pe masă, pe vitrină sau pe ambalaj duce clientul direct unde vrei: meniul digital, pagina de recenzii Google, profilul de Instagram, catalogul sau formularul de comandă. Generăm codul pornind de la linkul tău, verificăm că se scanează corect la dimensiunea finală și îl așezăm lângă logo și un îndemn scurt, astfel încât oamenii să știe de ce merită să-l scaneze."],
      ["Coduri de bare și etichete de inventar", "Pentru produse care intră în magazine putem imprima coduri de bare pe baza codurilor EAN obținute de tine, împreună cu denumirea și prețul sau alte informații. Pentru firme producem etichete de inventar numerotate, cu sau fără cod de bare, care identifică rapid laptopuri, mobilier sau utilaje. Materialele pot fi alese pentru interior sau pentru suprafețe expuse la frecare."],
      ["Recomandări ca un cod QR să funcționeze", "Lasă o margine albă în jurul codului, păstrează contrastul închis pe fundal deschis și nu micșora codul sub dimensiunea la care un telefon îl citește ușor de la distanța obișnuită. Folosește linkuri scurte și stabile: dacă adresa se schimbă, toate stickerele imprimate rămân fără destinație. Îți trimitem simularea înainte de producție pentru a o testa cu telefonul."],
    ],
    faq: [
      { q: "Îmi generați voi codul QR?", a: "Da. Ne trimiți linkul (site, meniu, recenzii Google, Instagram) și pregătim codul, testat la dimensiunea finală, împreună cu grafica etichetei." },
      { q: "Puteți imprima coduri de bare EAN?", a: "Da, imprimăm coduri de bare pe baza codurilor EAN pe care le deții. Codurile EAN se obțin de producător de la organizația GS1." },
      { q: "Faceți etichete de inventar numerotate?", a: "Da, etichete cu numerotare secvențială, logo și opțional cod de bare sau cod QR." },
      { q: "Cât costă stickerele cu cod QR?", a: "" },
    ],
  },
  {
    slug: "stickere-personalizate",
    type: "stickere",
    title: "Stickere personalizate cu logo, decupate pe contur | Etichett Prod",
    description: "Stickere personalizate cu logo, decupate pe contur, pentru ambalaje, colete, vitrine și mașini. Producător în Cluj",
    keywords: "stickere personalizate, stickere cu logo, stickere, stickere auto, stickere decorative, stickere vitrina, abtibilduri personalizate, stickere rotunde, stickere cluj",
    eyebrow: "Nou · Stickere",
    h1: "Stickere personalizate cu logo",
    subtitle: "Stickere pentru ambalaje, colete, vitrine, laptopuri, mașini sau evenimente — rotunde, pătrate sau decupate pe conturul logoului.",
    image: "/images/servicii/stickere-personalizate.svg",
    short: "Pentru ambalaje, colete, vitrine, mașini și promoții — decupate pe contur.",
    options: ["Decupare pe contur, rotunde, pătrate, ovale", "Hârtie lucioasă/mată, folie albă, transparentă, metalizată", "Laminare pentru rezistență la apă și UV", "Pe role (aplicare rapidă) sau pe coli", "Stickere pentru vitrine și autoturisme la cerere"],
    uses: ["Sigilarea coletelor și pungilor din magazinul online", "Branding pe ambalaje, cutii, cești de cafea", "Vitrine — program, plăți acceptate, social media", "Mașini și dube de firmă — logo, telefon", "Evenimente, concerte, campanii promoționale"],
    sections: [
      ["Stickerul, cea mai simplă reclamă", "Un sticker cu logo pus pe colet, pe punga de cumpărături sau pe cutia produsului face din fiecare livrare o reclamă mică. Clienții păstrează adesea stickerele reușite și le lipesc pe laptop sau pe telefon. Producem stickere personalizate în orice formă: rotunde, pătrate, ovale sau decupate exact pe conturul logoului."],
      ["Materiale pentru interior și exterior", "Pentru ambalaje și sigilii, hârtia lucioasă sau mată este suficientă. Pentru produse care intră în contact cu apa, pentru sticle sau pentru exterior recomandăm folie de vinil laminată, rezistentă la umezeală și la soare. Folia transparentă lasă să se vadă suprafața de dedesubt, iar cea metalizată dă un aspect premium. Te ajutăm să alegi în funcție de unde va sta stickerul și cât trebuie să reziste."],
      ["De la logo la role gata de aplicat", "Trimiți logoul, iar noi pregătim fișierul de tipar, linia de decupare și o simulare. După aprobare imprimăm și livrăm stickerele pe role sau coli. Dacă ai nevoie și de etichete pentru produse, cărți de vizită sau flyere, le putem face în aceeași comandă, cu aceeași identitate vizuală."],
    ],
    faq: [
      { q: "Puteți decupa stickerele pe conturul logoului?", a: "Da. Pregătim linia de decupare după forma logoului sau alegi o formă standard: cerc, pătrat, oval, dreptunghi cu colțuri rotunjite." },
      { q: "Sunt stickerele rezistente la apă?", a: "Pe folie de vinil laminată, da — sunt potrivite pentru sticle, exterior sau obiecte care se spală." },
      { q: "Faceți stickere pentru mașini și vitrine?", a: "Da, la cerere, pe folie potrivită pentru exterior. Spune-ne dimensiunile și suprafața de aplicare." },
      { q: "Cât costă stickerele personalizate?", a: "" },
    ],
  },
  {
    slug: "carti-de-vizita-cluj",
    type: "tipar",
    title: "Cărți de vizită Cluj-Napoca — personalizate, livrare rapidă | Etichett Prod",
    description: "Cărți de vizită personalizate în Cluj-Napoca, față-verso, pe carton mat sau lucios, cu design inclus la cerere",
    keywords: "carti de vizita, carti de vizita cluj, carti de vizita ieftine, carti de vizita personalizate, tipar carti de vizita, carti de vizita online, tipografie cluj, carti de vizita fata verso",
    eyebrow: "Nou · Tipografie",
    h1: "Cărți de vizită personalizate în Cluj-Napoca",
    subtitle: "Cărți de vizită pe carton de calitate, față-verso, cu grafica ta sau realizată de noi — tipărite local, la Cluj.",
    image: "/images/servicii/carti-de-vizita-cluj.svg",
    short: "Pe carton mat, lucios sau texturat, față-verso, cu design inclus la cerere.",
    options: ["Format standard 90 × 50 mm sau 85 × 55 mm", "Carton mat, lucios, texturat sau kraft", "Imprimare color față-verso", "Colțuri rotunjite, folio sau laminare la cerere", "Cod QR spre site, vCard sau WhatsApp"],
    uses: ["Firme, PFA-uri și profesioniști liberi", "Magazine, saloane, restaurante — carduri de fidelitate", "Meseriași, agenți imobiliari, consultanți", "Evenimente, târguri și conferințe", "Carduri de mulțumire în coletele online"],
    sections: [
      ["Cartea de vizită încă face prima impresie", "Chiar și într-o lume digitală, la o întâlnire, la un târg sau la casa de marcat o carte de vizită bine tipărită spune mult despre seriozitatea ta. Tipărim cărți de vizită în Cluj-Napoca pe carton gros, mat sau lucios, cu imprimare color față-verso. Le poți ridica direct de la atelierul nostru de pe Str. Uzinei Electrice sau le trimitem prin curier oriunde în România."],
      ["Design inclus și cod QR", "Dacă ai deja grafica, o verificăm (margini de tăiere, rezoluție, culori) înainte de tipar. Dacă nu, graficienii noștri îți pregătesc un design simplu și curat pornind de la logo și datele tale. Recomandăm să adaugi un cod QR care duce la site, la profilul de WhatsApp Business sau la un contact vCard, ca oamenii să te salveze în telefon dintr-o singură scanare."],
      ["Cărți de vizită, carduri de fidelitate și carduri de mulțumire", "Același format se poate folosi pentru carduri de fidelitate cu ștampile, pentru programări la salon sau pentru carduri de mulțumire puse în coletele magazinului online. Dacă vrei un set complet de identitate, le combinăm cu flyere, stickere cu logo și etichete pentru produse, toate în aceleași culori."],
    ],
    faq: [
      { q: "Faceți și designul cărților de vizită?", a: "Da. Pornind de la logo și datele tale, pregătim un design și îți trimitem simularea înainte de tipar." },
      { q: "Pot ridica cărțile de vizită din Cluj?", a: "Da, de la atelierul nostru din Cluj-Napoca, Str. Uzinei Electrice nr. 9, sau le livrăm prin curier în toată România." },
      { q: "Ce dimensiune are o carte de vizită?", a: "Formatul uzual în România este 90 × 50 mm; se folosește și 85 × 55 mm. Putem tipări și dimensiuni personalizate." },
      { q: "Cât costă cărțile de vizită?", a: "" },
    ],
  },
  {
    slug: "flyere-cluj",
    type: "tipar",
    title: "Flyere și pliante personalizate Cluj-Napoca | Etichett Prod",
    description: "Flyere promoționale și pliante în Cluj-Napoca: A6, A5, DL, color față-verso, cu design realizat la cerere",
    keywords: "flyere, flyere cluj, flyere ieftine, flyere personalizate, pliante, pliante cluj, tipar flyere, flyere promotionale, fluturasi publicitari",
    eyebrow: "Nou · Tipografie",
    h1: "Flyere promoționale și pliante în Cluj-Napoca",
    subtitle: "Flyere pentru deschideri, oferte, meniuri și evenimente — A6, A5 sau DL, față-verso, cu design realizat de noi la cerere.",
    image: "/images/servicii/flyere-cluj.svg",
    short: "A6, A5, DL, față-verso — pentru promoții, meniuri, evenimente și deschideri.",
    options: ["Formate A6, A5, A4, DL sau personalizate", "Hârtie lucioasă sau mată, de diferite grosimi", "Imprimare color față-verso", "Pliante împăturite în 2 sau 3", "Design și corectură incluse la cerere"],
    uses: ["Deschideri de magazine, restaurante, saloane", "Meniuri pentru livrare la domiciliu", "Oferte sezoniere și promoții", "Evenimente, cursuri, concerte", "Flyere puse în colete sau distribuite în cartier"],
    sections: [
      ["Un flyer bun se citește în trei secunde", "Flyerul funcționează când mesajul principal se înțelege dintr-o privire: ce oferi, de ce acum și cum te contactează omul. Te ajutăm să-l structurezi simplu — titlu mare, o ofertă clară, o imagine și datele de contact sau un cod QR — și îl tipărim pe hârtie de calitate, color, față-verso."],
      ["Formate și hârtie", "A6 este ideal pentru distribuție în mână și în colete, A5 pentru meniuri și oferte mai detaliate, iar formatul DL (cât o treime de A4) intră ușor în plic și în suporturile de la recepție. Hârtia lucioasă face culorile mai vii, cea mată dă un aspect elegant și se poate scrie pe ea. Pentru pliante împăturite în două sau în trei pregătim macheta astfel încât textul să cadă corect pe fiecare panou."],
      ["Tipar local în Cluj", "Lucrând local, poți veni la atelier să discuți macheta, iar corecturile se fac rapid. După aprobarea bunului de tipar, intrăm în producție și livrăm în Cluj-Napoca sau prin curier în țară. Dacă promovezi un produs nou, flyerele se pot face împreună cu stickere, cărți de vizită și etichete pentru ambalaj."],
    ],
    faq: [
      { q: "Ce format de flyer recomandați?", a: "A6 pentru distribuție în mână și în colete, A5 pentru meniuri sau oferte mai detaliate, DL pentru recepții și plicuri." },
      { q: "Faceți și designul flyerului?", a: "Da, la cerere. Ne trimiți textul, logoul și imaginile, iar noi pregătim macheta și o simulare pentru aprobare." },
      { q: "Tipăriți flyere față-verso?", a: "Da, color pe ambele fețe, pe hârtie lucioasă sau mată." },
      { q: "Cât costă flyerele?", a: "" },
    ],
  },
  {
    slug: "indicatoare-avertizare",
    type: "indicatoare",
    title: "Indicatoare și etichete de avertizare autocolante | Etichett Prod",
    description: "Autocolante de avertizare: Zonă supravegheată video, Pericol de electrocutare, Nu blocați intrarea, SSM și PSI",
    keywords: "indicatoare avertizare, autocolant zona supravegheata video, indicator pericol de electrocutare, autocolant nu blocati intrarea, indicatoare ssm, indicatoare psi, etichete avertizare, placute avertizare, fumatul interzis autocolant",
    eyebrow: "Nou · Indicatoare",
    h1: "Indicatoare și etichete de avertizare autocolante",
    subtitle: "Zonă supravegheată video, Pericol de electrocutare, Nu blocați intrarea, Fumatul interzis și alte indicatoare — standard sau personalizate cu logoul firmei.",
    image: "/images/servicii/indicatoare-avertizare.svg",
    short: "Supraveghere video, pericol electric, acces auto, fumat interzis, SSM/PSI, personalizate.",
    options: ["Zonă supravegheată video", "Pericol de electrocutare / tablou electric", "Nu blocați intrarea — acces auto", "Fumatul interzis, ieșire de urgență, stingător", "Folie pentru interior/exterior, laminare UV, dimensiuni la cerere"],
    uses: ["Firme și birouri — obligații SSM și PSI", "Blocuri și asociații de proprietari", "Magazine, depozite, ateliere", "Porți, garaje, parcări private", "Tablouri electrice și camere tehnice"],
    sections: [
      ["Indicatoare clare, vizibile de la distanță", "Un indicator de avertizare trebuie înțeles imediat, de oricine. De aceea folosim culorile și pictogramele consacrate — galben pentru avertizare, roșu pentru interdicții, verde pentru salvare, albastru pentru obligații — și un text scurt, cu litere mari. Producem autocolante de tip „Zonă supravegheată video”, „Pericol de electrocutare”, „Nu blocați intrarea — acces auto”, „Fumatul interzis” și multe altele."],
      ["Personalizate pentru clădirea ta", "Pe lângă modelele uzuale, putem adăuga logoul firmei, numele asociației de proprietari, un număr de telefon sau un text specific („Nu parcați — ieșire garaj nr. 3”). Alegem dimensiunea după distanța de la care trebuie citit indicatorul și materialul după locul de montaj: folie pentru interior sau folie laminată, rezistentă la ploaie și soare, pentru porți și fațade."],
      ["Etichete tehnice și de identificare", "Pentru tablouri electrice, conducte, utilaje sau rafturi producem și etichete tehnice: identificarea circuitelor, a robinetelor, avertizări pentru suprafețe fierbinți sau instrucțiuni de utilizare. Spune-ne ce trebuie semnalizat și îți propunem un set coerent, în același stil vizual."],
    ],
    faq: [
      { q: "Aveți autocolant „Zonă supravegheată video”?", a: "Da, în mai multe dimensiuni, pentru interior sau exterior, și îl putem personaliza cu numele firmei sau al asociației." },
      { q: "Rezistă indicatoarele la exterior?", a: "Pentru exterior folosim folie laminată, rezistentă la apă și la radiațiile UV." },
      { q: "Puteți face indicatoare cu text personalizat?", a: "Da, de exemplu „Nu blocați intrarea — acces auto” cu numărul porții sau telefonul administratorului." },
      { q: "Cât costă un indicator autocolant?", a: "" },
    ],
  },
  {
    slug: "imprimare-accesorii-personalizate",
    type: "accesorii",
    title: "Imprimare pe accesorii textile: sacoșe, șorțuri, perne | Etichett Prod",
    description: "Imprimare termo cu logo pe sacoșe de pânză, șorțuri, perne, tricouri și șepci, pentru firme și evenimente. Cluj",
    keywords: "sacose personalizate, sacose panza personalizate, imprimare sacose, sorturi personalizate, perne personalizate, imprimare textile, imprimare termotransfer, accesorii personalizate cu logo, tote bag personalizat",
    eyebrow: "Nou · Accesorii",
    h1: "Imprimare pe sacoșe, șorțuri și alte accesorii textile",
    subtitle: "Cu presele noastre termo imprimăm logo sau text pe sacoșe de pânză, șorțuri, perne, bandane, tricouri și șepci — pentru firme, evenimente și cadouri.",
    image: "/images/servicii/imprimare-accesorii-personalizate.svg",
    short: "Sacoșe de pânză, șorțuri, perne, bandane, tricouri și șepci, imprimate termo cu logo.",
    options: ["Sacoșe de pânză (tote bag) cu logo", "Șorțuri pentru restaurante, cafenele, ateliere", "Fețe de pernă, bandane, prosoape", "Tricouri, hanorace și șepci", "Imprimare termotransfer, una sau mai multe culori"],
    uses: ["Magazine — sacoșe reutilizabile cu brandul", "HoReCa — șorțuri pentru personal", "Evenimente și conferințe — kituri pentru participanți", "Cadouri personalizate pentru familie și prieteni", "Echipe, cluburi și școli"],
    sections: [
      ["Brandul tău pe obiecte folosite zilnic", "O sacoșă de pânză cu logo circulă luni întregi prin oraș, iar un șorț cu sigla cafenelei apare în fiecare fotografie făcută de clienți. În atelierul nostru din Cluj avem prese termo cu care aplicăm logo sau text pe accesorii textile: sacoșe, șorțuri, fețe de pernă, bandane, dar și pe tricouri, hanorace și șepci."],
      ["Cum lucrăm", "Ne trimiți logoul și ne spui pe ce produs și în ce poziție îl vrei. Pregătim grafica în CorelDRAW, la dimensiunea reală, și îți trimitem o simulare. Alegem materialul de transfer potrivit țesăturii, ca imprimarea să reziste la purtare și la spălare conform instrucțiunilor. Putem lucra cu articolele tale sau îți propunem noi produse textile potrivite."],
      ["Completează cu etichete", "Pentru o colecție proprie de accesorii poți adăuga etichete țesute sau imprimate cu brandul, etichete de compoziție și etichete agățătoare din carton — toate produse în același loc. Vezi și paginile despre tricouri personalizate, șepci personalizate și imprimare textile în Cluj."],
    ],
    faq: [
      { q: "Pe ce accesorii puteți imprima?", a: "Sacoșe de pânză, șorțuri, fețe de pernă, bandane, prosoape, tricouri, hanorace și șepci — practic textile care suportă presarea la cald." },
      { q: "Pot aduce eu sacoșele sau tricourile?", a: "Da. Verificăm materialul și îți spunem dacă se potrivește pentru imprimare termo." },
      { q: "Rezistă imprimarea la spălare?", a: "Alegem materialul de transfer după țesătură; respectând instrucțiunile de spălare, imprimarea rezistă la purtare și spălări repetate." },
      { q: "Cât costă o sacoșă personalizată?", a: "" },
    ],
  },
];

export const PRINT_SERVICE_BY_SLUG = Object.fromEntries(PRINT_SERVICES.map((s) => [s.slug, s])) as Record<string, PrintService>;
