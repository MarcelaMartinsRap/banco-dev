import express from "express";
import contasRoutes from "./routes/contasRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/contas", contasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
