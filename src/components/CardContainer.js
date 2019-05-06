import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InfiniteScroll from 'react-infinite-scroller';
import MagicCard from './MagicCard';
import Loading from './Loading';

const CardContainer = ({ cards, getMoreCards, hasMoreItems }) => {
    // eslint-disable-next-line
    const windowWidth = window.innerWidth;
    const magicCards = cards.map(card => (
        <Grid key={`${card.id}`} item>
            <MagicCard
                key={card.id}
                image={card.imageUrl}
                name={card.name}
                artist={card.artist}
                set={card.set}
                type={card.type}
                colors={card.colors}
            />
        </Grid>
    ));
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={getMoreCards}
            hasMore={hasMoreItems}
            loader={<Loading />}
        >
            <Grid
                container
                spacing={16}
                direction="row"
                justify="flex-start"
                alignItems="center"
                alignContent="center"
                style={{
                    maxWidth: '1260px',
                    margin: '0 auto',
                }}
                className="card-grid"
            >
                {magicCards}
            </Grid>
        </InfiniteScroll>
    );
};

CardContainer.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
    ),
    getMoreCards: PropTypes.func.isRequired,
    hasMoreItems: PropTypes.bool.isRequired,

};

CardContainer.defaultProps = {
    cards: [],
};

export default CardContainer;
