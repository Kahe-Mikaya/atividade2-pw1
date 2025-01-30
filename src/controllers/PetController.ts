import express, { Request, Response, NextFunction } from 'express';
import { Petshop } from "../Petshop"
import { Pet } from '../Pet';
import {validate as validateUuid, v4 as uuidv4} from 'uuid'
import { petService } from '../services/petServices';
import { petshopServices } from '../services/petshopServices';


export class PetController{
    static async getPet(req : Request, response: Response) {
        const cnpj = req.headers.cnpj     
        const pets = await petService.getPets(cnpj)

        return response.status(200).json(pets)
        
    }

    static async postPet(req, response: Response){
    const dados = req.body as Pet
    const petshop = req.headers.cnpj
    const data = new Date()
    const pet: Pet|null = new Pet(dados.name,dados.type,dados.description,false,dados.deadline_vaccination,data,petshop)

    if(!pet){
        
        return response.status(400).json("error: nao foi possivel criar o pet")

    }
    await petService.createPet(pet)
    return response.status(200).json({message: "petcriado com sucesso"})
    }


    static async putPet(req, response: Response){
        const dados = req.body as Pet;
        let pet = petService.getPets(req.params.id)
        if(!pet){
        
            return response.status(400).json("error: nao foi possivel criar o pet")
        }

        await petService.updatePet(req.params.id,dados)
        return  response.status(200).json({message: "pet alterado com sucesso"})
        }

    
    static patchPet(req,response){
        const id = req.params.id
        let pet = petService.getPets(req.params.id)
        if(!pet){
            return response.status(400).json("error: nao foi possivel criar o pet")
        }
        petService.patchPet(id)

       
        return  response.status(200).json({message: "pet alterado com sucesso"})
    }

    static async deletePet(req,response){
        let pet = petService.getPets(req.params.id)
        if(!pet){
        
            return response.status(400).json("error: nao foi possivel criar o pet")
        }
        await petService.delete(req.params.id)
        return  response.status(200).json({message: "pet deletado com sucesso"})
    } 

}
