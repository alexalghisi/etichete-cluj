// Ghiduri detaliate pe tip de etichetă (conținut editorial, fără prețuri sau termene).
// Cantitățile minime și termenele se citesc din business-facts.ts.

export type GuideTable = { caption: string; head: string[]; rows: string[][] };
export type GuideSection = { h: string; p?: string[]; list?: string[]; table?: GuideTable };
export type ProductGuideData = {
  title: string;
  intro: string;
  sections: GuideSection[];
  related: { to: string; label: string }[];
};

export const PRODUCT_GUIDES: Record<string, ProductGuideData> = {
  tesute: {
    title: "Ghid complet: etichete țesute personalizate",
    intro:
      "Eticheta țesută este cea mai durabilă variantă de etichetă de brand: logoul nu este imprimat pe suprafață, ci țesut din fire colorate, astfel încât nu se șterge și nu se decolorează la spălare. De aceea este alegerea standard pentru brandurile de îmbrăcăminte, genți, accesorii și textile pentru casă.",
    sections: [
      {
        h: "Damasc, taffeta sau satin țesut — care e diferența?",
        table: {
          caption: "Tipuri de etichete țesute",
          head: ["Tip", "Aspect", "Detalii fine", "Recomandat pentru"],
          rows: [
            ["Damasc (high density)", "Mat, țesătură foarte deasă", "Excelente — litere mici, contururi fine", "Branduri premium, logo-uri detaliate, gât tricou/cămașă"],
            ["Taffeta", "Ușor lucios, țesătură mai rară", "Bune — pentru text și logo simple", "Tiraje mari, etichete de mărime, buget optimizat"],
            ["Satin țesut", "Lucios, foarte moale la atingere", "Bune", "Lenjerie, haine de bebeluși, produse elegante"],
          ],
        },
      },
      {
        h: "Tăiere și pliere",
        p: [
          "Marginile se taie cu laser sau ultrasunete, astfel încât firele se topesc ușor și nu se destramă. Pentru margini perfect drepte în lungul etichetei se poate folosi și varianta cu margine țesută (woven edge).",
        ],
        list: [
          "Plată (fără pliere) — se coase pe toate cele 4 laturi sau doar pe capete.",
          "Pliată la capete (end fold) — aspect curat, cusătură ascunsă.",
          "Pliată la mijloc (center fold / loop) — se prinde în cusătura gulerului sau a tivului, cu fața și spatele vizibile.",
          "Pliată în colț (mitre fold) — clasic pentru tivuri și cusături laterale.",
          "Cu adeziv termocolant pe spate — se aplică la cald, fără cusătură.",
        ],
      },
      {
        h: "Cum pregătești designul pentru o etichetă țesută",
        list: [
          "Trimite logoul vectorial (PDF, AI, SVG, EPS) — dacă nu ai, îl redesenăm noi la simularea grafică.",
          "Evită textul foarte mic și liniile extrem de subțiri: la țesere, detaliile sub ~1,5 mm își pierd claritatea.",
          "Limitează numărul de culori: fiecare culoare înseamnă un fir separat; gradientele nu se pot țese, se simplifică în tonuri plate.",
          "Lasă 3–5 mm de margine liberă pe laturile pe care se coase.",
          "Pentru culorile exacte ale brandului indică un cod Pantone; potrivim firul cel mai apropiat.",
        ],
      },
      {
        h: "Dimensiuni uzuale",
        p: [
          "Pentru eticheta de gât cele mai folosite formate sunt 15×50 mm, 20×50 mm și 20×60 mm; pentru genți, blugi și produse mai mari se merge pe 25×70 mm sau mai mult. Lățimea benzii determină costul mai mult decât lungimea, de aceea un design orizontal, îngust, este de obicei cel mai eficient.",
        ],
      },
    ],
    related: [
      { to: "/etichete-satin", label: "Etichete satin imprimate" },
      { to: "/embleme-tesute", label: "Embleme și ecusoane țesute" },
      { to: "/etichete-marime", label: "Etichete de mărime" },
      { to: "/blog/etichete-tesute-vs-imprimate", label: "Țesute sau imprimate?" },
    ],
  },

  satin: {
    title: "Ghid complet: etichete satin (saten) personalizate",
    intro:
      "Eticheta din satin imprimat (numită frecvent și „etichetă saten”) este o bandă textilă lucioasă și foarte moale, pe care logoul și textul se imprimă. Nu zgârie pielea, de aceea e preferată pentru lenjerie, pijamale, haine pentru copii și articole handmade.",
    sections: [
      {
        h: "Satin imprimat vs. etichetă țesută",
        table: {
          caption: "Comparație satin imprimat și țesut",
          head: ["Criteriu", "Satin imprimat", "Țesut (damasc)"],
          rows: [
            ["Atingere", "Foarte moale, lucios", "Mai ferm, structurat"],
            ["Detalii grafice", "Foarte fine, inclusiv text mic", "Fine, dar limitate de densitatea firului"],
            ["Durabilitate la spălare", "Bună (cerneluri rezistente la spălare)", "Excelentă — imaginea face parte din țesătură"],
            ["Cantitate minimă", "Mică — ideal pentru colecții capsulă", "Mai mare, datorită setării războiului"],
            ["Utilizare tipică", "Lenjerie, bebeluși, handmade, compoziție", "Etichetă de brand premium"],
          ],
        },
      },
      {
        h: "Culori de bandă și imprimare",
        p: [
          "Banda de satin există în alb, ivoire/crem, negru și numeroase culori; imprimarea se face cu o culoare sau mai multe, inclusiv cu efect auriu sau argintiu. Satinul poate fi imprimat pe o singură față sau pe ambele, astfel încât pe aceeași etichetă să încapă și brandul, și compoziția.",
        ],
      },
      {
        h: "Când alegi satinul",
        list: [
          "Produse care stau direct pe piele: lenjerie, body-uri, pijamale, eșarfe.",
          "Branduri la început de drum, cu tiraje mici pe model.",
          "Etichete de compoziție și întreținere cu mult text (mai multe limbi).",
          "Produse handmade, croșetate sau tricotate, cadouri și ediții limitate.",
        ],
      },
      {
        h: "Aplicare",
        p: [
          "Satinul se livrează tăiat la dimensiune, cu margini sigilate, plat sau pliat la mijloc pentru a fi prins în cusătură. Pentru aplicare fără mașină de cusut se poate adăuga adeziv termocolant pe spate.",
        ],
      },
    ],
    related: [
      { to: "/etichete-tesute", label: "Etichete țesute pe damasc" },
      { to: "/etichete-nylon", label: "Etichete nylon (taffeta)" },
      { to: "/etichete-compozitie", label: "Etichete de compoziție" },
      { to: "/etichete-bumbac", label: "Etichete din bumbac" },
    ],
  },

  nylon: {
    title: "Ghid complet: etichete nylon (taffeta) imprimate",
    intro:
      "Eticheta din nylon (poliamidă), numită în industrie și „taffeta imprimată”, este un material subțire, rezistent și economic. Este standardul pentru etichetele de compoziție și întreținere cusute în cusătura laterală a hainelor, pentru că rezistă la spălări repetate, la curățare chimică și la temperaturi ridicate.",
    sections: [
      {
        h: "De ce nylon pentru compoziție și întreținere",
        list: [
          "Rezistent la spălare, călcare și curățare profesională — textul rămâne lizibil pe toată durata de viață a produsului.",
          "Subțire și flexibil — nu se simte prin haină și se coase ușor în cusătură.",
          "Permite mult text: compoziție, simboluri ISO 3758, mărime, cod de lot, „Made in”, în mai multe limbi.",
          "Cost redus pe bucată la tiraje mari.",
        ],
      },
      {
        h: "Variante de material",
        table: {
          caption: "Materiale pentru etichete imprimate",
          head: ["Material", "Atingere", "Utilizare tipică"],
          rows: [
            ["Nylon / poliamidă albă", "Fin, ușor rigid", "Compoziție și întreținere pentru confecții"],
            ["Taffeta poliester", "Mătăsos, subțire", "Compoziție, etichete multilingve pliate"],
            ["Satin poliester", "Foarte moale, lucios", "Lenjerie, haine pentru copii"],
            ["Bumbac", "Natural, mat", "Produse eco, handmade, haine pentru bebeluși"],
          ],
        },
      },
      {
        h: "Format și livrare",
        p: [
          "Etichetele de nylon se imprimă pe bandă continuă și se livrează tăiate la dimensiune sau în rolă, plate ori pliate la mijloc (pentru mai multe pagini de text, se pot face etichete tip „broșură” cu mai multe pliuri). Lățimile uzuale sunt între 20 și 40 mm.",
        ],
      },
      {
        h: "Ce trebuie să scrie pe eticheta de compoziție",
        p: [
          "Conform Regulamentului (UE) nr. 1007/2011, pe produsele textile vândute în România compoziția fibrelor trebuie indicată în limba română, cu denumirile complete ale fibrelor și procentele în ordinea descrescătoare a greutății. Simbolurile de întreținere urmează standardul ISO 3758.",
        ],
      },
    ],
    related: [
      { to: "/etichete-compozitie", label: "Etichete de compoziție" },
      { to: "/generator-eticheta-compozitie", label: "Generator gratuit de etichetă de compoziție" },
      { to: "/simboluri-etichete-haine", label: "Simboluri etichete haine" },
      { to: "/etichete-satin", label: "Etichete satin" },
    ],
  },

  carton: {
    title: "Ghid complet: etichete din carton (hangtag-uri) pentru haine",
    intro:
      "Hangtag-ul este eticheta de carton atașată de produs cu șnur sau agățătoare. Este primul lucru pe care clientul îl atinge în magazin, deci funcționează ca o carte de vizită a brandului: transmite stilul, prețul, mărimea și povestea produsului.",
    sections: [
      {
        h: "Ce informații pui pe un hangtag",
        list: [
          "Logo și numele brandului (față).",
          "Preț, mărime, culoare, cod de produs și cod de bare EAN (spate).",
          "Compoziția și indicații scurte de îngrijire (opțional — nu înlocuiesc eticheta cusută obligatorie).",
          "Site, Instagram, cod QR către colecție sau ghidul de mărimi.",
          "Un mesaj scurt despre brand sau despre materialele folosite.",
        ],
      },
      {
        h: "Carton, finisaje și forme",
        table: {
          caption: "Opțiuni pentru etichete de carton",
          head: ["Opțiune", "Variante", "Efect"],
          rows: [
            ["Carton", "Alb, kraft natural, negru, texturat, reciclat", "Stil minimalist, eco sau premium"],
            ["Grosime", "Carton gros, rigid (de obicei 300–400 g/m²)", "Senzație de calitate, nu se îndoaie"],
            ["Finisaje", "Laminare mată/lucioasă, folio auriu/argintiu, embosare, UV selectiv", "Evidențiază logoul"],
            ["Formă", "Dreptunghi, colțuri rotunjite, decupare pe contur", "Recunoaștere vizuală"],
            ["Prindere", "Gaură cu ochet, șnur textil, agățătoare plastic", "Montaj rapid pe produs"],
          ],
        },
      },
      {
        h: "Sfaturi de design",
        list: [
          "Păstrează fața aerisită — logoul și cel mult o linie de text.",
          "Pune informațiile variabile (preț, mărime, cod de bare) pe spate.",
          "Lasă zonă liberă în jurul găurii de prindere (minim 5 mm).",
          "Trimite fișierul cu 2–3 mm bleed și textele convertite în contur.",
        ],
      },
    ],
    related: [
      { to: "/etichete-tesute", label: "Etichete țesute de brand" },
      { to: "/etichete-autocolante", label: "Etichete autocolante" },
      { to: "/blog/cum-pregatesti-fisierul-de-design-pentru-etichete", label: "Cum pregătești fișierul de design" },
    ],
  },

  compozitie: {
    title: "Etichete de compoziție: cerințe legale și cum le comanzi corect",
    intro:
      "Orice produs textil pus pe piață în Uniunea Europeană trebuie să aibă etichetă sau marcaj cu compoziția fibrelor. Eticheta trebuie să fie durabilă, lizibilă, vizibilă și accesibilă, iar în România informațiile trebuie să fie și în limba română.",
    sections: [
      {
        h: "Ce cere Regulamentul (UE) nr. 1007/2011",
        list: [
          "Denumirile fibrelor se scriu complet, fără prescurtări (de ex. „bumbac”, „poliester”, „elastan”).",
          "Procentele se indică în ordinea descrescătoare a greutății fibrelor.",
          "Informația trebuie să fie în limba oficială a statului unde se vinde produsul — pentru România, limba română.",
          "Eticheta trebuie să fie durabilă și ușor de citit pe toată durata de utilizare a produsului.",
          "Pentru produse din mai multe componente (căptușeală, umplutură) se indică separat compoziția fiecărei componente.",
        ],
      },
      {
        h: "Simbolurile de întreținere (ISO 3758)",
        p: [
          "Simbolurile de întreținere se afișează în ordinea: spălare, înălbire, uscare, călcare, curățare profesională. Deși nu sunt obligatorii prin regulamentul european, sunt așteptate de clienți și de retaileri. Le găsești explicate pe pagina „Simboluri etichete haine”.",
        ],
      },
      {
        h: "Exemplu de etichetă multilingvă",
        table: {
          caption: "Exemplu",
          head: ["Limba", "Text"],
          rows: [
            ["RO", "95% bumbac, 5% elastan"],
            ["EN", "95% cotton, 5% elastane"],
            ["DE", "95% Baumwolle, 5% Elasthan"],
            ["FR", "95% coton, 5% élasthanne"],
            ["IT", "95% cotone, 5% elastan"],
          ],
        },
      },
      {
        h: "Materiale recomandate",
        p: [
          "Pentru compoziție se folosește de obicei nylon sau taffeta (rezistente și subțiri), satin pentru produsele care stau pe piele și bumbac pentru produsele eco. Etichetele cu mult text se pot face pliate, cu mai multe pagini.",
        ],
      },
    ],
    related: [
      { to: "/generator-eticheta-compozitie", label: "Generează gratuit eticheta de compoziție" },
      { to: "/simboluri-etichete-haine", label: "Simboluri etichete haine" },
      { to: "/etichete-nylon", label: "Etichete nylon" },
      { to: "/blog/etichete-compozitie-cerinte-legale-ue", label: "Articol: cerințe legale în UE" },
    ],
  },

  autocolante: {
    title: "Ghid: etichete autocolante pentru produse și ambalaje",
    intro:
      "Etichetele autocolante sunt cea mai rapidă metodă de a marca produsele, cutiile, borcanele, pungile și ambalajele de livrare. Se livrează pe role (pentru aplicare manuală sau cu imprimantă/aplicator) sau pe coli, în orice formă și dimensiune.",
    sections: [
      {
        h: "Materiale pentru etichete autocolante",
        table: {
          caption: "Materiale autocolante",
          head: ["Material", "Caracteristici", "Utilizare"],
          rows: [
            ["Hârtie velină", "Economică, mată, se poate scrie pe ea", "Cutii, pungi, etichete de preț"],
            ["Hârtie lucioasă / cretată", "Culori vii", "Produse cosmetice, alimentare"],
            ["Folie PP albă", "Rezistentă la apă și umezeală", "Sticle, produse din frigider, băi"],
            ["Folie transparentă", "Efect „no label”", "Borcane, sticlă, ambalaje premium"],
            ["Hârtie texturată / kraft", "Aspect artizanal", "Vinuri, miere, produse handmade"],
          ],
        },
      },
      {
        h: "Finisaje și forme",
        list: [
          "Laminare mată sau lucioasă pentru protecție la zgârieturi.",
          "Folio auriu sau argintiu, lac UV selectiv, embosare.",
          "Formă dreptunghiulară, rotundă, ovală sau decupată pe contur.",
          "Pe role cu diametrul miezului potrivit imprimantei tale, sau pe coli.",
        ],
      },
      {
        h: "Ce trebuie să ne spui pentru ofertă",
        list: ["Dimensiunea și forma", "Materialul și suprafața pe care se lipesc", "Cantitatea pe model și numărul de modele", "Livrare pe rolă (sens de derulare) sau pe coli"],
      },
    ],
    related: [
      { to: "/etichete-autoadezive", label: "Etichete autoadezive" },
      { to: "/etichete-carton", label: "Hangtag-uri din carton" },
      { to: "/cere-oferta", label: "Cere ofertă" },
    ],
  },

  autoadezive: {
    title: "Ghid: cum alegi adezivul potrivit pentru etichete autoadezive",
    intro:
      "La o etichetă autoadezivă, adezivul contează la fel de mult ca imprimarea: o etichetă care se dezlipește în frigider sau lasă urme pe produs strică impresia despre brand. Alegerea corectă depinde de suprafață, temperatură și cât timp trebuie să stea eticheta pe produs.",
    sections: [
      {
        h: "Tipuri de adeziv",
        table: {
          caption: "Tipuri de adeziv",
          head: ["Adeziv", "Comportament", "Exemple"],
          rows: [
            ["Permanent", "Nu se poate dezlipi fără a rupe eticheta", "Etichete de produs, sigilii, borcane"],
            ["Removabil", "Se dezlipește fără urme", "Etichete de preț, ambalaje cadou"],
            ["Pentru congelare", "Rămâne lipit la temperaturi negative", "Produse congelate, frigorifice"],
            ["Pentru suprafețe dificile", "Aderență mare pe suprafețe curbe sau texturate", "Sticle mici, plastic, lemn"],
          ],
        },
      },
      {
        h: "Etichete autoadezive pentru textile",
        p: [
          "Pe textile, un adeziv obișnuit nu rezistă la spălare. Pentru haine se folosesc etichete termoadezive (se aplică cu fierul de călcat), prezentate pe pagina de etichete termoadezive pentru haine.",
        ],
      },
      {
        h: "Sfaturi de aplicare",
        list: [
          "Suprafața trebuie să fie curată, uscată și fără grăsime.",
          "Aplică eticheta la temperatura camerei, apoi apasă ferm pe toată suprafața.",
          "Adezivul își atinge aderența maximă după aproximativ 24 de ore.",
          "Pentru aplicare automată, comunică-ne sensul de derulare și diametrul miezului rolei.",
        ],
      },
    ],
    related: [
      { to: "/etichete-autocolante", label: "Etichete autocolante" },
      { to: "/etichete-termoadezive", label: "Etichete termoadezive pentru haine" },
      { to: "/cere-oferta", label: "Cere ofertă" },
    ],
  },

  produse: {
    title: "Cum alegi tipul de etichetă potrivit",
    intro:
      "Alegerea depinde de produs, de cât de des se spală și de imaginea pe care vrei să o transmiți. Tabelul de mai jos rezumă pe scurt ce recomandăm în funcție de utilizare.",
    sections: [
      {
        h: "Recomandări pe tip de produs",
        table: {
          caption: "Ce etichetă alegi",
          head: ["Produs", "Etichetă de brand", "Compoziție / întreținere"],
          rows: [
            ["Tricouri, hanorace", "Țesută damasc sau termoadezivă", "Nylon / satin imprimat"],
            ["Rochii, cămăși", "Țesută damasc, pliată", "Satin sau taffeta"],
            ["Lenjerie, pijamale", "Satin imprimat sau termoimprimare", "Satin moale"],
            ["Haine pentru bebeluși și copii", "Satin sau bumbac", "Satin / bumbac; nume: termoadezive"],
            ["Blugi, genți, marochinărie", "Țesută lată sau emblemă", "Nylon"],
            ["Uniforme, haine de lucru", "Emblemă țesută", "Nylon rezistent"],
            ["Produse handmade, cadouri", "Bumbac sau satin", "Satin / bumbac"],
            ["Cutii, borcane, ambalaje", "Autocolante", "—"],
            ["Prezentare în magazin", "Hangtag din carton", "—"],
          ],
        },
      },
    ],
    related: [
      { to: "/etichete-haine", label: "Etichete pentru haine" },
      { to: "/etichete-personalizate", label: "Etichete personalizate" },
      { to: "/cere-oferta", label: "Cere ofertă" },
    ],
  },

  oferta: {
    title: "Ce să pregătești pentru o ofertă rapidă",
    intro:
      "Cu cât cererea e mai completă, cu atât primești mai repede prețul exact și simularea grafică. Nu e nevoie să știi totul — dacă nu ești sigur de material sau dimensiune, te ajutăm noi să alegi.",
    sections: [
      {
        h: "Informații utile",
        list: [
          "Tipul de etichetă (țesută, satin, nylon, bumbac, termoadezivă, carton, autocolantă) sau produsul pe care îl etichetezi.",
          "Dimensiunea aproximativă (lățime × lungime, în mm) și modul de aplicare: cusută, termocolantă sau lipită.",
          "Cantitatea pe model și numărul de modele (de ex. 4 mărimi × 500 buc).",
          "Logoul, de preferat vectorial (PDF, AI, SVG, EPS); acceptăm și PNG la rezoluție mare.",
          "Culorile brandului (cod Pantone, dacă îl ai) și culoarea fundalului.",
          "Data până la care ai nevoie de etichete.",
        ],
      },
      {
        h: "Ce urmează după trimitere",
        list: [
          "Primești oferta cu prețul și termenul de producție.",
          "Pregătim simularea grafică gratuită și bunul de tipar.",
          "După aprobare, intră în producție în atelierul din Cluj-Napoca.",
          "Ridici personal sau primești coletul prin curier oriunde în țară.",
        ],
      },
    ],
    related: [
      { to: "/produse", label: "Vezi toate tipurile de etichete" },
      { to: "/galerie", label: "Galerie de lucrări" },
      { to: "/blog/greseli-frecvente-comandarea-etichetelor-textile", label: "Greșeli frecvente la comandă" },
    ],
  },

  generator: {
    title: "Cum folosești generatorul de etichetă de compoziție",
    intro:
      "Generatorul te ajută să construiești corect textul și simbolurile unei etichete de compoziție și întreținere, gata de trimis la producție. Fișierul descărcat este o machetă; înainte de producție îți trimitem bunul de tipar spre aprobare.",
    sections: [
      {
        h: "Pași",
        list: [
          "Adaugă fibrele și procentele — totalul trebuie să fie exact 100%, în ordinea descrescătoare a greutății.",
          "Alege simbolurile de întreținere în ordinea ISO 3758: spălare, înălbire, uscare, călcare, curățare profesională.",
          "Selectează limbile; pentru produsele vândute în România limba română este obligatorie.",
          "Adaugă mărimea și, opțional, țara de fabricație.",
          "Descarcă SVG/PNG sau trimite direct comanda.",
        ],
      },
      {
        h: "Greșeli frecvente",
        list: [
          "Prescurtări ale fibrelor (de ex. „PES”, „CO”) — pe eticheta pentru consumatori se scrie denumirea completă.",
          "Total de procente diferit de 100%.",
          "Simbol de spălare mai permisiv decât suportă cea mai sensibilă componentă a produsului.",
          "Lipsa compoziției separate pentru căptușeală sau umplutură.",
        ],
      },
    ],
    related: [
      { to: "/simboluri-etichete-haine", label: "Ce înseamnă simbolurile" },
      { to: "/etichete-compozitie", label: "Etichete de compoziție" },
      { to: "/etichete-nylon", label: "Etichete nylon" },
    ],
  },
};
