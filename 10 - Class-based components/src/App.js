import UserFinder from './components/UserFinder';
import Users from './components/Users';
import UsersContext from './store/users-context';

function App() {

  const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <div>
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
