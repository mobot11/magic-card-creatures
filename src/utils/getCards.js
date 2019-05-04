import fetch from 'node-fetch';

const getCards = async (pageSize = 20, page = 1) => {
    try {
        const data = await fetch(`https://api.magicthegathering.io/v1/cards?type=creature&pageSize=${pageSize}&page=${page}&contains=imageUrl`);
        const jsonData = await data.json();
        const { cards } = jsonData;

        return cards.filter(card => !!card.imageUrl);
    } catch (e) {
        throw e;
    }
};

export default getCards;
