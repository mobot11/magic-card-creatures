import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardContainer from '../components/CardContainer';
import getCards from '../utils/getCards';
import Loading from '../components/Loading';

class Home extends React.Component {
    constructor() {
        super();
        this.state = { initialCards: [] };
    }

    async componentDidMount() {
        const initialCards = await getCards();

        this.setState({ initialCards });
    }

    render() {
        const { initialCards } = this.state;

        if (!initialCards.length) {
            return <Loading />;
        }

        return (
            <Grid container>
                <Grid item xs={12}>
                    <CardContainer cards={initialCards} />
                </Grid>
            </Grid>
        );
    }
}

export default Home;
