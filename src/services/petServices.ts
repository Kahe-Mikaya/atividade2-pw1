import { prisma } from "../database/repository";

export class petService{

    static createPet = async(data)=>{
        return await prisma.pet.create({
            data,
        })
    }

    static getPets = async(petShopCnpj)=>{
        return await prisma.pet.findMany({
            where: {petShopCnpj}
        });
    }

    static getPet = async(id)=>{
        return await prisma.pet.findUnique({
            where: { id },
        })   
    }

    static updatePet = async(id,data)=>{
        return await prisma.pet.update({
            where: { id },
            data,
        })
    }

    static patchPet = async(id)=>{
        return await prisma.pet.update({
            where: {id},
            data : {vaccinated: true},
        })
    }

    static delete = async(id)=>{
        return await prisma.pet.delete({
            where: {id}
        })
    }

}
