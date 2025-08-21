
import axios from "axios";
import { TransferData } from "../types/transactionTypes";




class TransactionService {
	async verDetalhes(id: number) {
		return { status: "num_chegou", erro: "Transação não encontrada" };
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
		} catch (e: any) {
			status = "num_chegou";
			if (e && e.message) erro = e.message;
		}
		if (status === "Chegou") {
			return { status: "Chegou", contaOrigem, contaDestino, valor };
		} else {
			return { status: "num_chegou", erro, contaOrigem, contaDestino, valor };
		}
	}
}

export default new TransactionService();
