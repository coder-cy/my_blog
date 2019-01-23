import React from 'react';

import './Clock.scss';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        const dots = [];
        for (let i = 0; i < 12; i++) {
            dots.push(i);            
        }
        this.state = {
            curTime: new Date(),
            dots,
        };
    }
    render() {
        const { curTime, dots } = this.state;
        return (
            <div id="clock_container">
                <div className="dots">
                {
                    dots.map((dot, i) => {
                        return (
                            <div key={i} style={{transform: 'rotateZ('+i*30+'deg)',}}></div>
                        );
                    })
                }
                </div>
                <div className="needles">
                    <div className="hour" style={{transform: `rotateZ(${curTime.getHours() * 30 + curTime.getMinutes() / 2}deg)`}}></div>
                    <div className="min" style={{transform: `rotateZ(${curTime.getMinutes() * 6 + curTime.getSeconds() / 10}deg)`}}></div>
                    <div className="sec" style={{transform: `rotateZ(${curTime.getSeconds() * 6}deg)`}}></div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Date(),
            });
        }, 1000);
    }
}