import React from 'react';

import Grid from '../grid';

import ButtonContainer from '../button-container';

import './index.scss';

const Main = ({ counter, tilesArray, tileClickHandler, buttonClickHandler }) => {
    return (
        <main className="main-app">
            <ButtonContainer counter={counter} clickHandler={buttonClickHandler} />
            <Grid tilesArray={tilesArray} clickHandler={tileClickHandler} />
        </main>
    );
};

export default Main;
