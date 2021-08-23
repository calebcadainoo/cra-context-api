import './App.css';
import { useDataLayerValue } from './context-api/DataLayer';
import { actionTypes } from './context-api/reducer';

function App() {
  const [{ user }, dispatch] = useDataLayerValue();

  const funcUpdateName = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: 'Prince',
    });
  };

  return (
    <div className="App">
      <h1>My name is {user}</h1>
      <button onClick={() => funcUpdateName()}>Modify Name</button>
    </div>
  );
}

export default App;
