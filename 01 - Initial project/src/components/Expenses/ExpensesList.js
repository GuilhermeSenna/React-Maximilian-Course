import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    // Default value => No expenses found

    // if not expenses has been found, return the situation
    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.expenses.map(expense => (
                <ExpenseItem key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
        </ul>
    );
}

export default ExpensesList;