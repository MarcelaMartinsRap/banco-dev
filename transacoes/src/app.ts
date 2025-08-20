import express from "express";
import transactionRoutes from "./routes/transactionRoutes";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});



app.use(express.json());
app.use("/transacoes", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
