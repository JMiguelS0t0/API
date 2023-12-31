import express from "express";
import cors from "cors";
import catalogoRouter from "./routes/catalogo.router";
import ServicioRouter from "./routes/servicio.router";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", catalogoRouter, ServicioRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando puerto ${PORT}`);
});
