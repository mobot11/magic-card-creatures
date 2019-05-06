import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

// eslint-disable-next-line
const styles = theme => ({
    card: {
        width: 290,
        height: 585,
    },
    cardDescriptionTitle: {
        fontWeight: 'bold',
        lineHeight: '1.3em',
    },
    media: {
        height: 320,
        width: 223,
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 500,
        padding: '0 16px',
    },
});

const MagicCard = ({
    image, name, artist, set, type, colors, classes,
}) => {
    const gradientColors = {
        Blue: '#68A8CB',
        Green: '#7BA07E',
        Black: '#0000004d',
        White: '#EAE0CC',
        Red: '#BF614B',
    };

    const gradientColor = gradientColors[colors[0]] ? gradientColors[colors[0]] : '#FFF';
    return (
        <Card
            className={classes.card}
        >
            <CardHeader
                title={name}
                classes={{ title: classes.title }}
            />
            <CardContent
                style={{
                    background: `linear-gradient(#FFF, ${gradientColor}, #FFF)`,
                    padding: '16px 30px',
                }}
            >
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Academy Researchers"
                    alt="Academy Researchers"
                />
            </CardContent>
            <CardContent
                style={{
                    padding: '16px 30px',
                }}
            >
                <p className="cardDescription">
                    <span className={classes.cardDescriptionTitle}>Artist: </span>
                    {artist}
                </p>
                <p className="cardDescription">
                    <span className={classes.cardDescriptionTitle}>Type: </span>
                    {type}
                </p>
                <p className="cardDescription">
                    <span className={classes.cardDescriptionTitle}>Set: </span>
                    {set}
                </p>
            </CardContent>
        </Card>
    );
};

MagicCard.propTypes = {
    image: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    set: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // eslint-disable-next-line
    classes: PropTypes.object,
    // eslint-disable-next-line
    colors: PropTypes.array,
};

MagicCard.defaultProps = {
    classes: {},
};

export default withStyles(styles)(MagicCard);
