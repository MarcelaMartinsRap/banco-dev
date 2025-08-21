-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Chegou', 'num_chegou');

-- CreateTable
CREATE TABLE "public"."ContaBancaria" (
    "id" SERIAL NOT NULL,
    "nomeDono" TEXT NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ContaBancaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Transacao" (
    "id" SERIAL NOT NULL,
    "contaOrigemId" INTEGER NOT NULL,
    "contaDestinoId" INTEGER NOT NULL,
    "valorTransferencia" DOUBLE PRECISION NOT NULL,
    "status" "public"."Status" NOT NULL,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Transacao" ADD CONSTRAINT "Transacao_contaOrigemId_fkey" FOREIGN KEY ("contaOrigemId") REFERENCES "public"."ContaBancaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transacao" ADD CONSTRAINT "Transacao_contaDestinoId_fkey" FOREIGN KEY ("contaDestinoId") REFERENCES "public"."ContaBancaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
