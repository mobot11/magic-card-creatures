import React, { useContext } from 'react';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import { CardContext } from '../contexts/CardContext';

const Search = ({ searchClasses, inputRootClasses, inputInputClasses }) => {
    const { dispatch } = useContext(CardContext);

    return (
        <div className={`${searchClasses} search-box`}>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: inputRootClasses,
                    input: inputInputClasses,
                }}
                onChange={(e) => {
                    dispatch({ type: 'UPDATE_SEARCH', payload: e.target.value });
                }}
                style={{
                    width: '300px',
                    backgroundColor: 'white',
                }}
            />
        </div>
    );
};

Search.propTypes = {
    searchClasses: PropTypes.string,
    inputRootClasses: PropTypes.string,
    inputInputClasses: PropTypes.string,
};

Search.defaultProps = {
    searchClasses: '',
    inputRootClasses: '',
    inputInputClasses: '',
};

export default Search;
