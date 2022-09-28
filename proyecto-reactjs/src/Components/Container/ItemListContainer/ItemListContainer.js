import React , {useState, useEffect } from "react";
import ItemCount from "../../ItemCount";
import ItemList from "../../ItemList/itemlist";
import Title from   

const films = [
    { id:1, image: 'https://d22fxaf9t8d39k.cloudfront.net/8c3ab65f679a4ec02bee2845a867137eaed0d572aff4783a2eb38f9d7d7699a356227.jpeg'},
    
    { id:2, image:'https://expografika.com/n/wp-content/uploads/2020/05/merchandising.jpg'},

    {id:3, image:'https://d22fxaf9t8d39k.cloudfront.net/8c3ab65f679a4ec02bee2845a867137eaed0d572aff4783a2eb38f9d7d7699a356227.jpeg',}
];

export const ItemListContainer = ({ texto })=> {
const [data, setData ] = useState ([ ]); 

useEffect (() => {
    const getData = nwe Promise (resolve =>{
        setTimeout(() => {
            resolve (films); 

        }, 3000);
    });
    getData.then (res => setData (res));
}, [])


const onAdd = (quantify) =>{
    console.log ('compraste ${quantify} unidades');
        }
const ItemListContainer = ({greeting}) => {
    return (
        <>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data = {data}></ItemList>
        </>
    );
    }

}
export default ItemListContainer;