import React from "react";
import logo from "../../assets/logomiosinfondo.png"
import "./header.css"


const Header = () =>{
    return(
        <header style={style.container}>
            <img style={style.imagen} src={logo} alt="logo"></img>
            <h1> Titulo </h1>
            <nav>
                <a style={style.links} href="vinilos.html"> Vinilos</a>
                <a style={style.links} href="carteleria.html">Carteleria</a>
                <a style={style.links} href="letras.html">Letras Corporeas</a>
            </nav>
            
        </header>
    
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



export default Header