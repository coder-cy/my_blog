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
        // this.routeListener && this.routeListener();
        // const routeListener = this.props.history.listen((location, action) => {
        //     console.log(action, location.pathname, location.state)
        // });
        // this.setState({
        //     routeListener
        // });
        document.getElementById("home_body").style.height = document.documentElement.clientHeight - 36 + "px";
    }
    foo() {
        console.log(this.props);
        this.props.fetchSliderImg();
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