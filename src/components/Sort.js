import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { CardContext } from '../contexts/CardContext';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

function Sort({ classes }) {
    const [open, setOpen] = useState(false);

    const { state, dispatch } = useContext(CardContext);

    const { sortBy } = state;

    const handleChange = (event) => {
        dispatch({ type: 'UPDATE_SORT', payload: event.target.value });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <form autoComplete="off" className="filter-cards">
            <FormControl className={classes.formControl}>
                <InputLabel style={{ color: 'black' }} htmlFor="sort-by">
                    Sort
                </InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={sortBy}
                    onChange={handleChange}
                    inputProps={{
                        name: 'sortBy',
                        id: 'sort-by',
                    }}
                    style={{
                        backgroundColor: 'white',
                    }}
                >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="artist">Artist</MenuItem>
                    <MenuItem value="type">Type</MenuItem>
                    <MenuItem value="set">Set</MenuItem>
                </Select>
            </FormControl>
        </form>
    );
}

Sort.propTypes = {
    // eslint-disable-next-line
    classes: PropTypes.object,
};

export default withStyles(styles)(Sort);
