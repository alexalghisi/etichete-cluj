import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Phone,MessageCircle,ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { BUSINESS } from '@/lib/business-facts';
import { trackConversion } from '@/lib/conversions';
export function ConversionControls(){
 useEffect(()=>{const click=(e:MouseEvent)=>{const a=(e.target as Element).closest?.('a');const href=a?.getAttribute('href')??'';if(href.startsWith('tel:'))trackConversion('click_phone');if(href.includes('wa.me/'))trackConversion('click_whatsapp');};document.addEventListener('click',click);return()=>document.removeEventListener('click',click);},[]);
 return <><Button asChild size="icon" className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 rounded-full shadow-elegant md:inline-flex"><a href={BUSINESS.whatsapp} aria-label="WhatsApp" title="WhatsApp"><MessageCircle className="h-6 w-6"/></a></Button><nav aria-label="Contact rapid" className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-3 border-t border-border bg-background md:hidden"><Button asChild variant="ghost" className="h-full rounded-none"><a href={BUSINESS.phoneHref}><Phone/>Sună</a></Button><Button asChild variant="ghost" className="h-full rounded-none"><a href={BUSINESS.whatsapp}><MessageCircle/>WhatsApp</a></Button><Button asChild className="h-full rounded-none"><Link to="/cere-oferta"><ArrowRight/>Cere ofertă</Link></Button></nav></>;
}