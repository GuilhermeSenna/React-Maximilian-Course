import React, { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './UserForm.module.css'

const UserForm = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    const isInputsEmpty = () => {
        return username.trim().length === 0 || age.trim().length === 0
    }

    const isNumberLowerThanZero = () => {
        return +age <= 0
    }



    const submitHandler = event => {
        event.preventDefault();

        if (isInputsEmpty()) {
            // console.log('Preencha todos os campos');

            setError({
                title: 'Invalid Input',
                message: 'Please enter with valid values at the inputs.'
            });
            return;
        }

        if (isNumberLowerThanZero()) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }

        const formData = {
            id: Math.random().toString(),
            username: username,
            age: +age
        }

        props.onSaveUser(formData);

        setUsername('');
        setAge('');
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onHandleError={errorHandler} />}
            <form onSubmit={submitHandler}>
                <div className={classes['form-controls']}>
                    <div className={classes['form-control']}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={usernameChangeHandler} />
                    </div>
                    <div className={classes['form-control']}>
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            type="number"
                            value={age}
                            onChange={ageChangeHandler}
                        />
                    </div>
                </div>
                {/* <div className={classes['button-form']}>
                <button type="submit">Add User</button>
            </div> */}
                <Button onClick={submitHandler}>Add User</Button>
            </form >
        </div>
    );
}

export default UserForm;