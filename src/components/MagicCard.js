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
        maxWidth: 300,
        maxHeight: 490,
    },
    media: {
        height: 310,
        width: 223,
    },
});

const MagicCard = ({
    image,
    name,
    artist,
    set,
    type,
    classes,
}) => (
    <Card className={classes.card}>
        <CardHeader
            title={name}
        />
        <CardContent>
            <CardMedia
                className={classes.media}
                image={image}
                title="Academy Researchers"
                alt="Academy Researchers"
            />
        </CardContent>
    </Card>
);

MagicCard.propTypes = {
    image: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    set: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // eslint-disable-next-line
    classes: PropTypes.object,
};

MagicCard.defaultProps = {
    classes: {},
};

export default withStyles(styles)(MagicCard);
