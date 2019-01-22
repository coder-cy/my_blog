import React from 'react';

import './ProjDetails.scss';

export default class ProjDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degree: 0,
        };
    }
    handleRotate() {
        this.setState({
            degree: this.state.degree + 60
        })
    }
    render() {
        return (
            <div onClick={() => {this.handleRotate()}} ref="container" style={{display: this.props.isShowProjDetails ? 'block' : 'none'}} id="proj_details_mask_container">
                <i onClick={this.props.hideProjDetails} className="cancel">X</i>
                <div className="container">
                    <dl style={{transform: `rotateY(${-this.state.degree}deg)`}} className="items">
                        <dd style={{transform: `rotateY(0deg) translateZ(600px)`}} className="item">1</dd>
                        <dd style={{transform: `rotateY(60deg) translateZ(600px)`}} className="item">2</dd>
                        <dd style={{transform: `rotateY(120deg) translateZ(600px)`}} className="item">3</dd>
                        <dd style={{transform: `rotateY(180deg) translateZ(600px)`}} className="item">4</dd>
                        <dd style={{transform: `rotateY(240deg) translateZ(600px)`}} className="item">5</dd>
                        <dd style={{transform: `rotateY(300deg) translateZ(600px)`}} className="item">6</dd>
                        
                    </dl>
                </div>

            </div>
        );
    }
    componentDidMount() {
        this.refs.container.style.height = document.documentElement.clientHeight + 'px';
    }
}