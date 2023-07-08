import Button from "../Button";

function Evento({numero}){

    function meuEvento(){
        alert("Teste" + numero);
    }

    function segundoEvento(){
        alert("segundo evento");
    }

    return(
        <div>
            <p>Clique aqui para ativar um evento:</p>
            <Button event={meuEvento} event2={segundoEvento} text="Primeiro Evento" ></Button>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento