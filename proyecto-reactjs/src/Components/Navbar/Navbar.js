import React from "react";
import logo from "../../assets/logomiosinfondo.png"
import "./Header.css"
import CarWidget from "../Cartidget/CarWidget";

const categorias = [
    {id:0, nombre:'Vinilos'},
    {id:1, nombre:'Carteleria'},
    {id:2, nombre:'Letras Corporeas'},
]

const Navbar = () =>{
    return(
        <Header style={style.container}>
            <img style={style.imagen} src={logo} alt="logo"></img>
            <h1> Titulo </h1>
            <nav categorias = {categorias}/>
            <CarWidget />
            
        </Header>
    
    )
}
const style = {
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagen: {
        width: '10%',
    },
    links: {
        padding: 10,
    }
}



export default Navbar