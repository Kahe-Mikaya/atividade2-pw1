import express, { Request, Response, NextFunction } from 'express';
import { Petshop } from "../Petshop"
import { Pet } from '../Pet';
import {validate as validateUuid, v4 as uuidv4} from 'uuid'

let clients: Petshop[] = [];

let usuario = new Petshop("478912385","Maispet",[]) //para teste
clients.push(usuario)

export class PetshopController{

    
  static checkExistsUserAccount(request: Request, response: Response, next: NextFunction) {
    const cnpj = request.headers.cnpj;
    usuario = clients.find(client => client.cnpj === cnpj);
      if (!usuario) {
        return response.status(404).json("error: Petshop inexistente");
      }
    
      next();
    }
  
    static getPetShop(request,response){
      return response.status(200).json(clients)
  }
  static getPetShopById(req,response){
      const id = req.params.id
      usuario = clients.find(client => client.id === id)
      if (!usuario) {
        return response.status(400).json("error:usuário inexistente");
      }
      return response.status(200).json(usuario)

  }


  static postPetshop(request,response){
    
      const dados = request.body as Petshop
      const petshop: Petshop |null = new Petshop(dados.cnpj,dados.name,[])
  
      if (!Petshop) {
        return response.status(400).json("error:usaario nao cadastrado")
      }
      clients.push(petshop)
      return response.status(200).json(petshop)

  }

  static getPet(req : Request, response: Response) {
      const cnpj = req.headers.cnpj     
      const petshop: Petshop = clients.find(client => client.cnpj == cnpj)

      return response.status(200).json(petshop.pets)
        
  }

  static postPet(req, response: Response){
    const dados = req.body as Pet
    const pet: Pet|null = new Pet(dados.name,dados.type,dados.description,false,dados.deadline_vaccination,Date.now())

    if(!pet){
      
      return response.status(400).json("error: nao foi possivel criar o pet")

    }
    usuario.pets.push(pet)
    return response.status(200).json({message: "petcriado com sucesso"})
  }


  static putPet(req, response: Response){
    const dados = req.body as Pet;
    let pet = usuario.pets.find(pet => pet.id == req.params.id)
    if(!pet){
      return response.status(400).json("error: nao foi possivel achar o pet ")
    }
    pet.setpet(dados.name,dados.type,dados.description,dados.deadline_vaccination)
    return  response.status(200).json({message: "pet alterado com sucesso"})
  }

  static patchPet(req,response){
    let pet = usuario.pets.find(pet => pet.id == req.params.id)
    if(!pet){
      return response.status(400).json("error: nao foi possivel achar o pet ")
    }
    pet.vaccinated = true;
    return  response.status(200).json({message: "pet alterado com sucesso"})
  }

  static deletePet(req,response){
    let pet = usuario.pets.find(pet => pet.id == req.params.id)
    if(!pet){
      return response.status(400).json("error: nao foi possivel achar o pet ")
    }
    usuario.pets = usuario.pets.filter(elemento => elemento.id != pet.id)
    return  response.status(200).json({message: "pet deletado com sucesso"})
  } 

}