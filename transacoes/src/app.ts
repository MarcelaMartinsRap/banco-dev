import express from "express";
import cors from "cors";
import transactionRoutes from "./routes/transactionRoutes";

const app = express();
app.use(cors());
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});



app.use(express.json());
app.use("/transacoes", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
