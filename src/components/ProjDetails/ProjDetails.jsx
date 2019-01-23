import React from 'react';

import './ProjDetails.scss';

export default class ProjDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degree: 0,
        };
    }
    handleRotate(dir) {
        this.setState({
            degree: this.state.degree + 60 * dir
        });
    }
    render() {
        return (
            // <div onClick={() => {this.handleRotate()}} ref="container" style={{display: this.props.isShowProjDetails ? 'block' : 'none'}} id="proj_details_mask_container">
            <div ref="container" style={{opacity: this.props.isShowProjDetails ? '1' : '0', transform: `translateY(${this.props.isShowProjDetails ? 0 : -2000}px)`}} id="proj_details_mask_container">
                <i onClick={() => {this.props.hideProjDetails()}} className="cancel">X</i>
                <div className="mainInfo">{this.props.curMainInfo}</div>
                <div className="container">
                    <div onClick={() => {this.handleRotate(-1)}} className="btn"></div>
                    <div onClick={() => {this.handleRotate(1)}} className="btn"></div>
                    <dl style={{transform: `rotateY(${-this.state.degree}deg)`}} className="items">
                    {
                        this.props.curShowProjPicList.map((proj, i) => {
                            return (
                                <dd key={i} style={{transform: `rotateY(${i * 60}deg) rotateX(8deg) translateZ(600px) scale(1.2)`}} className="item">
                                    <img src={proj.src} />
                                    <ul>
                                    {
                                        proj.details.map((detail, j) => {
                                            return (
                                                <li key={j}>
                                                    <div className="title">{detail.title}</div><br/>
                                                    <p className="content">{detail.content}</p>
                                                </li>
                                            );
                                        })
                                    }
                                    </ul>
                                </dd>
                            );
                        })
                    }
                    </dl>
                </div>
                <div className="mask_btn">
                    <div onClick={() => {this.handleRotate(-1)}}></div>
                    <div onClick={() => {this.handleRotate(1)}}></div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.refs.container.style.height = document.documentElement.clientHeight + 'px';
    }
}