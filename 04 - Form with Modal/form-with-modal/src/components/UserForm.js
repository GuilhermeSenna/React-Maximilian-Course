import React, { useState } from 'react';
import './UserForm.css'

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
        return username.length === 0 || age.length === 0
    }

    const isNumberLowerThanZero = () => {
        return age <= 0
    }



    const submitHandler = event => {
        event.preventDefault();

        if (isInputsEmpty()) {
            console.log('Preencha todos os campos')
        } else if (isNumberLowerThanZero()) {
            console.log('O número precisa ser maior que 0')
        } else {
            const formData = {
                id: Math.random().toString(),
                username: username,
                age: +age
            }

            props.onSaveUser(formData);

            setUsername('');
            setAge('');
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-controls">
                <div className="form-control">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={usernameChangeHandler} />
                </div>
                <div className="form-control">
                    <label>Age (Years)</label>
                    <input
                        type="text"
                        value={age}
                        onChange={ageChangeHandler}
                    />
                </div>
            </div>
            <div className="button-form">
                <button type="submit">Add User</button>
            </div>
        </form >
    );
}

export default UserForm;