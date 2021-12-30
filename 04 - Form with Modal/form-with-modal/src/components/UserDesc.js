import Card from "./Card";
import './UserDesc.css'

const UserDesc = props => {
    return (
        <li>
            <Card className="user">
                <h2>{`${props.username} (${props.age} years old)`}</h2>
            </Card>
        </li>
    )
}

export default UserDesc;