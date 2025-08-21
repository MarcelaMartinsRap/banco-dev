import { Request, Response } from "express";
import transactionService, { Conta } from "../services/transactionService";
import axios from "axios";
import { TransferData } from "../types/transactionTypes";


const CONTS = "http://localhost:3000/contas";

class TransactionController {
  async transfer(req: Request, res: Response) {
    try {
      const { contaOrigemId, contaDestinoId, valorTransferencia } = req.body;

      if (!contaOrigemId || !contaDestinoId || !valorTransferencia) {
        return res.status(400).json({
          error:
            "Dados incompletos. Por favor, forneça contaOrigemId, contaDestinoId e valorTransferencia.",
        });
      }

      const data = {
        contaOrigemId: Number(contaOrigemId),
        contaDestinoId: Number(contaDestinoId),
        valorTransferencia: Number(valorTransferencia),
      };

      const contaOrigem = await axios.get(
        `http://localhost:3000/contas/${data.contaOrigemId}`
      );
      const contaDestino = await axios.get(
        `http://localhost:3000/contas/${data.contaDestinoId}`
      );

      console.log("Conta de origem:", contaOrigem.data);
      console.log("Conta de destino:", contaDestino.data);

      if (!contaOrigem.data || !contaDestino.data) {
        return res
          .status(404)
          .json({ error: "Conta de origem ou destino não encontrada" });
      }

      const transaction = await transactionService.transfer(
        data,
        contaOrigem.data
      );

      console.log("Transação realizada:", transaction);

      if (!transaction) {
        return res
          .status(400)
          .json({ error: "Erro ao realizar transferência" });
      }

      const movimentarContaOrigem = await axios.put(
        `http://localhost:3000/contas/${data.contaOrigemId}`,
        {
          saldo: contaOrigem.data.saldo - data.valorTransferencia,
        }
      );

      const movimentarContaDestino = await axios.put(
        `http://localhost:3000/contas/${data.contaDestinoId}`,
        {
          saldo: contaDestino.data.saldo + data.valorTransferencia,
        }
      );

      if (!movimentarContaOrigem) {
        return res
          .status(400)
          .json({ error: "Erro ao atualizar saldo da conta de origem" });
      }

      if (!movimentarContaDestino) {
        return res.status(400).json({
          error: "Erro ao atualizar saldo da conta de destino",
        });
      }

      return res.status(201).json({
        message: "Transferência realizada com sucesso",
        transaction,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      console.error("Erro ao processar transferência:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
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
