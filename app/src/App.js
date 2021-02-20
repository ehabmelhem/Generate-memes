import "./App.css";
import Meme from "./Meme";
import { useEffect, useState } from "react";
function App() {
  const [memes, setMemes] = useState([]);
  useEffect(async () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((r) => r.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);
  return (
    <div className="app">
      <h1>this is meems app</h1>
      {memes.map((mem, index) => {
        return <Meme key={index} name={mem.name} url={mem.url} />;
      })}
    </div>
  );
}

export default App;
