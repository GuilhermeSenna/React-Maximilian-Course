import UserForm from "./components/UserForm";
import './App.css'

const App = () => {
  return (
    <div>
      <div className="card-style">
        <UserForm />
      </div>
      <div className="card-style">
        <UserForm />
      </div>
    </div>
  );
}

export default App;
