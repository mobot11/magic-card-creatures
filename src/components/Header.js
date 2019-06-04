import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Sort from './Sort';
import Search from './Search';
import logo from '../assets/magic-logo.jpg';
import '../App.css';

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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Header = ({ classes }) => {
    // eslint-disable-next-line
    const { windowWidth } = window;
    return (
        <AppBar position="static" color="default">
            <Toolbar className="toolbar">
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    alignContent="center"
                    className="header-toolbar"
                >
                    <div className="logo-container">
                        <Avatar
                            alt="Magic The Gathering"
                            src={logo}
                            className={`${classes.avatar} ${classes.logo}`}
                        />
                        <Typography
                            variant="h6"
                            color="inherit"
                            component="h1"
                            className="logo-copy"
                        >
                            Digital Magic (Cards)
                        </Typography>
                    </div>
                    <Search
                        searchClasses={classes.search}
                        inputRootClasses={classes.inputRoot}
                        inputInputClasses={classes.inputInput}
                    />
                    <Sort />
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    // eslint-disable-next-line
    classes: PropTypes.object,
};

export default withStyles(styles)(Header);
