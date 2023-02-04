import React from 'react';
import './background.css';


const Background = () => {
    return (
        <>
            <div className="ellipse topLeft"></div>
			<div className="ellipse topRight"></div>
			<div className="ellipse bottomLeft"></div>
			<div className="ellipse bottomRight"></div>
        </>
    );
};

export default Background;