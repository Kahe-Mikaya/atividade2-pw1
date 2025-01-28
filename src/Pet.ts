import {validate as validateUuid, v4 as uuidv4} from 'uuid'


export class Pet{
    id: string; // precisa ser um uuid
	name: string;
	type: string;
	description:  string;
	vaccinated:  boolean;
	deadline_vaccination: Date;
	created_at: Date

    constructor( name:string,type:string,description:string,vaccinated:boolean,deadline_vaccination,created_at){
        this.id = uuidv4()
        this.name = name;
        this.type = type;
        this.description = description;
        this.vaccinated = vaccinated;
        this.deadline_vaccination = deadline_vaccination;
        this.created_at = created_at;
    }
    setpet(name:string,type:string,description:string,deadline_vaccination){
        this.name = name;
        this.type = type;
        this.description = description;
        this.deadline_vaccination = deadline_vaccination;

    }
}