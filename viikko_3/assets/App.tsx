import { useState, useEffect } from 'react'
import './App.css'

function App() { 

  const [codename, setCodename] = useState(''); 

  

  // 3.3. Funktio koodinimen generointiin 

  const generateName = () => { 

    const adjectives = ["Big", "Long", "Wide", "Mini"]; 

    const animals = ["Bear", "Pig", "Dog", "Guy"]; 

    const number = Math.floor(Math.random() * 100); 

     

    const adj = adjectives[Math.floor(Math.random() * adjectives.length)]; 

    const ani = animals[Math.floor(Math.random() * animals.length)]; 

     

    return `${adj}${ani}${number}`; 

  }; 

  

  // 3.2. & 3.4. Logiikka tallennukseen ja hakuun 

  useEffect(() => { 

    const cachedName = localStorage.getItem("codename"); 

  

    if (cachedName) { 

      setCodename(cachedName); 

    } else { 

      const newName = generateName(); 

      localStorage.setItem("codename", newName); 

      setCodename(newName); 

    } 

  }, []); 

  

  return ( 

    <div style={{ textAlign: 'center', marginTop: '50px' }}> 

      <h1>Tervetuloa, Agentti!</h1> 

      <p>Koodinimesi on:</p> 

      <h2 style={{ color: '#646cff' }}>{codename}</h2> 

       

      <button onClick={() => { 

        localStorage.clear(); 

        window.location.reload(); 

      }}> 

        Nollaa koodinimi 

      </button> 

    </div> 

  ) 

} 

  

export default App 