import React from 'react';
import TwentyTwenty from 'react-twentytwenty';

const Surprise = ({images, currentIndex}) => {
    return (
        <div>
            <TwentyTwenty>
                {images[currentIndex]}{images[currentIndex + 1]}
            </TwentyTwenty>
        </div>
    );
};

export default Surprise;