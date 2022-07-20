import { getSaludo, getUser } from "./functions";

describe('test demo', () => { 
    test('test1 - Numero igual', () => { 
        expect( 1===1 ).toBe(true)
     })

     test('test2 - Mensaje igual', () => { 
        // 1.Arrange / Inicio
        const message1 = 'hola';

        // 2.Act / Acciones
        const message2 = message1.trim()

        // 3.Assert / Observar el comportamiento
        expect(message1).toBe(message2)
    })

    test('test3 - getNombre', () => { 
        const nombre = "Benjamin"

        const message = getSaludo(nombre);

        expect(message).toBe(`Hola ${nombre}`)
    })

    test('test 4 - getUser', () => { 
        const testUser = {
            uid: "dn76ad87sd",
            username: 'benjarismendi'
        }

        const user = getUser();

        expect(testUser).toEqual(user)
     })



 })