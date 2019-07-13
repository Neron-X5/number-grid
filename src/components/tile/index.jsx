import React from 'react';

import './index.scss';

const Tile = ({ value, clickHandler }) => {
    return (
        <div
            className={`tile ${value === 0 ? 'empty-tile' : ''}`}
            onClick={value === 0 ? null : clickHandler.bind(this, value)}
        >
            {<div className="content">{value}</div>}
        </div>
    );
};

export default Tile;
