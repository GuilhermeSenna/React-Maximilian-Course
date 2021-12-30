import UserDesc from "./UserDesc";

const UserList = props => {

    if (props.users.length === 0) {
        return <h2>Found no Users</h2>
    }

    return (
        <ul>
            {props.users.map(user => (
                <UserDesc />
            ))};
        </ul>
    );
}

export default UserList;