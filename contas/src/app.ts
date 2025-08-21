import express from "express";
import contasRoutes from "./routes/contasRoutes";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());
app.use("/contas", contasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
