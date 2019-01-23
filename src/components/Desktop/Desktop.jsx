import React from 'react';
import './Desktop.scss';

export default class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curSelectedIndex: [],
            appData: [
                {img: require("../../assets/images/video_icon.png"), title: "Me.mp4", x: 60, y: 60, isSelected: false, isRenaming: false, func: 0},
                {img: require("../../assets/images/cv_icon.png"), title: "CV.doc", x: 100, y: 100, isSelected: false, isRenaming: false, func: 1},
                {img: require("../../assets/images/about_icon.png"), title: "About", x: 200, y: 200, isSelected: false, isRenaming: false, func: 3},
                {img: require("../../assets/images/work_icon.png"), title: "Work", x: 300, y: 300, isSelected: false, isRenaming: false, func: 4},
                {img: require("../../assets/images/contact_icon.png"), title: "Contact", x: 400, y: 400, isSelected: false, isRenaming: false, func: 5},                
            ],
        }
    }
    render() {
        const { appData } = this.state;
        return (
            <div onMouseDown={() => {this.cancelSelect()}} id="desktop_container">
            {
                appData.map((app, i) => {
                    return (                        
                        <div onMouseDown={e => {this.selectApp(i,e)}} key={i} className={["app", app.isSelected ? "selected" : ""].join(" ")} style={{left: `${app.x}px`, top: `${app.y}px`}}>
                            <div className="app_icon" style={{backgroundImage: `url(${app.img})`}}></div>
                            <div className="app_name">
                                <div>{app.title}</div>
                                <input style={{display: 'none'}} type="text" />
                            </div>
                        </div>
                    );
                })
            }
            </div>
        );
    }
    componentDidMount() {
        
    }
    selectApp(i, e) {
        e.stopPropagation();
        const appData = this.state.appData.map((app, index) => {
            if (index === i) {
                return {
                    ...app,
                    isSelected: true,
                }
            }
            return app;
        });
        this.setState({
            curSelectedIndex: [],
            appData,
        });
    }
    cancelSelect() {
        const appData = this.state.appData.map(app => {
            return {
                ...app,
                isSelected: false,
            };
        });
        this.setState({
            appData,
        });

    }
}