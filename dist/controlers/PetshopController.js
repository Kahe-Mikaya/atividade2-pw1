import { Petshop } from "../Petshop.js";
import { Pet } from '../Pet.js';
let clients = [];
let usuario = new Petshop("478912385", "Maispet", []); //para teste
clients.push(usuario);
export class PetshopController {
    static checkExistsUserAccount(request, response, next) {
        const cnpj = request.headers.cnpj;
        usuario = clients.find(client => client.cnpj === cnpj);
        if (!usuario) {
            return response.status(404).json("error: Petshop inexistente");
        }
        next();
    }
    static getPetShop(request, response) {
        return response.status(200).json(clients);
    }
    static getPetShopById(req, response) {
        const id = req.params.id;
        usuario = clients.find(client => client.id === id);
        if (!usuario) {
            return response.status(400).json("error:usuário inexistente");
        }
        return response.status(200).json(usuario);
    }
    static postPetshop(request, response) {
        const dados = request.body;
        const petshop = new Petshop(dados.cnpj, dados.name, []);
        if (!Petshop) {
            return response.status(400).json("error:usaario nao cadastrado");
        }
        clients.push(petshop);
        return response.status(200).json(petshop);
    }
    static getPet(req, response) {
        const cnpj = req.headers.cnpj;
        const petshop = clients.find(client => client.cnpj == cnpj);
        return response.status(200).json(petshop.pets);
    }
    static postPet(req, response) {
        const dados = req.body;
        const pet = new Pet(dados.name, dados.type, dados.description, false, dados.deadline_vaccination, Date.now());
        if (!pet) {
            return response.status(400).json("error: nao foi possivel criar o pet");
        }
        usuario.pets.push(pet);
        return response.status(200).json({ message: "petcriado com sucesso" });
    }
    static putPet(req, response) {
        const dados = req.body;
        let pet = usuario.pets.find(pet => pet.id == req.params.id);
        if (!pet) {
            return response.status(400).json("error: nao foi possivel achar o pet ");
        }
        pet.setpet(dados.name, dados.type, dados.description, dados.deadline_vaccination);
        return response.status(200).json({ message: "pet alterado com sucesso" });
    }
    static patchPet(req, response) {
        let pet = usuario.pets.find(pet => pet.id == req.params.id);
        if (!pet) {
            return response.status(400).json("error: nao foi possivel achar o pet ");
        }
        pet.vaccinated = true;
        return response.status(200).json({ message: "pet alterado com sucesso" });
    }
    static deletePet(req, response) {
        let pet = usuario.pets.find(pet => pet.id == req.params.id);
        if (!pet) {
            return response.status(400).json("error: nao foi possivel achar o pet ");
        }
        usuario.pets = usuario.pets.filter(elemento => elemento.id != pet.id);
        return response.status(200).json({ message: "pet deletado com sucesso" });
    }
}
