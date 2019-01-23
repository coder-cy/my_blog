import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './MyVideo.scss';

export default class MyVideo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="my_video_container">
                <Video autoPlay="true"
                    controls={[]}
                    poster="http://video-js.zencoder.com/oceans-clip.png"
                    onCanPlayThrough={() => {
                        // Do stuff
                    }}>
                    <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                </Video>
            </div>
        );
    }
    componentDidMount() {
        
    }
}