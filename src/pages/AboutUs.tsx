// components/AboutUs.jsx
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    document.title = "Liwen - Acerca de Nosotros"; // Nuevo título
  }, []);
  return (
    <div className="pt-6 justify-items-center whitespace-pre-line">
      <h1>Sobre Nosotros</h1>
      <p>Esta es la página de "Acerca de Nosotros".</p>
    </div>
  );
}

export default AboutUs;
