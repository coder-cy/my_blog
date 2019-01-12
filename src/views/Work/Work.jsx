import React from 'react';
import './Work.scss';
import Head from '../../components/Head/Head.jsx';

export default class Work extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="work_container">
                <div id="work_body">
                    Work
                </div>
            </div>
        );
    }
    componentDidMount() {
        document.getElementById("work_body").style.height = document.documentElement.clientHeight - 36 + "px";
    }
}