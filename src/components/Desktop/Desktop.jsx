import React from 'react';
import MyVideo from "../MyVideo/MyVideo.jsx"
import Clock from "../Clock/Clock.jsx";
import ContactMe from "../ContactMe/ContactMe.jsx";
import MyCV from "../MyCV/MyCV.jsx";
import Greeting from "../Greeting/Greeting.jsx";
import './Desktop.scss';
const getDis = (x1, x2, y1, y2) => {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
};
const setStyle = (el, attr, val) => {
    el.style[attr] = val;
};
const handleScroll = (number = 0, time) => {
    if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number;
        return number;
    }
    const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
    let spacingInex = time / spacingTime; // 计算循环的次数
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
    let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
    let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
            spacingInex--;
            handleScroll(nowTop += everTop);
        } else {
            clearInterval(scrollTimer); // 清除计时器
        }
    }, spacingTime);
};
const w = document.documentElement.clientWidth;
export default class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appData: [
                { img: require("../../assets/images/cv_icon.png") },
                { img: require("../../assets/images/about_icon.png") },
                { img: require("../../assets/images/video_icon.png") },
                { img: require("../../assets/images/work_icon.png") },
                { img: require("../../assets/images/contact_icon.png") },
            ],
            animationType: {
                cv: 0,
                video: 0,
                contact: 0,
            },
            ctxMenuList: [
                { content: "Show CV" },
                { content: "Show Intro" },
                { content: "Show Video" },
                { content: "Show Work" },
                { content: "Show Contact" },
                { content: "Switch Wallpaper" },
            ],
            isShowCtxMenu: false,
            menuX: 0,
            menuY: 0,
        }
    }
    render() {
        const { appData, animationType, isShowCtxMenu, menuX, menuY, ctxMenuList } = this.state;
        return (
            <div onClick={() => { this.hideCustomCtxMenu() }} onMouseDown={e => { this.showCustomCtxMenu(e); }} onContextMenu={e => { e.preventDefault(); }} onMouseMove={e => { this.handleMouseMove(e); }} id="desktop_container">
                <Clock />
                <MyVideo setAnimationType={this.setAnimationType.bind(this)} animationType={animationType} />
                <ContactMe setAnimationType={this.setAnimationType.bind(this)} animationType={animationType} />
                <MyCV setAnimationType={this.setAnimationType.bind(this)} animationType={animationType} />
                <Greeting setAnimationType={this.setAnimationType.bind(this)} />
                <dl ref="appList" className="app_list">
                    {
                        appData.map((app, i) => {
                            return (
                                <dd key={i} style={{ backgroundImage: `url(${app.img})` }} onClick={() => { this.handleClickApp(i) }} className="app"></dd>
                            );
                        })
                    }
                </dl>
                <ul onClick={e => { e.stopPropagation(); }} className="ctx_menu" style={{ display: isShowCtxMenu ? 'block' : 'none', left: `${menuX}px`, top: `${menuY}px` }}>
                    {
                        ctxMenuList.map((menu, i) => {
                            return (
                                <li onClick={() => { this.handleClickApp(i) }} key={i}>
                                    <i style={{ backgroundImage: `url(${i < ctxMenuList.length - 1 ? appData[i].img : ""})` }}></i><span>{menu.content}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    componentDidMount() {

    }
    handleMouseMove(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const appList = Array.from(this.refs.appList.children);
        const appPosList = appList.map(app => {
            return {
                x: app.getBoundingClientRect().left + 60,
                y: app.getBoundingClientRect().top + 60,
            };
        });
        appPosList.forEach((app, i) => {
            const dis = getDis(mouseX, app.x, mouseY, app.y);
            let scale = (200 - dis) / 200 + 1;
            if (scale < 1) scale = 1;
            if (scale > 1.5) scale = 1.5;
            setStyle(appList[i], "width", `${100 * scale}px`);
            setStyle(appList[i], "height", `${100 * scale}px`);
            setStyle(appList[i], "background-size", `${80 * scale}px`);
        });
    }
    handleClickApp(index) {
        const h = document.documentElement.clientHeight;
        const { switchBg } = this.props;
        switch (index) {
            case 0:
                this.setAnimationType(1, "cv");
                break;
            case 1:
                handleScroll(h, 250);
                break;
            case 2:
                this.setAnimationType(1, "video");
                break;
            case 3:
                handleScroll(h + 1000, 800);
                break;
            case 4:
                this.setAnimationType(1, "contact");
                break;
            case 5:
                switchBg();
                break;
            default:
                break;
        }
        this.hideCustomCtxMenu();
    }
    setAnimationType(type, appName) {
        const { animationType } = this.state;
        this.setState({
            animationType: {
                ...animationType,
                [appName]: type,
            },
        });
    }
    showCustomCtxMenu(e) {
        if (e.button === 2) {
            this.setState({
                isShowCtxMenu: true,
                menuX: e.clientX > w - 200 ? e.clientX - 200 : e.clientX,
                menuY: e.clientY,
            });
        }
    }
    hideCustomCtxMenu() {
        this.setState({
            isShowCtxMenu: false,
        });
    }
}