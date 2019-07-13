import React from 'react';

import './index.scss';

const Button = ({ styleClass, value, counter, clickHandler }) => {
    return (
        <button type="button" className={`button ${styleClass}`} onClick={clickHandler.bind(this, value)}>
            {value === 'counter' ? `Steps: ${counter}` : value}
        </button>
    );
};

export default Button;
