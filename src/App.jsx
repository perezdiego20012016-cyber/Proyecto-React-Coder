import styles from './App.module.css'
import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'



import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto="Bienvenido a mi tienda de Golosinas" />
    </>
  );
}









































// function App() {
//   return (

//     <div>
//       <Button label={'esto viene por props'}

//         styles={{ backgroundColor: 'Blue', color: 'Pink', padding: 10, borderRadius: 10, marginTop: 20, marginLeft: 20 }}
//         handleClick={() => alert('Click')}
//       >
//         El texto que yo quiera
//       </Button>

//     </div>
//   )
// }


// JSX -> JavaScript and XML o lenguaje marcado

//REGLAS:

// los componentes solo pueden retornar un solo elemento , se envuelven siempre en un div o un <>
// Todas las etiquetas debene tener su cierre. en etiquetas de imagen se debe autocerrar />


//Hooks . sirve para declarar, manejar y crear estados.
export default App

