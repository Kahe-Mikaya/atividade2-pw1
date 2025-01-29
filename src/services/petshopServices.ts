import { prisma } from "../database/repository";


export class petshopServices{
    static async createPetshop(data){
        return await prisma.petshop.create({
            data,
        })
    }

    static async getPetShops (){
        return await prisma.petshop.findMany();
    }

    static async getPetShop(cnpj){
        return await prisma.petshop.findUnique({
            where: { cnpj },
        })   
    }

    static async getPets (){
        return await prisma.petshop.findMany({

        })
    }

    static async updatePetShop (id,data) {
        return await prisma.petshop.update({
            where: { id },
            data,
        })
    }
}