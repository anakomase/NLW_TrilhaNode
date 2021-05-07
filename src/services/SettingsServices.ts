import{ getCustomRepository, Repository } from "typeorm";
import{SettingsRepository} from "../repositories/SettingsRepository";
import {Setting} from "../entities/Setting"

interface ISettingsCreate{
    chat: boolean;
    username: string;
}

class SettingsServices{
    private settingsRepository: Repository<Setting>

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }


    async create({chat, username}: ISettingsCreate){
        const settingsRepository = getCustomRepository(SettingsRepository);
        //vai buscar dentro da nossa tabela somente 1 registro
        const userAlreadyExists = await this.settingsRepository.findOne({username});
         
        if(userAlreadyExists){
            throw new Error("user already exists!")
            
        }

        const settings = this.settingsRepository.create({
            chat,
            username,
        })
        await this.settingsRepository.save(settings);
        return settings;

    }

}

export{SettingsServices}