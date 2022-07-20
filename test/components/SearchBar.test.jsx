import { render, screen, fireEvent } from "@testing-library/react"
import { SearchBar } from "../../src/components/SearchBar"

describe('Test en <SearchBar />', () => {
    test('Debe cambiar el valor del input', () => {
        render( <SearchBar addSearch= {()=>{}}/>)

        const input =  screen.getByRole('searchbox');
        fireEvent.change( input, {target: {value: 'Goku'}})
        expect(input.value).toBe('Goku')
    });

    test('Debe llamar a la funcion addSearch si el input tiene valor', () => { 
        const inputValue = 'Goku';
        const addSearch = jest.fn();
        render( <SearchBar addSearch={addSearch}/> )
        const input = screen.getByRole('searchbox');
        const form = screen.getByRole('form');
        fireEvent.change(input, {target: {value: inputValue}});
        fireEvent.submit( form );
        screen.debug();
        expect( input. value ).toBe( '' );
        expect( addSearch ).toHaveBeenCalled();
        expect( addSearch ).toHaveBeenCalledTimes(1);
     });

     test('No debe llamar a la funcion addSearch si el input esta vacio', () => { 
        
        const addSearch = jest.fn();
        render( <SearchBar addSearch={addSearch}/> )

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( addSearch ).not.toHaveBeenCalled();

      })
})