import React from "react";
import ItemCount from "../../ItemCount";

const onAdd = (quantify) =>{
    console.log ('compraste ${quantify} unidades');
}
const ItemListContainer = ({greeting}) => {
    return (
        <><h1>{greeting}</h1><ItemCount initial={1} stock={5} onAdd={onAdd} /></>
    )
}
export default ItemListContainer