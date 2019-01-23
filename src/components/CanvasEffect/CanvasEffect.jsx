import React from 'react';
import './CanvasEffect.scss';

const getDis = (obj1, obj2) => {
    const x = obj1.x - obj2.x;
    const y = obj1.y - obj2.y;
    return Math.sqrt(x * x + y * y);
};
const getRandom = (m, n) => {
    return Math.floor(Math.random() * (n - m + 1)) + m;
};
const colorList = ["red", "blue", "green", "yellow"];
export default class CanvasEffect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight,
        }
    }
    render() {
        return (
            <div id="canvas_effect_container">
                <canvas width={this.state.w + "px"} height={this.state.h + "px"} ref="canvas"></canvas>
            </div>
        );
    }
    componentDidMount() {
        this.initCanvas();
        this.initScreen();
    }
    initCanvas() {
        const canvas = this.refs.canvas;
        const c = canvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;
        const pos = [];
        for (let i = 0; i < 100; i++) {
            pos.push({
                x: parseInt(Math.random() * w),
                y: parseInt(Math.random() * h),
                r: getRandom(2, 4),
                sx: Math.random() * 1.5 - 1,
                sy: Math.random() * 1.5 - 1,
                color: colorList[getRandom(0, 4)],
            });
        }
        // c.fillStyle = "#000";
        const l = pos.length;
        const draw = () => {
            c.clearRect(0, 0, w, h);
            for (var i = 0; i < l; i++) {
                var d = pos[i];
                if (i != l - 1) {
                    d.x += d.sx;
                    d.y += d.sy;
                }

                if (d.x < 0) {
                    d.x = 0;
                    d.sx *= -1;
                }
                if (d.y < 0) {
                    d.y = 0;
                    d.sy *= -1;
                }
                if (d.x > w) {
                    d.x = w;
                    d.sx *= -1;
                }
                if (d.y > h) {
                    d.y = h;
                    d.sy *= -1;
                }
                c.fillStyle = d.color;
                c.beginPath();
                c.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                c.fill();
            }
            for (let i = 0; i < l - 1; i++) {
                const d = pos[i];
                for (let j = i + 1; j < l; j++) {
                    if (getDis(d, pos[j]) < 50) {
                        c.beginPath();
                        c.moveTo(d.x, d.y);
                        c.lineTo(pos[j].x, pos[j].y);
                        c.strokeStyle = 'rgba(0,0,0,.2)';
                        c.stroke();
                    }
                }
            }
        }
        setInterval(draw, 10);
    }
    initScreen() {
        window.addEventListener("resize", () => {
            this.setState({
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight,
            });
        });
    }
}