import estilos from './Frase.module.css'

function Frase(){
    return(
        <div className={estilos.fraseContainer}>Este é um componente importado dentro de outro componente importado.</div>
    )
}

export default Frase;