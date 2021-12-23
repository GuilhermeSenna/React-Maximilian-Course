import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
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