
import axios from "axios";
import { TransferData } from "../types/transactionTypes";
import prisma from "./prismaClient";



class TransactionService {
	async verDetalhes(id: number) {
		const transacao = await prisma.transacao.findUnique({
			where: { id },
			include: {
				contaOrigem: true,
				contaDestino: true
			}
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
				nomeDono: transacao.contaOrigem.nomeDono
			},
			contaDestino: {
				id: transacao.contaDestino.id,
				nomeDono: transacao.contaDestino.nomeDono
			}
		};
	}
	async transferir({ contaOrigem, contaDestino, valor }: TransferData, CONTS: string) {
		let status: "Chegou" | "num_chegou" = "num_chegou";
		let erro = null;
		let origem, destino;
		try {
			if (!contaOrigem || !contaDestino || !valor) {
				erro = "Dados obrigatórios ausentes";
				throw new Error(erro);
			}
			if (contaOrigem === contaDestino) {
				erro = "Conta de origem e destino não podem ser iguais";
				throw new Error(erro);
			}
			if (valor <= 0) {
				erro = "Valor da transferência deve ser maior que zero";
				throw new Error(erro);
			}
			try {
				origem = await axios.get(`${CONTS}/${contaOrigem}`);
			} catch {
				erro = "Conta de origem não encontrada";
				throw new Error(erro);
			}
			try {
				destino = await axios.get(`${CONTS}/${contaDestino}`);
			} catch {
				erro = "Conta de destino não encontrada";
				throw new Error(erro);
			}
			if (origem.data.saldo < valor) {
				erro = "Saldo insuficiente na conta de origem";
				throw new Error(erro);
			}
			if (origem.data.saldo <= 0) {
				erro = "Conta de origem não possui saldo para transferir";
				throw new Error(erro);
			}
			if (destino.data.saldo < 0) {
				erro = "Conta de destino inválida";
				throw new Error(erro);
			}
			await axios.post(`${CONTS}/${contaOrigem}/decrement`, { valor });
			await axios.post(`${CONTS}/${contaDestino}/increment`, { valor });
			status = "Chegou";
		} catch (e) {
			status = "num_chegou";
		}
		const transacao = await prisma.transacao.create({
			data: {
				contaOrigemId: contaOrigem,
				contaDestinoId: contaDestino,
				valorTransferencia: valor,
				status: status
			}
		});
		if (status === "Chegou") {
			return { status: "Chegou", contaOrigem, contaDestino, valor, transacaoId: transacao.id };
		} else {
			return { status: "num_chegou", erro, contaOrigem, contaDestino, valor, transacaoId: transacao.id };
		}
	}
}

export default new TransactionService();
