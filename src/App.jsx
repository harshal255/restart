import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {

  const [loaded, setLoaded] = useState(false);

  //   the useEffect will run on the first rendering of the App component
  //   after two seconds (about how long it takes for the data to load)
  //   the loaded state will become true
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      )}</>

  )
}

export default App
