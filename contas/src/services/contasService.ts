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

  incrementarSaldo: (id: string, valor: number) => {},

  decrementarSaldo: (id: string, valor: number) => {},

  deletarConta: async (id: string) => {
    try {
      const contaId = parseInt(id);
      if (isNaN(contaId)) {
        throw new Error("ID inválido");
      }

      const contaExistente = await prisma.contaBancaria.findUnique({
        where: {
          id: contaId,
        },
      });

      if (!contaExistente) {
        throw new Error("Conta não encontrada");
      }

      await prisma.contaBancaria.delete({
        where: {
          id: contaId,
        },
      });

      return { message: "Conta deletada com sucesso" };
    } catch (error) {
      throw error;
    }
  },
};

export default contasService;
