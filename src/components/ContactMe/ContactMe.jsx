import React from 'react';
import './ContactMe.scss';

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoList: [
                {
                    title: "Tel:",
                    content: "+86-17887957519(CHN)",
                },
                {
                    title: "E-mail:",
                    content: "coder_cy0519@163.com",
                },
                {
                    title: "Github:",
                    content: "https://github.com/coder-cy",
                }
            ]
        }
    }
    render() {
        const { setAnimationType } = this.props;
        const { infoList } = this.state;
        return (
            <div className={this.parseAnimationType()} id="contact_me_container">
                <i className="cancel" onClick={() => {setAnimationType(2, "contact")}}>X</i>
                <div className="contact_me">Contact me!</div>
                <dl>
                {
                    infoList.map((info, i) => {
                        return (
                            <dd key={i}>
                                <span className="title">{info.title}</span>
                                <span className="content">
                                {
                                    i === 2 ? <a href={info.content} target="__blank">{info.content}</a> : info.content
                                }
                                </span>
                            </dd>
                        );
                    })
                }
                </dl>
            </div>
        );
    }
    componentDidMount() {
        
    }
    parseAnimationType() {
        const { animationType } = this.props;
        switch(animationType.contact) {
            case 0:
                return "";
            case 1:
                return "contact_in";
            case 2:
                return "contact_out";
            default:
                return "";                
        }
    }
}