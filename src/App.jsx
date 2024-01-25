import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [currentColourIndex, setCurrentColourIndex] = useState(0);
  const [colours, setColours] = useState("")

  console.log("App two session storage is " + sessionStorage)

  useEffect(() => {
    // Fetch colors from sessionStorage on component mount
    const storedColours = sessionStorage.coloursTable;
    setColours(storedColours);
    console.log(storedColours)
  }, []);

  const handleNextColor = () => {
    const nextIndex = (currentColorIndex + 1) % colours.length;
    setCurrentColorIndex(nextIndex);
    updateSessionStorage(colours[nextIndex]);
  };

  const handlePrevColor = () => {
    const prevIndex = (currentColourIndex - 1 + colours.length) % colours.length;
    setCurrentColourIndex(prevIndex);

    updateSessionStorage(colours[prevIndex]);
  };

  const updateSessionStorage = (newColour) => {
    sessionStorage.setItem('currentColour', newColour);
  };


  return (
    <div>
      <button onClick={handlePrevColor}>Previous Color</button>
      <button onClick={handleNextColor}>Next Color</button>
    </div>
  );
};

export default App
