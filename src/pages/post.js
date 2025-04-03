import axios from "axios";

axios
  .post("http://localhost:3000/addusers", {
    title: 'a',
    body: 'b'
  })
  .then((res) => console.log(res.data)) // 🔹 Esto imprimirá "hola"
  .catch((err) => console.log("Error:", err.response.data));
