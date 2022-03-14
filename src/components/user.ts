import { Exclude} from 'class-transformer';

export class Users {
    id?: number;
    name?:string;
    status?: string;
    type?: string;

    constructor(userResponse: any){
        this.id = userResponse?.id;
        this.name = userResponse?.name;
        this.status = userResponse?.status;
        this.type = userResponse?.type;
    }

    
    getName(){
        return `userId is ${this.id} and name is ${this.name}`
    }
}