import fetch from 'node-fetch';

const removeDuplicates = (cards) => {
    // eslint-disable-next-line
    let names = {};
    // eslint-disable-next-line
    return cards.filter((card) => {
        // eslint-disable-next-line
        let { name } = card;
        if (!names[name]) {
            names[name] = 1;
            return card;
        }
    });
};

const getCards = async (pageSize = 20, page = 1, orderBy) => {
    try {
        const data = await fetch(`https://api.magicthegathering.io/v1/cards?type=creature&pageSize=${pageSize}&page=${page}&contains=imageUrl&orderBy=${orderBy}`);
        const jsonData = await data.json();
        const { cards } = jsonData;

        const withImages = cards.filter(card => !!card.imageUrl);
        return removeDuplicates(withImages);
    } catch (e) {
        throw e;
    }
};

export default getCards;
