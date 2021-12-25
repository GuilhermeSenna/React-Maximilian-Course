import Card from "../UI/Card";
import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {

    // The state is set here but is changed in another component. 
    // If there is a change in the component, it is returned to modify the state here and the new value is sent to the component that can be modified
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.expenses.map((expense, index) => {
                return <ExpenseItem key={index}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />;
            })}
        </Card>
    )
}

export default Expenses;