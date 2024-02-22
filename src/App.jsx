import React, { useState } from 'react';
import './App.css';
import celebrationImage from './images/happy.png'; // Import the celebration image
import cryingImage from './images/sad.png'; // Import the crying image

function App() {
  const [showCard, setShowCard] = useState(false);
  const [forgiven, setForgiven] = useState(false);

  const handleForgive = () => {
    setShowCard(true);
    setForgiven(true);
  };

  const handleNotForgive = () => {
    setShowCard(true);
    setForgiven(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Maafi-Nama</h1>
        <h2>I'm really sorry Prachi. Won't ever happen again!</h2>
        <h4>-Brett</h4>
        
        <div className="button-container">
          <button onClick={handleForgive}>Accept</button>
          <button onClick={handleNotForgive}>Decline</button>
        </div>
        {showCard && (
          <div className="card">
            <h2>{forgiven ? 'Hurray!' : 'Oh No!'}</h2>
            <p>{forgiven ? 'Thank you for accepting my apologies. See you in college tomorrow.' : 'You have to forgive me'}</p>
            <img src={forgiven ? celebrationImage : cryingImage} alt={forgiven ? 'Celebration' : 'Crying'} />
          </div>
        )}
      </header>
      
    </div>
  );
}

export default App;
