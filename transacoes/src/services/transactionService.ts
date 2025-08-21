import { PrismaClient } from "../generated/prisma";

interface TransferData {
  contaOrigemId: number;
  contaDestinoId: number;
  valorTransferencia: number;
}

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

  async getTransfer(id: string) {}
}

export default new TransactionService();
