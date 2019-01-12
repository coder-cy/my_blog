import React from 'react';
import './Head.scss';
import { Link, withRouter } from "react-router-dom";

class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [{ name: "Home", href: "/" }, { name: "Work", href: "/work" }, { name: "Gallery", href: "/gallery" },],
            date: new Date(),
            timer: null,
        };
    }
    add0(num) {
        return num > 9 ? num : '0' + num;
    }
    runClock() {
        const timer = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
        this.setState({
            timer
        });
    }
    handleChangeRoute(i) {
        setTimeout(() => {
            this.props.history.push(this.state.navList[i].href);
        }, 1000);
        // console.log(this.props);
        this.props.setIsShowMask(true);
    }
    render() {
        const { navList, date } = this.state;
        return (
            <header id="header_container">
                <nav className="clear_float">
                    {
                        navList.map((nav, i) => (
                            <div className="nav_btn" key={i} onClick={this.handleChangeRoute.bind(this, i)}>{nav.name}</div>
                        ))
                    }
                </nav>
                <div className="clock">
                    <span>{this.add0(date.getHours())}</span>:
                    <span>{this.add0(date.getMinutes())}</span>:
                    <span>{this.add0(date.getSeconds())}</span>
                </div>
            </header>
        );
    }
    componentDidMount() {
        this.runClock();
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
}
export default withRouter(Head);