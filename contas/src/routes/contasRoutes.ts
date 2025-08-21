import { Request, Response } from "express";
import { Router } from "express";
import ContaController from "../controllers/contasControllers";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  ContaController.criarConta(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  ContaController.obterDetalhesConta(req, res);
});

router.put("/:id/incrementar", (req: Request, res: Response) => {
  ContaController.incrementarSaldo(req, res);
});

router.put("/:id/decrementar", (req: Request, res: Response) => {
  ContaController.decrementarSaldo(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  ContaController.deletarConta(req, res);
});

export default router;
