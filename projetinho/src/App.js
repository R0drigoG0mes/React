import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const name = 'Rodrigo';
  const namae = 'Shaik Jalin Habei';
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
        <SayMyName nome="Rodrigo"/>
        <SayMyName nome="Valter"/>
        <SayMyName nome={namae}/>
        <Pessoa nome={namae} idade="27" profissao="Shaik" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALbPeVtsUnuOcM50lYM4P1zEKZToiMoxikA&usqp=CAU"/>
    </div>
  );
}

export default App;
