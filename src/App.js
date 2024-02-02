import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const noButtonRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    const noButton = noButtonRef.current;
    if (noButton) {
      let moveX, moveY;
      do {
        moveX = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 100 + 50); // Random distance between 50 and 150px
        moveY = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 100 + 50);
      } while (Math.abs(moveX) < 75 && Math.abs(moveY) < 75); // Ensure a minimum distance of 75px
      noButton.style.transition = 'transform 0.5s ease';
      noButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  };

  const handleYesClick = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <div className="gif-container">
        <img 
          src="https://media.giphy.com/media/3oz8xFyn0emm4qvvAA/giphy.gif"
          alt="Animated content"
          className="animated-gif"
        />
      </div>
      <h1 className="Anum">Anum</h1>
      <h1>Will You Be My Valentine?</h1>
      <div className="button-container">
        <button className="yes-button" onClick={handleYesClick}>Yes</button>
        <button className="no-button" ref={noButtonRef} onMouseEnter={handleMouseEnter}>No</button>
      </div>
      {showModal && (
        <div className="modal">
          <h1>LET'S GOOO!!!</h1>
          <img 
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGpzZzc4bThvdWpqMGRmbGtnZnFzMzd3cDk4ZXdqNWMyMnJ2bjR4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DZiTBkioZS0Te/giphy.gif"
            alt="Celebration"
            className="modal-gif"
          />
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
