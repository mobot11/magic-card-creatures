import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardContainer from '../components/CardContainer';
import getCards from '../utils/getCards';
import Loading from '../components/Loading';
import Header from '../components/Header';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: [],
            orderBy: 'name',
            page: 1,
            hasMoreItems: true,
            searchTerm: '',
        };
    }

    async componentDidMount() {
        const { orderBy } = this.state;
        const cards = await getCards(20, 1, orderBy);

        this.setState({ cards });
    }

    orderCards = (cards, orderBy) => cards.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
            return -1;
        }
        if (a[orderBy] > b[orderBy]) {
            return 1;
        }
        return 0;
    });

    getMoreCards = () => {
        const { page, orderBy } = this.state;
        const nextPage = page + 1;
        getCards(20, page, orderBy)
            .then((cards) => {
                if (!cards.length) {
                    this.setState({
                        hasMoreItems: false,
                    });
                } else {
                    const orderedCards = this.orderCards(cards, orderBy);
                    this.setState({
                        cards: orderedCards,
                        page: nextPage,
                    });
                }
            })
            .catch((error) => {
                // eslint-disable-next-line
                console.error(error);
            });
    };

    onSortChange = (orderBy) => {
        this.setState({ orderBy });
    };

    onSearchChange = (e) => {
        const searchTerm = e.target.value;
        this.setState({ searchTerm });
    };

    render() {
        const {
            cards, page, hasMoreItems, orderBy, searchTerm,
        } = this.state;

        if (!cards.length) {
            return (
                <React.Fragment>
                    <Header onSearchChange={this.onSearchChange} />
                    <Loading />
                </React.Fragment>
            );
        }
        let includedCards;
        if (searchTerm.length) {
            includedCards = cards.filter((card) => {
                const { name } = card;

                return name.toLowerCase().includes(searchTerm.toLowerCase());
            });
        } else {
            includedCards = cards;
        }

        if (!includedCards.length) {
            return (
                <div>No Results found.</div>
            );
        }

        const orderedCards = this.orderCards(includedCards, orderBy);

        return (
            <Grid container>
                <Header onChange={this.onSortChange} onSearchChange={this.onSearchChange} />
                <Grid item xs={12}>
                    <CardContainer
                        cards={orderedCards}
                        getMoreCards={this.getMoreCards}
                        page={page}
                        hasMoreItems={hasMoreItems}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default Home;
