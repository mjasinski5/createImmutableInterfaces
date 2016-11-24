import React from 'react';

const IndexButton = ({handler, text}) => {
    return (
        <div>
            <button onClick={handler}> {text}</button>
        </div>
    );
};

export default IndexButton;