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
                        <img alt="" className="down" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548354705137&di=206c7b7b6a2e8c832dca8350f0c089ea&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F47%2F86%2F07G58PICbe7_1024.png" />
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