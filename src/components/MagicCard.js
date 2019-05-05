import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        width: 290,
        height: 560,
    },
    cardDescriptionTitle: {
        fontWeight: 'bold',
    },
    media: {
        height: 310,
        width: 223,
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 500,
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
                }}
            >
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Academy Researchers"
                    alt="Academy Researchers"
                />
            </CardContent>
            <CardContent>
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
