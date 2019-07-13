import React from 'react';

import './index.scss';

function App() {
    return (
        <div className="app-container">
            <header>Number Grid Puzzle</header>
            <main className="main-app">
                <div className="button-container">
                    <button type="button" className="counter-button">
                        Counter
                    </button>
                    <button type="button" className="reset-button">
                        Reset
                    </button>
                </div>
                <div className="grid-container">
                    <div className="tile">1</div>
                    <div className="tile">2</div>
                    <div className="tile">3</div>
                    <div className="tile">4</div>
                    <div className="tile">5</div>
                    <div className="tile">6</div>
                    <div className="tile">7</div>
                    <div className="tile">8</div>
                    <div className="tile">0</div>
                </div>
            </main>
            <div className="notification">Congratulations!</div>
        </div>
    );
}

export default App;
