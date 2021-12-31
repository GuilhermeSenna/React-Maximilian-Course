import Card from "../UI/Card";
import classes from './UserDesc.module.css'

const UserDesc = props => {
    return (
        <li>
            <Card className={classes.user}>
                <h2>{`${props.username} (${props.age} years old)`}</h2>
            </Card>
        </li>
    );
};

export default UserDesc;