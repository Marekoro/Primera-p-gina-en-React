import sqlite3 from "sqlite3";
import { open } from "sqlite";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const dbPath = "./nliwen.db";

let db;

const obtenerFechaHora = () => {
  const ahora = new Date();
  const dia = String(ahora.getDate()).padStart(2, '0');
  const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // +1 porque enero es 0
  const año = ahora.getFullYear();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');

  return `${dia}/${mes}/${año} ${horas}:${minutos}`;
};

async function initDB() {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    console.log("Base de datos conectada correctamente.");

    // Crear la tabla si no existe
    await db.exec(`
      CREATE TABLE IF NOT EXISTS bloc (
        title TEXT,
        content TEXT,
        date TEXT
      );
    `);

  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
  }
}

async function fetchData() {
  try {
    const users = await db.all("SELECT * FROM bloc");
    return users;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}


app.get("/blog", async (req, res) => {
  const data = await fetchData();
  res.json(data);
});


app.post("/addusers", (req, res) => {
  const { title, body } = req.body;

  if (!title || ! body) return res.status(400).json({ error: "Los campos 'title' y 'body' son obligatorios" });

  console.log("Datos recibidos:", req.body);
  db.run("INSERT INTO bloc (title, content, date) VALUES (?, ?, ?)", [req.body["title"], req.body["body"], obtenerFechaHora()]);
  res.send("Added")
});

// Iniciar el servidor después de conectar la base de datos
initDB().then(() => {
  app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });
});


process.on("SIGINT", async () => {
  if (db) {
    await db.close();
    console.log("Base de datos cerrada.");
  }
  process.exit(0);
});
