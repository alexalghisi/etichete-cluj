import type { CareSymbolProps } from '@/components/CareSymbol';
export const LANGUAGES=['RO','EN','DE','FR','IT','HU'] as const;
export type Language=typeof LANGUAGES[number];
export const FIBRES:Record<string,Record<Language,string>>={
  cotton:{RO:'Bumbac',EN:'Cotton',DE:'Baumwolle',FR:'Coton',IT:'Cotone',HU:'Pamut'},
  polyester:{RO:'Poliester',EN:'Polyester',DE:'Polyester',FR:'Polyester',IT:'Poliestere',HU:'Poliészter'},
  elastane:{RO:'Elastan',EN:'Elastane',DE:'Elasthan',FR:'Élasthanne',IT:'Elastan',HU:'Elasztán'},
  wool:{RO:'Lână',EN:'Wool',DE:'Wolle',FR:'Laine',IT:'Lana',HU:'Gyapjú'},
  linen:{RO:'In',EN:'Flax',DE:'Leinen',FR:'Lin',IT:'Lino',HU:'Len'},
  viscose:{RO:'Viscoză',EN:'Viscose',DE:'Viskose',FR:'Viscose',IT:'Viscosa',HU:'Viszkóz'},
  polyamide:{RO:'Poliamidă',EN:'Polyamide',DE:'Polyamid',FR:'Polyamide',IT:'Poliammide',HU:'Poliamid'},
  silk:{RO:'Mătase',EN:'Silk',DE:'Seide',FR:'Soie',IT:'Seta',HU:'Selyem'},
};
export const CARE_GROUPS:{name:string;options:CareSymbolProps[]}[]=[
 {name:'Spălare',options:[{shape:'basin',text:'30',label:'Spălare 30°C'},{shape:'basin',text:'40',label:'Spălare 40°C'},{shape:'basin',text:'60',label:'Spălare 60°C'},{shape:'basin',text:'30',bars:1,label:'Spălare delicată 30°C'},{shape:'basin',text:'30',bars:2,label:'Spălare foarte delicată 30°C'},{shape:'basin',hand:true,label:'Spălare manuală'},{shape:'basin',crossed:true,label:'Nu se spală'}]},
 {name:'Înălbire',options:[{shape:'triangle',crossed:true,label:'Nu se înălbește'},{shape:'triangle',stripes:true,label:'Înălbire fără clor'},{shape:'triangle',label:'Înălbire permisă'}]},
 {name:'Uscare',options:[{shape:'square',circleInSquare:true,crossed:true,label:'Fără uscător'},{shape:'square',circleInSquare:true,dots:1,label:'Uscător temperatură joasă'},{shape:'square',circleInSquare:true,dots:2,label:'Uscător temperatură normală'},{shape:'square',dryLine:'horizontal',label:'Uscare orizontală'},{shape:'square',dryLine:'vertical',label:'Uscare pe verticală'}]},
 {name:'Călcare',options:[{shape:'iron',dots:1,label:'Călcare joasă'},{shape:'iron',dots:2,label:'Călcare medie'},{shape:'iron',dots:3,label:'Călcare ridicată'},{shape:'iron',crossed:true,label:'Nu se calcă'}]},
 {name:'Curățare profesională',options:[{shape:'circle',text:'P',label:'Curățare profesională P'},{shape:'circle',text:'F',label:'Curățare profesională F'},{shape:'circle',text:'W',label:'Curățare profesională umedă W'},{shape:'circle',crossed:true,label:'Fără curățare chimică'}]},
];
export type CompositionData={fibres:{key:string;percent:number}[];languages:Language[];care:number[];size:string;madeInRomania:boolean;width:number;height:number};
export function compositionValid(fibres:CompositionData['fibres']):boolean{return fibres.length>0&&fibres.every(f=>Boolean(FIBRES[f.key])&&Number.isFinite(f.percent)&&f.percent>0&&f.percent<=100)&&Math.abs(fibres.reduce((a,f)=>a+f.percent,0)-100)<0.00001&&new Set(fibres.map(f=>f.key)).size===fibres.length;}
export function compositionLines(data:CompositionData):string[]{return data.languages.flatMap(lang=>[lang,...[...data.fibres].sort((a,b)=>b.percent-a.percent).map(f=>`${f.percent}% ${FIBRES[f.key]?.[lang]??''}`)]);}