import React from 'react';
import NavMask from '../../components/NavMask/NavMask.jsx';
import './Home.scss';
import bg0 from '../../assets/images/bg0.jpg';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMask: false,
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
    showNavMask() {
        console.log(this)
        this.setState({
            isShowMask: !this.state.isShowMask,
        });
    }
    render() {
        return (
            <main id="home_container">
                <div onClick={this.showNavMask.bind(this)} id="nav_btn">
                    <span className={this.state.isShowMask ? 'x1' : ''}></span>
                    <span className={this.state.isShowMask ? 'hide' : ''}></span>
                    <span className={this.state.isShowMask ? 'x2' : ''}></span>
                </div>
                <div style={{backgroundImage: 'url(' + bg0 + ')'}} className="content_block"></div>
                <div className="content_block"></div>
                <div className="content_block"></div>
                <NavMask isShowMask={this.state.isShowMask} />
            </main>
        );
    }
}
export default (Home);