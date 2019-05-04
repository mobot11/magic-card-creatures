import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MagicCard from './MagicCard';

const CardContainer = ({ cards }) => (
    <Grid container spacing={16} direction="row" justify="center" alignItems="center">
        {cards.map(card => (
            <Grid key={card.name} item>
                <MagicCard
                    image={card.imageUrl}
                    name={card.name}
                    artist={card.artist}
                    set={card.set}
                    type={card.type}
                />
            </Grid>
        ))}
    </Grid>
);

CardContainer.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
    ),
};

CardContainer.defaultProps = {
    cards: [],
};

export default CardContainer;
