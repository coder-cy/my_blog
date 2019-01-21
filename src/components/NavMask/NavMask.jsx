import React from 'react';

import './NavMask.scss';

export default class NavMask extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{display: this.props.isShowMask ? 'block' : 'none'}} id="nav_mask_container"></div>
        );
    }
    componentDidMount() {
        document.getElementById('nav_mask_container').style.height = document.documentElement.clientHeight + 'px';
    }
}