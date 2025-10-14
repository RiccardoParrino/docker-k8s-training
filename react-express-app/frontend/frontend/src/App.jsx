import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'

function App() {
  const [count, setCount] = useState(0)

  const [messaggio, setMessaggio] = useState('Caricamento...');

  useEffect(() => {
    fetch('http://localhost:3000/api/saluto')
      .then(response =>{ 
        response.json(); 
        console.log(response);
      })
      .catch(error => {
        console.error('Errore nella chiamata API: ', error);
        setMessaggio('Errore nel caricamento');
      });
  }, []);

  return (
    <div>
      <h1>Messaggio dal backend: </h1>
      <p>{messaggio}</p>
    </div>
  );
  
}

export default App;
