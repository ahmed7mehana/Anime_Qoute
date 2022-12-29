import { useEffect, useState } from "react";
import Qoute from "./components/Qoute";
import "../src/styles.css";

function App() {
  const [qoute, setQoute] = useState({
    anime: null,
    character: null,
    quote: null
  });

  const fetchAnime = async () => {
    return await fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quote) => setQoute(quote));
  };
  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div className="App">
      <Qoute qoute={qoute} />
      <button
        onClick={() => {
          fetchAnime();
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
