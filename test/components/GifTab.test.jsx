import { render, screen, fireEvent } from "@testing-library/react"
import { GifTab } from "../../src/components/GifTab"
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock('../../src/hooks/useFetchGif');

describe('Test en <GifTab />', () => {

    const search = 'Dexter';

    test('Debe mostrar inicialmente el loading', () => {

        useFetchGif.mockReturnValue({
            imagenes: [],
            loading: true
        })

        render( <GifTab search={search} /> )

    })

    test('Debe mostrar items cuando se cargan las imagenes en useFecthGifs', () => { 

        useFetchGif.mockReturnValue({
            imagenes: [
                {
                    id: 'ABC123',
                    title: 'Dexter GIF by benjarismendi',
                    fixed_height: 'https://dragonballgif.com/goku.jpg',
                    fixed_height_still: 'https://dragonballgif.com/goku.jpg',
                },
                {
                    id: 'ABC122',
                    title: 'Dexter GIF by benjarismendi',
                    fixed_height: 'https://dragonballgif.com/goku.jpg',
                    fixed_height_still: 'https://dragonballgif.com/goku.jpg',
                }
            ],
            loading: false,
        });

        render( <GifTab search={search} />)

        expect( screen.getAllByRole('img').length ).toBe(2);

     })
})