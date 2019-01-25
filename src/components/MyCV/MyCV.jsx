import React from 'react';
import './MyCV.scss';

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { setAnimationType } = this.props;
        return (
            <div className={this.parseAnimationType()} id="cv_container">
                <i className="cancel" onClick={() => {setAnimationType(2, "cv")}}>X</i>
                {/* <img alt="" src={require("../../assets/images/cv.jpg")} /> */}
                <div className="cv">
                    <img alt="" src={require("../../assets/images/cv.jpg")} />
                    <a href={require("../../assets/doc/cy_cv.pdf")} target="__blank" >
                        <img alt="" className="down" src={require("../../assets/images/show.png")} />
                    </a>
                </div>
            </div>
        );
    }
    componentDidMount() {
        
    }
    parseAnimationType() {
        const { animationType } = this.props;
        switch(animationType.cv) {
            case 0:
                return "";
            case 1:
                return "cv_in";
            case 2:
                return "cv_out";
            default:
                return "";                
        }
    }
}