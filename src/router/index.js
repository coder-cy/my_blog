import React from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';

import Head from '../components/Head/Head';
import Home from '../views/Home/Home.js';
import Work from '../views/Work/Work.jsx';
import Gallery from '../views/Gallery/Gallery.jsx';
import Mask from '../components/Mask/Mask.js';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        // this.props.history.listen((location, action) => {
        //     this.setState({
        //         isChangingRouter: !this.state.isChangingRouter,
        //     });
        // });
    }
    render() {
        return (
            <div id="app">
                <Head />
                <main id="container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/work" exact component={Work} />
                        <Route path="/gallery" exact component={Gallery} />
                    </Switch>
                    <Mask />
                </main>
            </div>
        );
    }
}


const RouterMain = withRouter(Main);

export default () => (
    <Router>
        <RouterMain />
    </Router>
);