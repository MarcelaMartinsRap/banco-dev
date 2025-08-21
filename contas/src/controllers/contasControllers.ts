import { Request, Response } from "express";
import contasService from "../services/contasService";

const contasController = {
  criarConta: async (req: Request, res: Response) => {},

  obterDetalhesConta: async (req: Request, res: Response) => {},

  incrementarSaldo: async (req: Request, res: Response) => {},

  decrementarSaldo: async (req: Request, res: Response) => {},

  deletarConta: async (req: Request, res: Response) => {},
};

export default contasController;
