import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'


const ErrorModal = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onHandleError} />
            <Card className={classes.modal} color="#a5aad9">
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onHandleError}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;