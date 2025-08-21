import { Request, Response } from "express";
import contasService from "../services/contasService";

const contasController = {
  criarConta: async (req: Request, res: Response) => {
    try {
      const { nomeDono, saldo } = req.body;

      if (!nomeDono) {
        return res.status(400).json({
          error: "Nome do dono é obrigatório",
        });
      }

      if (saldo < 0) {
        return res.status(400).json({
          error: "Saldo não pode ser negativo",
        });
      }

      const novaConta = await contasService.criarConta({
        nomeDono,
        saldo: saldo || 0,
      });

      res.status(201).json({
        message: "Conta criada com sucesso",
        conta: novaConta,
      });
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      res.status(500).json({
        error: "Erro interno do servidor ao criar conta",
      });
    }
  },

  obterDetalhesConta: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          error: "ID da conta é obrigatório",
        });
      }

      const conta = await contasService.obterDetalhesConta(id);

      res.status(200).json({
        message: "Conta encontrada",
        conta: conta,
      });
    } catch (error: any) {
      console.error("Erro ao obter conta:", error);

      if (error.message === "Conta não encontrada") {
        return res.status(404).json({
          error: "Conta não encontrada",
        });
      }

      if (error.message === "ID inválido") {
        return res.status(400).json({
          error: "ID inválido",
        });
      }

      res.status(500).json({
        error: "Erro interno do servidor ao buscar conta",
      });
    }
  },

  incrementarSaldo: async (req: Request, res: Response) => {},

  decrementarSaldo: async (req: Request, res: Response) => {},

  deletarConta: async (req: Request, res: Response) => {},
};

export default contasController;
