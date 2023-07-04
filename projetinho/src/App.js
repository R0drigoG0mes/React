import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';

function App() {

  const name = 'Rodrigo';
  const url = "https://via.placeholder.com/200";

  function multi(a, b){
    return a * b;
  }

  return (
    <div className="App">
        <h1>
          Teste
        </h1>
        <p>{name}</p>
        <p>Soma: {2 + 8}</p>
        <p>Multiplicação com função: {multi(3,9)}</p>
        <img src={url} alt="minha imagem"/>
        <HelloWord/>
    </div>
  );
}

export default App;
