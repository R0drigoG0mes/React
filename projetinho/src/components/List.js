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
                <Item marca="Nike"/>
            </ul>
        </>
    )
}

export default List;