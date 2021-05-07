import {  Router }from "express"; 
import { MessagesController } from "./src/controllers/MessagesController";
import { SettingsController } from "./src/controllers/SettingsController";
import { UsersController } from "./src/controllers/UsersControllers";


const routes = Router();



/**
 * Tipos de parametros
 * 1 Routes Params > parametros de rotas > http://localhost:3333/settings/1
 * 2 Query params > Filtros e buscas > http://localhost:3333/settings/1?search=algumacoisa&
 * 3 body params > { passamos objetos em formatos Json
 * }
 */
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();



routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post ("/messages", messagesController.create);
routes.get ("/messages/:id", messagesController.showByUser);

export{routes};