/*
  Warnings:

  - You are about to drop the `Pet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_petShopCnpj_fkey";

-- DropTable
DROP TABLE "Pet";

-- CreateTable
CREATE TABLE "pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vaccinated" BOOLEAN NOT NULL,
    "deadline_vaccination" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "petShopCnpj" TEXT NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_petShopCnpj_fkey" FOREIGN KEY ("petShopCnpj") REFERENCES "petshop"("cnpj") ON DELETE CASCADE ON UPDATE CASCADE;
