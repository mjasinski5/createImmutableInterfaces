import React from 'react';
import './../App.css';

const IndexButton = ({handler, text}) => {
    return (
        <div>
            <button className="btn" onClick={handler}> {text}</button>
        </div>
    );
};

export default IndexButton; 