import React from 'react';

class Bomb extends React.Component {
    state = { secondsLeft: this.props.initialCount }

    setBombMsg = () => {
        const {secondsLeft} = this.state;
        if (secondsLeft === 0) {
            return 'Boom!';
        }
        return `${secondsLeft} seconds left before I go boom!`;
    }

    render() {
        return (
            <div>{this.setBombMsg()}</div>
        );
    }
}

export default Bomb;