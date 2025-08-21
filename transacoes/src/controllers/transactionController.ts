import { Request, Response } from "express";


import { TransferData } from "../types/transactionTypes";
import transactionService from "../services/transactionService";

const CONTS = "http://localhost:3000/contas";

class TransactionController {
  async transfer(req: Request, res: Response) {
    const { contaOrigem, contaDestino, valor } = req.body;
    if (!contaOrigem || !contaDestino || !valor) {
      return res.status(400).json({ erro: "Dados obrigatórios ausentes" });
    }
    if (contaOrigem === contaDestino) {
      return res.status(400).json({ erro: "Conta de origem e destino não podem ser iguais" });
    }
    if (valor <= 0) {
      return res.status(400).json({ erro: "Valor da transferência deve ser maior que zero" });
    }
    try {
  const resultado = await transactionService.transferir({ contaOrigem, contaDestino, valor }, CONTS);
      res.status(201).json(resultado);
    } catch (e: any) {
      res.status(400).json({ erro: e.message });
    }
  }

  async getTransfer(req: Request, res: Response) {
    const { id } = req.params;
    const idNum = Number(id);
    if (!id || isNaN(idNum) || idNum <= 0) {
      return res.status(400).json({ status: "erro", mensagem: "Requisição inválida" });
    }
    try {
      const detalhes = await transactionService.verDetalhes(idNum);
      if (detalhes.status === "num_chegou" && detalhes.erro) {
        return res.status(404).json({ status: "erro", mensagem: "Transação não encontrada" });
      }
      res.json({ status: "sucesso", dados: detalhes });
    } catch (e: any) {
      res.status(500).json({ status: "erro", mensagem: "Erro interno ao buscar detalhes da transação" });
    }
  }
}

export default new TransactionController();
