import { v4 as uuidv4 } from 'uuid';
export class Pet {
    id; // precisa ser um uuid
    name;
    type;
    description;
    vaccinated;
    deadline_vaccination;
    created_at;
    constructor(name, type, description, vaccinated, deadline_vaccination, created_at) {
        this.id = uuidv4();
        this.name = name;
        this.type = type;
        this.description = description;
        this.vaccinated = vaccinated;
        this.deadline_vaccination = deadline_vaccination;
        this.created_at = created_at;
    }
    setpet(name, type, description, deadline_vaccination) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.deadline_vaccination = deadline_vaccination;
    }
}
