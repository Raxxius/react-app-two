import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [colours, setColours] = useState("")

  console.log("App two session storage is " + sessionStorage)

  useEffect(() => {
    // Fetch colors from sessionStorage on component mount
    const storedColors = sessionStorage.coloursTable;
    setColors(storedColors);
    console.log(storedColors)
  }, []);

  const handleNextColor = () => {
    const nextIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextIndex);
    updateSessionStorage(colors[nextIndex]);
  };

  const handlePrevColor = () => {
    const prevIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    setCurrentColorIndex(prevIndex);

    updateSessionStorage(colors[prevIndex]);
  };

  const updateSessionStorage = (newColor) => {
    sessionStorage.setItem('currentColour', newColor);
  };


  return (
    <div>
      <button onClick={handlePrevColor}>Previous Color</button>
      <button onClick={handleNextColor}>Next Color</button>
    </div>
  );
};

export default App
