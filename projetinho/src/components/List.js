import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
                <Item marca="Teste" lançamento={1924}/>
                <Item marca="Ferrari" lançamento={1824}/>
                <Item marca="Nike" lançamento={1924}/>
                <Item marca="Nike" lançamento={1924}/>
            </ul>
        </>
    )
}

export default List;