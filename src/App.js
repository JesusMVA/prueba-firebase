import './App.css';
import { collection, getDocs } from "firebase/firestore"; 
import React,{useEffect} from 'react';
import db from './firebase/firebaseConfig';

function App() {

  useEffect(()=>{

    const obtenerDatos = async() =>{
      const datos = await getDocs(collection(db,'usuarios'))
      datos.forEach((documento)=>{
        console.log(documento.data())
      })
    }
    obtenerDatos();
  },[])

  return (
    <div className="App">
      <h1>Firebase 9!</h1>
    </div>
  );
}

export default App;
