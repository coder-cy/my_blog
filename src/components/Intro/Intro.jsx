import React from 'react';

// import './Intro.scss';

export default class Intro extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navList } = this.state;
        return (
            <main onClick={this.handleClick.bind(this)}>
            {
                // match.url + '/:id'
            }
            </main>
        );
    }
    handleClick() {
        
    }
}