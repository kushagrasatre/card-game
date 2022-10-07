import { Provider } from 'react-redux';
import './App.css';
import Cards from './Component/Cards';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cards />
      </Provider>
    </div>
  );
}

export default App;
