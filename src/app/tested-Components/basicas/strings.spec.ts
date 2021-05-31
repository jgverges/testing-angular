import { message} from './strings'

describe('test of strings', () =>{

    it('Return a string', ()=>{
        const resp = message('Jordi');

        expect(typeof resp).toBe('string')
    })
    it('Returns a greeting with the name entered', ()=>{
        const name ='Jordi';
        const resp = message(name);
        expect(resp).toContain(name);
    })
})