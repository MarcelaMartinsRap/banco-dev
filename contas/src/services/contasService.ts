import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const contasService = {
  criarConta: async (dadosConta: { nomeDono: string; saldo: number }) => {
    try {
      const novaConta = await prisma.contaBancaria.create({
        data: {
          nomeDono: dadosConta.nomeDono,
          saldo: dadosConta.saldo || 0,
        },
      });
      return novaConta;
    } catch (error) {
      throw new Error("Erro ao criar conta no banco de dados");
    }
  },

  obterDetalhesConta: async (id: string) => {
    try {
      const contaId = parseInt(id);
      if (isNaN(contaId)) {
        throw new Error("ID inválido");
      }

      const conta = await prisma.contaBancaria.findUnique({
        where: {
          id: contaId,
        },
      });

      if (!conta) {
        throw new Error("Conta não encontrada");
      }

      return conta;
    } catch (error) {
      throw error;
    }
  },

  incrementarSaldo: async (id: string, valor: number) => {
    try {
      const conta = await prisma.contaBancaria.findUnique({
        where: { id: Number(id) },
      });
      if (!conta) {
        throw new Error("Conta não encontrada");
      }

      const operacao = await prisma.contaBancaria.update({
        where: { id: Number(id) },
        data: { saldo: { increment: valor } },
      });
      return {
        data: operacao,
        message: "Saldo incrementado com sucesso",
        statusCode: 201,
      };
    } catch (error) {
      return {
        data: null,
        message: "Erro ao incrementar saldo",
        statusCode: 500,
      };
    }
  },

  decrementarSaldo: async (id: string, valor: number) => {
    const conta = await prisma.contaBancaria.findUnique({
      where: { id: Number(id) },
    });
    if (!conta || conta.saldo < valor) {
      throw new Error("Conta não encontrada ou saldo insuficiente");
    }

    const operacao = await prisma.contaBancaria.update({
      where: { id: Number(id) },
      data: { saldo: { decrement: valor } },
    });

    return {
      data: operacao,
      message: "Saldo decrementado com sucesso",
      statusCode: 200,
    };
  },

  deletarConta: (id: string) => {},
};

export default contasService;
