import PropTypes from "prop-types"

function Item({marca, lançamento, descriçao}){
    return(
        <>
            <li>{marca} - {lançamento} - {descriçao}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lançamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    descriçao: "Faltou a descrição",
}

export default Item;