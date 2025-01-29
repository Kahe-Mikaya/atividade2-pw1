-- CreateTable
CREATE TABLE "petshop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "petshop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vaccinated" BOOLEAN NOT NULL,
    "deadline_vaccination" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "petShopCnpj" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "petshop_cnpj_key" ON "petshop"("cnpj");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_petShopCnpj_fkey" FOREIGN KEY ("petShopCnpj") REFERENCES "petshop"("cnpj") ON DELETE CASCADE ON UPDATE CASCADE;
