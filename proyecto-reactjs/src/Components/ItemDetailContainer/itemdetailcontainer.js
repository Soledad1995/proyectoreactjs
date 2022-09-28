import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/Itemdetail";
import React, (useEffect,useState) from "react";

const film = {
    id:1, image:'https://d22fxaf9t8d39k.cloudfront.net/8c3ab65f679a4ec02bee2845a867137eaed0d572aff4783a2eb38f9d7d7699a356227.jpeg', title:'Vinilos'
};

export const ItemDetailContainer = () => {

const [data, setData] = useState({});
    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve (film);
            
            }, 3000);
        });
        getData.then (res => setData (res));
    },[])

    return (
        <ItemDetail data = {data} />
    );
}

export default ItemDetailContainer;