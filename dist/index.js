import express from 'express';
import { PetshopController } from "./controlers/PetshopController.js";
let clients = [];
let usuario;
const server = express();
server.use(express.json());
server.get('/petshops', PetshopController.getPetShop);
server.get('/petshops/:id', PetshopController.getPetShopById);
server.post('/petshops', PetshopController.postPetshop);
server.get('/pets', PetshopController.checkExistsUserAccount, PetshopController.getPet);
server.post('/pets', PetshopController.checkExistsUserAccount, PetshopController.postPet);
server.put('/pets/:id', PetshopController.checkExistsUserAccount, PetshopController.putPet);
server.patch('/pets/:id/vaccination', PetshopController.checkExistsUserAccount, PetshopController.patchPet);
server.delete('/pets/:id', PetshopController.checkExistsUserAccount, PetshopController.deletePet);
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
