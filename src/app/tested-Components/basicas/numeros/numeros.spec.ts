import { increase } from "./numeros"

describe('test of increase function', () => {
    it('Number greater 100 became 100', () =>{
        const number = 110;
        const resp = increase(number);
        expect(resp).toBe(100)
    })
    it('Increase 1 to number', () =>{
        const number = 30;
        const resp = increase(number);
        expect(resp).toBe(number +1)
    })
})