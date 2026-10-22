import { it,expect } from 'vitest';
import { compositionValid,compositionLines } from './composition';
it('composition accepts exactly 100 percent',()=>expect(compositionValid([{key:'cotton',percent:95},{key:'elastane',percent:5}])).toBe(true));
it('composition rejects less than 100 percent',()=>expect(compositionValid([{key:'cotton',percent:90}])).toBe(false));
it('composition rejects more than 100 percent',()=>expect(compositionValid([{key:'cotton',percent:99},{key:'elastane',percent:5}])).toBe(false));
it('composition rejects duplicated fibres',()=>expect(compositionValid([{key:'cotton',percent:50},{key:'cotton',percent:50}])).toBe(false));
it('six languages translate cotton concretely',()=>expect(compositionLines({fibres:[{key:'cotton',percent:100}],languages:['RO','EN','DE','FR','IT','HU'],care:[0,0,0,0,0],size:'M',madeInRomania:true,width:25,height:70}))).toEqual(['RO','100% Bumbac','EN','100% Cotton','DE','100% Baumwolle','FR','100% Coton','IT','100% Cotone','HU','100% Pamut']));