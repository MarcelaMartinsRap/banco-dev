import express from "express";
import cors from "cors";
import accountRoutes from "./routes/accountRoutes";


const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});


app.use(express.json());
app.use("/contas", accountRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
