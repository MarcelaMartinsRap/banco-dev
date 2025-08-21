
import { Router, Request, Response } from "express";
import transactionController from "../controllers/transactionController";

const router = Router();

router.post("/transferir", (req: Request, res: Response) => transactionController.transfer(req, res));
router.get("/transferencia/:id", (req: Request, res: Response) => transactionController.getTransfer(req, res));

export default router;
