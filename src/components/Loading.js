import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => (
    <Grid
        container
        spacing={16}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        style={{
            maxWidth: '1260px',
            margin: '0 auto',
        }}
    >
        <Grid item xs={1}>
            {<CircularProgress />}
        </Grid>
    </Grid>
);

export default Loading;
