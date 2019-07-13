import React from 'react';

import Button from '../button';

import './index.scss';

const ButtonContainer = ({ counter, clickHandler }) => {
    const buttonsArray = ['counter', 'reset'];
    const renderedButtons = buttonsArray.map(button => (
        <Button
            key={button}
            styleClass={`${button}-button`}
            value={button}
            counter={counter}
            clickHandler={clickHandler}
        />
    ));

    return <div className="button-container">{renderedButtons}</div>;
};

export default ButtonContainer;
