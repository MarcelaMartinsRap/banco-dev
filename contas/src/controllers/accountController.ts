import { Request, Response } from "express";
import accountService from "../services/accountService";

class AccountController {
  createAccount(req: Request, res: Response) {
    // TODO: lógica para criar conta
    res.status(201).json({ message: "Conta criada" });
  }

  getAccountDetails(req: Request, res: Response) {
    // TODO: lógica para buscar detalhes da conta
    res.json({ message: "Detalhes da conta" });
  }

  incrementBalance(req: Request, res: Response) {
    // TODO: lógica para incrementar saldo
    res.json({ message: "Saldo incrementado" });
  }

  decrementBalance(req: Request, res: Response) {
    // TODO: lógica para decrementar saldo
    res.json({ message: "Saldo decrementado" });
  }
}

export default new AccountController();
