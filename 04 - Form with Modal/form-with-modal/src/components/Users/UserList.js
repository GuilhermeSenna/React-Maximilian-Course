import UserDesc from "./UserDesc";
import classes from './UserList.module.css'

const UserList = props => {

    if (props.users.length === 0) {
        return <h2>Found no Users</h2>
    }

    return (
        <ul className={classes["user-list"]}>
            {props.users.map(user => (
                <UserDesc
                    key={user.id}
                    username={user.username}
                    age={user.age} />
            ))}
        </ul>
    );
};

export default UserList;