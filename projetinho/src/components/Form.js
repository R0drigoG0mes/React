function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        alert("Cadastrou o usuário");
    }

    return(
        <>
        <form onSubmit={cadastrarUsuario}>
            <fieldset>
                <legend>Cadastro</legend>
                <input type="text" placeholder="nome completo"/>
                <input value="Cadastrar" type="submit"/>
            </fieldset>
        </form>
        </>
    )
}

export default Form