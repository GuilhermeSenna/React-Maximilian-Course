import styles from './Input.module.css'

const Input = props => {
    return <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>

        {/* The spread operator is for add the rest of parameters */}
        <input {...props.input} />
    </div>
}

export default Input;