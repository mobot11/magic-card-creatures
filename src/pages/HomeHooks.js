import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardContext } from '../contexts/CardContext';
import CardContainer from '../components/CardContainer';
import updateCards from '../utils/updateCards';
import Loading from '../components/Loading';
import Header from '../components/Header';

const HomeHooks = () => {
    const { state, dispatch } = useContext(CardContext);
    useEffect(() => {
        updateCards(dispatch);
    }, []);

    const { cards, searchTerm } = state;

    let filteredCards;

    if (searchTerm.length > 0) {
        filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchTerm));
    } else {
        filteredCards = cards;
    }

    return (
        <Grid container>
            <Header />
            {cards.length <= 0 && <Loading />}
            <Grid item xs={12}>
                <CardContainer
                    cards={filteredCards}
                    // getMoreCards={this.getMoreCards}
                    // page={page}
                    // hasMoreItems={hasMoreItems}
                />
            </Grid>
        </Grid>
    );
};

export default HomeHooks;
