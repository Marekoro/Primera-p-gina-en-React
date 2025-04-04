import { useState } from "react";
import axios from "axios";

export default function FullScreenForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("🚀 Datos enviados:", formData);
    myFunction(formData);
    setIsOpen(false);
  };

  const myFunction = (data: { title: string; content: string }) => {
    axios
      .post("http://localhost:3000/addusers", {
        title: data.title,
        body: data.content
      })
      .then((res) => console.log(res.data)) // 🔹 Esto imprimirá "hola"
      .catch((err) => console.log("Error:", err.response.data));
    
    
    setFormData({
        title: "",
        content: "",
      })
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Nuevo blog
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl mx-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Formulario de Entrada</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-600 text-2xl">&times;</button>
            </div>

            <label className="mb-2 font-semibold block">Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            />

            <label className="mb-2 font-semibold block">Contenido</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="mb-4 p-2 border border-gray-300 rounded w-full h-32 resize-none"
            ></textarea>

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
