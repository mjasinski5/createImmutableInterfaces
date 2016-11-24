import React from 'react';

const Image = ({url}) => {
    return (
        <div>
            <img height="auto" width="800" src={url}></img>
        </div>
    );
};

export default Image;