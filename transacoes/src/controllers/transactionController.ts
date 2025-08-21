
import { Request, Response } from "express";
import transactionService from "../services/transactionService";

class TransactionController {
  transfer(req: Request, res: Response) {
    res.status(201).json({ message: "Transferência realizada" });
  }

  getTransfer(req: Request, res: Response) {
    res.json({ message: "Detalhes da transferência" });
  }
}

export default new TransactionController();
