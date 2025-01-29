import express, { Request, Response, NextFunction } from 'express';
import { Petshop } from "../Petshop"
import { Pet } from '../Pet';
import { petshopServices } from '../services/petshopServices';
import {validate as validateUuid, v4 as uuidv4} from 'uuid'



let usuario = new Petshop("478912385","Maispet",[]) //para teste


export class PetshopController{

  static async getPetShop(request,response){
 
    return response.status(200).json(await petshopServices.getPetShops())
  }

  static async getPetShopById(req,response){
      const id = req.params.id
      let petshop = await petshopServices.getPetShop(id)
      if (!petshop) {
        return response.status(400).json("error:usuário inexistente");
      }
      return response.status(200).json(petshop)

  }


  static postPetshop(request,response){
    
      const dados = request.body as Petshop
      const petshop: Petshop |null = new Petshop(dados.cnpj,dados.name,[])
  
      if (!Petshop) {
        return response.status(400).json("error:usaario nao cadastrado")
      }
      petshopServices.createPetshop(dados)
      return response.status(200).json(petshop)

  }

}