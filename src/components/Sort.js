import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class Sort extends React.Component {
    state = {
        sortBy: 'name',
        open: false,
    };

    handleChange = (event) => {
        const { onChange } = this.props;
        this.setState({ [event.target.name]: event.target.value });

        onChange(event.target.value);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { classes } = this.props;
        const { open, sortBy } = this.state;

        return (
            <form autoComplete="off" className="filter-cards">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="sort-by">Sort</InputLabel>
                    <Select
                        open={open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={sortBy}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'sortBy',
                            id: 'sort-by',
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
}

Sort.propTypes = {
    // eslint-disable-next-line
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

Sort.defaultProps = {
    onChange: () => {},
};

export default withStyles(styles)(Sort);
