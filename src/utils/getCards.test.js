import fetch from 'node-fetch';
import getCards from './getCards';

jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');

describe('get cards', () => {
    it('Should call fetch', async () => {
        fetch.mockReturnValue(Promise.resolve(new Response(JSON.stringify({ cards: [] }))));

        await getCards(20, 1, 'name');

        expect(fetch).toHaveBeenCalled();
    });
    it('Should call fetch with the correct query string', async () => {
        fetch.mockReturnValue(Promise.resolve(new Response(JSON.stringify({ cards: [] }))));

        await getCards(20, 1, 'name');

        expect(fetch).toHaveBeenCalledWith(
            'https://api.magicthegathering.io/v1/cards?type=creature&pageSize=20&page=1&contains=imageUrl&orderBy=name',
        );
    });
    it('Should only return cards with images', async () => {
        fetch.mockReturnValue(
            Promise.resolve(
                new Response(
                    JSON.stringify({
                        cards: [{ name: 'test', imageUrl: 'mycoolimage.jpg' }, { name: 'test2' }],
                    }),
                ),
            ),
        );

        const cards = await getCards(20, 1, 'name');

        expect(cards.length).toBe(1);
    });
});
