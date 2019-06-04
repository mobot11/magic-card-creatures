import getCards from './getCards';

async function updateCards(dispatchFunction) {
    const cards = await getCards();
    dispatchFunction({ type: 'FETCH_CARDS', payload: cards });
}

export default updateCards;
