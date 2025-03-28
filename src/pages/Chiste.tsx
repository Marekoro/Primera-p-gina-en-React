import axios from "axios";
import { useEffect, useState } from "react";

function Chiste() {
  const [mensaje, setMensaje] = useState("");
  const [mensaje1, setMensaje1] = useState("");

  useEffect(() => {
    document.title = "Liwen - Comedia"; // Nuevo título
    axios
      .get("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => setMensaje(res.data.joke))
      .catch((err) => console.log(err));

    axios
      .get("https://icanhazdadjoke.com/",{headers: { Accept: "application/json" }})
      .then((res) => setMensaje1(res.data.joke))
      .catch((err) => console.error(err));
  },[])

  const A = () => {
    axios
      .get("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => setMensaje(res.data.joke))
      .catch((err) => console.error(err));
  };

  const B = () => {
    axios
      .get("https://icanhazdadjoke.com/",{headers: { Accept: "application/json" }})
      .then((res) => setMensaje1(res.data.joke))
      .catch((err) => console.error(err));
  };

  return (
    <div className="pt-6 justify-items-center whitespace-pre-line">
      <button onClick={A} className="rounded border border-gray-700 bg-gray-800 text-amber-200">¿Nuevo Chiste de jokeapi?</button>
      <p>{mensaje} <br/><br/></p>
      
      <button onClick={B} className="rounded border border-gray-700 bg-gray-800 text-amber-200"> ¿Nuevo Chiste de icanhazdadjoke? </button>
      <p>{mensaje1}</p>
    </div>
  );
}

export default Chiste;
