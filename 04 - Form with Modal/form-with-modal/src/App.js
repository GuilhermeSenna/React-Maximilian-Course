import UserForm from "./components/UserForm";
import './App.css'
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card>
        <UserForm />
      </ Card>
      <Card>
        <UserForm />
      </ Card>
    </div>
  );
}

export default App;
