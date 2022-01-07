import styles from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    //React Ref
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        // Get the value of the input
        const enteredAmount = amountInputRef.current.value;

        // Cast to integer
        const enteredAmountNumber = +enteredAmount;

        // Validation
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        // To hide text warning after a valid amount entered
        setAmountIsValid(true);

        props.onAddToCart(enteredAmountNumber);
    };

    return <form className={styles.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label="amount"
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                step: '1',
                defaultValue: '1'
            }} />
        <button>+ Add</button>

        {!amountIsValid && <p style={{ color: 'red' }}>Please enter a valid amount (1-5).</p>}
    </ form>
}

export default MealItemForm;