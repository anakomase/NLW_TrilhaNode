import { getCustomRepository, Repository } from "typeorm"
import {ConnectionRepository} from "../repositories/ConnectionsRepository"
import {Connection} from "../entities/Connection"
interface IConnectionCreate{
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}

class ConnectionsService{
    private connectionsRepository: Repository <Connection>  

    constructor(){
        this.connectionsRepository = getCustomRepository(ConnectionRepository);

    }

    async create({ socket_id, user_id, admin_id,id}: IConnectionCreate ){
        const connection = this.connectionsRepository.create({
           socket_id,
           user_id,
           admin_id,
           id
        })
        await this.connectionsRepository.save(connection)
        return connection;
    }
    async findByUserId(user_id :string){
        const connection = await this.connectionsRepository.findOne({
            user_id
        });
        return connection;
    }
        
}
export{ConnectionsService}