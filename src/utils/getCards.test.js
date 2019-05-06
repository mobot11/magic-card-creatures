import fetch from 'node-fetch';
import getCards from './getCards';

jest.mock('node-fetch');
describe('get cards', () => {
    it('Should call fetch', async () => {
        getCards(1, 20, 'Name');

        await expect(fetch).toHaveBeenCalledTimes(1);
    });
});
