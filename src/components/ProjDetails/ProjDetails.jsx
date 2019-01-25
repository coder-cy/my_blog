import React from 'react';

import './ProjDetails.scss';

const symbolList = ["* ", "# ", "- "];

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
                                <dd key={i} style={{transform: `rotateY(${i * 60}deg) rotateX(8deg) translateZ(600px)`}} className="item">
                                    <img alt="" width="500px" height="400px" src={proj.src} />
                                    <ul className="details">
                                    {
                                        proj.details.map((detail, j) => {
                                            return (
                                                <li className="details_li" key={j}>
                                                    <div className="details_title">{detail.title}</div>
                                                    <ul className="details_content">
                                                    {
                                                        detail.content.map((item, k) => {
                                                            return (
                                                                <li className="content_li" key={k}>
                                                                    <i>{symbolList[j]}</i><span>{item}</span>
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                    </ul>
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