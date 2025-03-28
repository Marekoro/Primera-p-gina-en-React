// components/AboutUs.jsx
import { useEffect } from "react";

function Misarege() {
  useEffect(() => {
    document.title = "Liwen - Quien $%& es Misarege"; // Nuevo título
  }, []);
  return (
    <div className="pt-6 justify-items-center whitespace-pre-line">
      <h1>Misarege es Misarege</h1>
      <p>Esta es la página de Misarege.</p>
    </div>
  );
}

export default Misarege;
