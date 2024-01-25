import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  // const [currentColourIndex, setCurrentColourIndex] = useState(0);
  // const [colours, setColours] = useState("")

  // console.log("App two session storage is " + sessionStorage)

  // useEffect(() => {
  //   // Fetch colors from sessionStorage on component mount
  //   const storedColours = sessionStorage.coloursTable;
  //   setColours(storedColours);
  //   console.log(storedColours)
  // }, []);

  // const handleNextColor = () => {
  //   const nextIndex = (currentColourIndex + 1) % colours.length;
  //   setCurrentColourIndex(nextIndex);
  //   updateSessionStorage(colours[nextIndex]);
  // };

  // const handlePrevColor = () => {
  //   const prevIndex = (currentColourIndex - 1 + colours.length) % colours.length;
  //   setCurrentColourIndex(prevIndex);

  //   updateSessionStorage(colours[prevIndex]);
  // };

  // const updateSessionStorage = (newColour) => {
  //   sessionStorage.setItem('currentColour', newColour);
  // };


  return (
    <div>
        <h2>App2</h2>
    </div>
  );
};

export default App
