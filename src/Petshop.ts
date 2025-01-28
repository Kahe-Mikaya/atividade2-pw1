import { validate as validateUuid, v4 as uuidv4 } from 'uuid'
import { Pet } from "./Pet";


export class Petshop{
    id: string;
    cnpj: string;
    name: string;
    pets: Pet[];

    constructor(cnpj:string,name:string,pets:Pet[]){
        this.id = uuidv4();
        this.cnpj = cnpj
        this.name = name
        this.pets = pets
    }
}