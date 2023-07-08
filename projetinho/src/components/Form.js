import { useState } from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(name);
        console.log(password);
        alert("Cadastrou o usuário");
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return(
        <>
        <form onSubmit={cadastrarUsuario}>
            <fieldset>
                <legend>Cadastro</legend>
                <label htmlFor="_nome">Nome:</label>
                <input type="text" placeholder="nome" id="_nome" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="_senha">Senha:</label>
                <input type="password" placeholder="senha" id="_senha" onChange={(e) => setPassword(e.target.value)}/>
                <input value="Cadastrar" type="submit"/>
            </fieldset>
        </form>
        </>
    )
}

export default Form