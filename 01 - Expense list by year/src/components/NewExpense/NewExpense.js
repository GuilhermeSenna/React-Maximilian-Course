import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';
import './NewExpense.css'

const NewExpense = (props) => {

    const [toggleExpense, setToggleExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // Children to parent
        // NewExpense.js to App.js
        props.onSaveNewExpense(expenseData);
        setToggleExpense(false);
    }

    const showNewExpenseHandler = () => {
        setToggleExpense(true);
    }

    const hideNewExpenseHandler = () => {
        setToggleExpense(false);
    }

    return (
        <div className='new-expense'>
            {toggleExpense
                ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onToggleExpense={hideNewExpenseHandler} />
                : <button onClick={showNewExpenseHandler}>Add New Expense</button>}
        </div>
    )
};

export default NewExpense;