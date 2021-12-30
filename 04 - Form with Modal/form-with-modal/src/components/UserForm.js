import './UserForm.css'

const UserForm = () => {
    return (
        <form>
            <div className="form-controls">
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <label>Age (Years)</label>
                    <input type="text" />
                </div>
            </div>
        </form >
    );
}

export default UserForm;