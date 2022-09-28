import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./ItemListContainer";
import ItemCount from "../../ItemCount";
import ItemDetailContainer  from "./Components/ItemDetailContainer/itemdetailcontainer";


const App = () => {
  const mensaje = "Hola a todos los que visitan esta pagina"
  return (
    <>
    <Navbar/>
    <ItemListContainer 
    greeting={mensaje}/>
    <ItemDetailContainer></ItemDetailContainer>
    </>
    
    
  )
}


export default App;
