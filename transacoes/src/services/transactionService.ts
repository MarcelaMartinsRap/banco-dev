import { PrismaClient } from "../generated/prisma";
import axios from "axios";
import { TransferData } from "../types/transactionTypes";
import prisma from "./prismaClient";

export interface Conta {
  id: number;
  nomeDono: string;
  saldo: number;
}

class TransactionService {
  private prisma = new PrismaClient();

  async transfer(data: TransferData, contaOrigem: Conta) {
    if (
      !data.contaOrigemId ||
      !data.contaDestinoId ||
      !data.valorTransferencia ||
      !contaOrigem
    ) {
      throw new Error("Dados incompletos para transferência");
    }

    if (data.valorTransferencia <= 0) {
      throw new Error("O valor da transferência deve ser maior que zero");
    }

    if (contaOrigem.saldo < 0) {
      throw new Error(
        "A conta de origem está com saldo negativo e não pode realizar transferências"
      );
    }

    if (contaOrigem.saldo < data.valorTransferencia) {
      throw new Error("Saldo insuficiente para realizar a transferência");
    }

    if (contaOrigem.saldo - data.valorTransferencia < 0) {
      throw new Error("A transferência deixaria a conta com saldo negativo");
    }

    if (contaOrigem.saldo < data.valorTransferencia) {
      throw new Error(
        "A conta de origem não possui saldo suficiente para esta transferência"
      );
    }

    try {
      const transacao = await this.prisma.transacao.create({
        data: {
          contaOrigemId: data.contaOrigemId,
          contaDestinoId: data.contaDestinoId,
          valorTransferencia: data.valorTransferencia,
          status: "Chegou",
        },
      });

      return transacao;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Erro na transferência: ${error.message}`);
      }
      throw new Error("Ocorreu um erro desconhecido durante a transferência");
    }
  }

  async verDetalhes(id: number) {
    const transacao = await prisma.transacao.findUnique({
      where: { id },
      include: {
        contaOrigem: true,
        contaDestino: true,
      },
    });
    if (!transacao) {
      return { status: "num_chegou", erro: "Transação não encontrada" };
    }
    return {
      id: transacao.id,
      status: transacao.status,
      valor: transacao.valorTransferencia,
      contaOrigem: {
        id: transacao.contaOrigem.id,
        nomeDono: transacao.contaOrigem.nomeDono,
      },
      contaDestino: {
        id: transacao.contaDestino.id,
        nomeDono: transacao.contaDestino.nomeDono,
      },
    };
  }
}

export default new TransactionService();
