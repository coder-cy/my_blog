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
        });
    }
    render() {
        return (
            <div onClick={() => {this.handleRotate()}} ref="container" style={{display: this.props.isShowProjDetails ? 'block' : 'none'}} id="proj_details_mask_container">
                <i onClick={() => {this.props.hideProjDetails()}} className="cancel">X</i>
                <div className="container">
                    <dl style={{transform: `rotateY(${-this.state.degree}deg)`}} className="items">
                    {
                        this.props.curShowProjPicList.map((proj, i) => {
                            return (
                                <dd key={i} style={{transform: `rotateY(${i * 60}deg) translateZ(600px) scale(1.2)`}} className="item">
                                    <img src={proj} />
                                    <ul>
                                        <li></li>
                                    </ul>
                                </dd>
                            );
                        })
                    }
                    </dl>
                </div>

            </div>
        );
    }
    componentDidMount() {
        this.refs.container.style.height = document.documentElement.clientHeight + 'px';
    }
}