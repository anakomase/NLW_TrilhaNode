import { getCustomRepository, Repository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"
import {User} from "../entities/User"

class UsersService{
    
    private usersRepository : Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }
    async findByEmail(email:string){
        
    }
    async create(email: string){
        //verificar se o usuario existe
        const userExists = await this.usersRepository.findOne({
            email,
        });
         //se existir, retornar user
        if(userExists){
            return userExists;
        }
        
        // se nao existir, salvar no DB
       const user = this.usersRepository.create({
           email
       });

       await this.usersRepository.save(user);
       return user;
    }
   
}  

export{UsersService}