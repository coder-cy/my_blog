import React from 'react';
import './Home.scss';
import Head from '../../components/Head/Head.jsx';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeListener: null,
        }
    }
    componentDidMount() {
        this.foo();
        this.initHeight();
        // this.routeListener && this.routeListener();
        // const routeListener = this.props.history.listen((location, action) => {
        //     console.log(action, location.pathname, location.state)
        // });
        // this.setState({
        //     routeListener
        // });
    }
    foo() {
        console.log(this.props);
        this.props.fetchSliderImg();
    }
    initHeight() {
        document.getElementById("home_body").style.height = document.documentElement.clientHeight - 36 + "px";
    }
    render() {
        return (
            <div id="home_container">
                <div id="home_body">
                Home
                </div>
            </div>
        );
    }
}
export default (Home);