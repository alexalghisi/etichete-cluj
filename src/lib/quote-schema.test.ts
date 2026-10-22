import {it,expect} from 'vitest';
import {quoteSchema} from './quote-schema';
const quote={id:'00000000-0000-4000-8000-000000000000',type:'satin',width:15,height:50,quantity:100,colors:'',finish:'Tăiat',application:'cusut',deadline:'',name:'Test client',company:'',phone:'0747264832',email:'test@example.invalid',logoPath:null,labelData:'',website:'',consent:true};
it('accepts a valid 100-piece printed quote',()=>expect(quoteSchema.safeParse(quote).success).toBe(true));
it('rejects non-phone input',()=>expect(quoteSchema.safeParse({...quote,phone:'<script>abc</script>'}).success).toBe(false));
it('requires quote consent',()=>expect(quoteSchema.safeParse({...quote,consent:false}).success).toBe(false));
it('rejects an invalid desired date',()=>expect(quoteSchema.safeParse({...quote,deadline:'tomorrow<script>'}).success).toBe(false));
