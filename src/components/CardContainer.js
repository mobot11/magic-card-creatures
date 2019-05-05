import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InfiniteScroll from 'react-infinite-scroller';
import MagicCard from './MagicCard';
import getCards from '../utils/getCards';
import Loading from './Loading';

class CardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moreCards: [],
            page: 2,
            hasMoreItems: true,
        };
    }

    _getMoreCards() {
        const { page } = this.state;
        const nextPage = page + 1;
        getCards(20, page)
            .then((cards) => {
                if (!cards.length) {
                    this.setState({
                        hasMoreItems: false,
                    });
                } else {
                    this.setState({
                        moreCards: cards,
                        page: nextPage,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { cards } = this.props;
        const { moreCards, hasMoreItems } = this.state;
        let magicCards = cards.map(card => (
            <Grid key={card.name} item>
                <MagicCard
                    image={card.imageUrl}
                    name={card.name}
                    artist={card.artist}
                    set={card.set}
                    type={card.type}
                    colors={card.colors}
                />
            </Grid>
        ));
        if (moreCards.length) {
            magicCards = [
                ...magicCards,
                moreCards.map(card => (
                    <Grid key={card.name} item>
                        <MagicCard
                            image={card.imageUrl}
                            name={card.name}
                            artist={card.artist}
                            set={card.set}
                            type={card.type}
                            colors={card.colors}
                        />
                    </Grid>
                )),
            ];
        }
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this._getMoreCards.bind(this)}
                hasMore={hasMoreItems}
                loader={<Loading />}
            >
                <Grid
                    container
                    spacing={16}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    style={{
                        maxWidth: '1260px',
                        margin: '0 auto',
                    }}
                >
                    {magicCards}
                </Grid>
            </InfiniteScroll>
        );
    }
}

CardContainer.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
    ),
};

CardContainer.defaultProps = {
    cards: [],
};

export default CardContainer;
