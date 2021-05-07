//importando express 
import express from "express";
import {routes} from "../routes";
//importa a conexão com banco de dados
import "./database";
import {createServer} from "http"; 
import {Server, Socket} from "socket.io"
import path from "path";
// variavel constante app que recebe a biblioteca express como valor//
const app = express();

app.use(express.static(path.join(__dirname,"..","public")));
app.set("views", path.join(__dirname,"..","public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html")

app.get("/pages/client", (request, response)=>{
    return response.render("html/client.html");
})

const http = createServer(app); // criando protocolo http
const io = new Server(http) // criando protocolo web Socket

io.on("connection", (socket: Socket) =>{
    console.log(" se conectou", socket.id);
})

app.use(express.json());

app.use(routes);

export{http,io}