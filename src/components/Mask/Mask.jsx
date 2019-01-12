import React from 'react';
import './Mask.scss';

export default class Mask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blockList: [],
        };
    }
    getRandom() {
        // return Math.tofixed((Math.random() / 2 + 0.5), 2);
        return (Math.random() + 1).toFixed(2);
    }
    render() {
        const { blockList } = this.state;
        for (let i = 0; i < 10; i++) {
            blockList.push(this.getRandom());
        }
        const { isShowMask } = this.props;
        const dis = document.documentElement.clientWidth;
        return (
            <div style={{ display: isShowMask ? 'block' : 'none' }} id="mask_container">
                {
                    blockList.map((block, i) => {
                        return (
                            <div key={i} className="block" style={{animationName: 'ani', animationFillMode: 'forwards', animationDuration: `${block}s`}}></div>
                        );
                    })
                }
            </div>
        );
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.setIsShowMask(false);
        // }, 2000);
        document.getElementById("mask_container").style.height = document.documentElement.clientHeight - 36 + "px";
    }
    componentDidUpdate() {
        console.log("update")
    }
}