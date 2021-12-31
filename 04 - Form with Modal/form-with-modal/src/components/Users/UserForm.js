import React, { useState } from 'react';
import Button from '../UI/Button';
import classes from './UserForm.module.css'

const UserForm = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

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
            console.log('Preencha todos os campos');
            return;
        }

        if (isNumberLowerThanZero()) {
            console.log('O número precisa ser maior que 0');
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

    return (
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
    );
}

export default UserForm;