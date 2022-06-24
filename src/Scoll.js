import React from 'react';

const Scoll = (props) => {
    console.log(props);
    console.log(props.children);
    return (
        <div style={{ overflowY: "scroll", border: '3px solid black', height: '800px' }}>
            {props.children}
        </div>
    );
}

export default Scoll;