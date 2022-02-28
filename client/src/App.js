import './App.css';
import {test} from './utils/API'

const API = async() =>{
  const options = {
    method: 'GET',
    url: 'https://yfapi.net/v7/finance/options/TSLA',
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
      'x-api-key': 'iPkydunA9e2Kc8Y4kYGaK1j6HsNFJfIe4qtMaubc'
    }
  }
  try {
    const result = await test(options);
    console.log(result)
    const call = result.optionChain.result;
    console.log(call)
  } catch (err) {
    console.log(err)
  };
}
function App() {
  API();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
