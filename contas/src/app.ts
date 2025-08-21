import express from "express";
import contasRoutes from "./routes/contasRoutes";
import cors from "cors";
import accountRoutes from "./routes/accountRoutes";


const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
