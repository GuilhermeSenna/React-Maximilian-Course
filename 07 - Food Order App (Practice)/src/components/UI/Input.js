import styles from './Input.module.css'

import React from 'react';

// passing ref by forwarding
const Input = React.forwardRef((props, ref) => {
    return <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>

        {/* The spread operator is for add the rest of parameters (Receiving a object with the tag parameters) */}
        <input ref={ref} {...props.input} />
    </div>
});

export default Input;