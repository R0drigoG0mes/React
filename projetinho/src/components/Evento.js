function Evento({numero}){

    function meuEvento(){
        alert("Teste" + numero);
    }

    return(
        <div>
            <p>Clique aqui para ativar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento