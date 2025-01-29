

import express, { Request, Response, NextFunction, response } from 'express';
import { Pet } from './Pet';
import { Petshop } from './Petshop';
import { PetshopController }  from "./controllers/PetshopController";
import { PetController } from "./controllers/PetController"
import { checkExistsUserAccount }  from "./middlewares/checkExistsUserAccount"
import { request } from 'node:http';



  let clients: Petshop[] = [];
  let usuario
  const server = express();
  server.use(express.json());


  server.get('/petshops',PetshopController.getPetShop)
  server.get('/petshops/:id',PetshopController.getPetShopById)
  server.post('/petshops',PetshopController.postPetshop)

  server.get('/pets',checkExistsUserAccount,PetController.getPet)
  server.post('/pets',checkExistsUserAccount,PetController.postPet)
  server.put('/pets/:id',checkExistsUserAccount,PetController.putPet)
  server.patch('/pets/:id/vaccination',checkExistsUserAccount,PetController.patchPet)
  server.delete('/pets/:id',checkExistsUserAccount,PetController.deletePet)

  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  }); 

  