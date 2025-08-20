import { Request, Response } from "express";
import transactionService from "../services/transactionService";

class TransactionController {
  transfer(req: Request, res: Response) {
    // TODO: lógica para transferir
    res.status(201).json({ message: "Transferência realizada" });
  }

  getTransfer(req: Request, res: Response) {
    // TODO: lógica para buscar transferência
    res.json({ message: "Detalhes da transferência" });
  }
}

export default new TransactionController();
