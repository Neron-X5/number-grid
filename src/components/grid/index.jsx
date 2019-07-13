import React from 'react';

import Tile from '../tile';

import './index.scss';

const Grid = ({ tilesArray, clickHandler }) => {
    const renderedGrid = tilesArray.map(tile => <Tile key={tile} value={tile} clickHandler={clickHandler} />);

    return <div className="grid-container">{renderedGrid}</div>;
};

export default Grid;
