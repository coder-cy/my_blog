import React from 'react';

import './Greeting.scss';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: "Greetings, welcome to my personal homepage. As an experienced web developer from China, I wish U could get a completed view on me :） ",
            greetingList: [],
        };
    }
    render() {
        const { greetingList } = this.state;
        return (
            <div id="greeting_container">
                {
                    greetingList.map((word, i) => {
                        return (
                            <span key={i}>{word}</span>
                        );
                    })
                }
            </div>
        );
    }
    componentDidMount() {
        this.writeGreeting();
    }
    writeGreeting() {
        const { greeting, greetingList } = this.state;
        const { setAnimationType } = this.props;
        let index = 0;
        let timer = setInterval(() => {
            if (index > greeting.length - 1) {
                clearInterval(timer);
                // setAnimationType(1, "video");
                return;
            }
            const word = greeting.charAt(index);
            greetingList.push(word);
            this.setState({
                greetingList,
            });
            index++;
        }, 50);
    }
}