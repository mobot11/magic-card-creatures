import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = { cards: [], searchTerm: '', sortBy: 'name' };
const CardContext = createContext(initialState);

function stateReducer(state, action) {
    switch (action.type) {
    case 'FETCH_CARDS': {
        const { cards } = state;
        const allCards = [...cards, ...action.payload];
        const hasMore = action.payload.length <= 0;
        return { ...state, cards: allCards, hasMore };
    }
    case 'UPDATE_SORT': {
        const { cards, sortBy } = state;
        if (action.payload !== sortBy) {
            const sortedCards = cards.sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return 1;
                }
                return 0;
            });
            return { ...state, cards: sortedCards, sortBy: action.payload };
        }
        return state;
    }
    case 'UPDATE_SEARCH': {
        return { ...state, searchTerm: action.payload };
    }
    default:
        return state;
    }
}

const CardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    return <CardContext.Provider value={{ state, dispatch }}>{children}</CardContext.Provider>;
};

CardProvider.propTypes = {
    // eslint-disable-next-line
    children: PropTypes.any,
};

CardProvider.defaultProps = {
    children: null,
};

export { CardContext, CardProvider };
