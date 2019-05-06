import fetch from 'node-fetch';
import getCards from './getCards';


describe('get cards', () => {
    console.log(fetch);
    it('Should call fetch', async () => {
        getCards(1, 20, 'Name');

        await expect(fetch).toHaveBeenCalledTimes(1);
    });
});
