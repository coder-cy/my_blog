import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './MyVideo.scss';

export default class MyVideo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { setAnimationType } = this.props;
        return (
            <div className={this.parseAnimationType()} id="my_video_container">
                <div className="wrap">
                    <Video autoPlay={false}
                        controls={[]}
                        poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548256110919&di=bfa121c6519ba1d61d80449a43d5f480&imgtype=0&src=http%3A%2F%2Fupload.shunwang.com%2F2016%2F0526%2F1464230456256.jpg"
                        onCanPlayThrough={() => {
                            // Do stuff
                        }}>
                        <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                    </Video>
                </div>
                <i className="cancel" onClick={() => {setAnimationType(2, "video")}}>X</i>
            </div>
        );
    }
    componentDidMount() {
        
    }
    parseAnimationType() {
        const { animationType } = this.props;
        switch(animationType.video) {
            case 0:
                return "";
            case 1:
                return "video_in";
            case 2:
                return "video_out";
            default:
                return "";                
        }
    }
}