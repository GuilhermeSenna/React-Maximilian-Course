import React from 'react';

const DemoOutput = props => {
    console.log('DemoOutput Running')
    return <p>{props.show ? 'This is new!' : ''}</p>;
}

// Only re-evaluate if has a change in the Component
export default React.memo(DemoOutput);