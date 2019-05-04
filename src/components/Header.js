import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import logo from '../assets/magic-logo.jpg';

// eslint-disable-next-line
const styles = theme => ({
    '@global': {
        appBar: {
            position: 'relative',
        },
    },
    logo: {
        marginRight: 10,
        marginLeft: 16,
    },
});

const Header = ({ classes }) => (
    <AppBar position="static" color="default">
        <Toolbar>
            <Avatar alt="Magic The Gathering" src={logo} className={`${classes.avatar} ${classes.logo}`} />
            <Typography variant="h6" color="inherit" component="h1">
                Digital Magic (Cards)
            </Typography>
        </Toolbar>
    </AppBar>
);

Header.propTypes = {
    // eslint-disable-next-line
    classes: PropTypes.object
};

export default withStyles(styles)(Header);
