import { v4 as uuidv4 } from 'uuid';
export class Petshop {
    id;
    cnpj;
    name;
    pets;
    constructor(cnpj, name, pets) {
        this.id = uuidv4();
        this.cnpj = cnpj;
        this.name = name;
        this.pets = pets;
    }
}
