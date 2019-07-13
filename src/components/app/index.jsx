import React, { Component } from 'react';

import Main from '../main-container';

import './index.scss';

class App extends Component {
    constructor() {
        super();
        this.state = { tilesArray: [1, 2, 3, 4, 5, 6, 7, 8, 0], counter: 0, completed: false };
        this.correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    }

    componentDidMount = () => {
        this.resetState();
    };

    randomizeArray = () => {
        const tempArray = [...this.state.tilesArray];
        const numbersArray = tempArray.sort(() => {
            return 0.5 - Math.random();
        });
        return numbersArray;
    };

    resetState = () => {
        const numbersArray = this.randomizeArray();
        this.setState({ tilesArray: numbersArray, counter: 0, completed: false });
    };

    incrementCounter = () => {
        this.setState(state => ({ counter: state.counter + 1 }));
    };

    validateArray = currentArray => {
        return JSON.stringify([...this.correctOrder]) === JSON.stringify([...currentArray]);
    };

    moveTile = value => {
        const tempArray = [...this.state.tilesArray];
        const x = tempArray.indexOf(value);
        const y = tempArray.indexOf(0);
        const a = x > y ? y : x;
        const b = x > y ? x : y;
        return [
            ...tempArray.slice(0, a),
            tempArray[b],
            ...tempArray.slice(a + 1, b),
            tempArray[a],
            ...tempArray.slice(b + 1)
        ];
    };

    onTileClick = value => {
        const tempArray = this.moveTile(value);
        const isValid = this.validateArray([...tempArray]) || false;
        this.setState({ tilesArray: tempArray, completed: isValid });
        this.incrementCounter();
    };

    onButtonClick = value => {
        if (value === 'reset') {
            this.resetState();
        }
    };

    render() {
        return (
            <div className="app-container">
                <header className="header">Number Grid Puzzle</header>
                <div className="description">Get the tiles in order from 1 to 8</div>
                <Main
                    counter={this.state.counter}
                    tilesArray={this.state.tilesArray}
                    tileClickHandler={this.onTileClick}
                    buttonClickHandler={this.onButtonClick}
                />

                {!!this.state.completed && (
                    <div className="overlay" onClick={this.resetState}>
                        <div className="notification">
                            <div>Congratulations!</div>
                            <p>Game completed successfully.</p>
                            <small>(Click anywhere to reset and play again.)</small>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
