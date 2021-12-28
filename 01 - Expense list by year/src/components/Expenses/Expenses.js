import Card from "../UI/Card";
import React, { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {

    // The state is set here but is changed in another component. 
    // If there is a change in the component, it is returned to modify the state here and the new value is sent to the component that can be modified
    const [filteredYear, setFilteredYear] = useState('2020');

    // Filter the expenses by Year
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div >
    )
}

export default Expenses;