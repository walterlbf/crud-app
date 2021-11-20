import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="App-header">
      <header>
        <h3>
          Digite um item para adcionar à lista abaixo:
        </h3>
      </header>
      <Form />
      <List />
    </div>
  );
}

export default App;
