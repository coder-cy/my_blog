import React from 'react';
import './Gallery.scss';
import Head from '../../components/Head/Head.jsx';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="gallery_container">
                <div id="gallery_body"></div>
            </div>
        );
    }
    componentDidMount() {
        document.getElementById("gallery_body").style.height = document.documentElement.clientHeight - 36 + "px";
    }
}