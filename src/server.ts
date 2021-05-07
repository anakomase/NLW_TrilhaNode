
import "./websocket/client"
import {http} from "./http"


//app. Listen = escuta a porta 3333 e se der certo printar se estar rodando 

http.listen(3333,() => console.log("servidor rodando na porta 3333"));
//"startar" servidor npm run dev

