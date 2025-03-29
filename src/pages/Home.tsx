// components/Home.jsx
import img from "../assets/touhou.png";
import { useEffect } from "react";




function Home() {
  // TODO: Actually implement a navigation bar
  useEffect(() => {
    document.title = "Liwen"; // Nuevo título
  }, []);
  return (
    <div className="pt-6">
      <img className="max-w-2/3 h-auto object-cover rounded-lg hover:shadow-lg justify-self-center" src={img} alt="Ejemplo" />
      <div>
        <h1 style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet.</h1>
        <h2 style={{ textAlign: "center", padding: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nunc euismod ut libero eu imperdiet.
        </h2>
      </div>
    </div>
  );
}

export default Home;
