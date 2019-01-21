import React from 'react';
import NavMask from '../../components/NavMask/NavMask.jsx';
import './Home.scss';
import bg0 from '../../assets/images/bg0.jpg';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeListener: null,
        }
    }
    componentDidMount() {
        this.foo();
    }
    foo() {
        console.log(this.props);
        this.props.fetchSliderImg();
    }
    initHeight() {
        // document.getElementById("home_body").style.height = document.documentElement.clientHeight - 36 + "px";
    }
    render() {
        return (
            <main id="home_container">
                <i id="nav_btn"></i>
                <div style={{backgroundImage: 'url(' + bg0 + ')'}} class="content_block"></div>
                <div class="content_block"></div>
                <div class="content_block"></div>
                <NavMask />
            </main>
        );
    }
}
export default (Home);