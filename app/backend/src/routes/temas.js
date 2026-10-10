import {Router} from "express";
import {listarTemasService} from "../services/temas.js";

const rotas = Router();

// HTTP GET http://localhost:3001/api/temas/
rotas.get("/", async function(req, res){
    const resposta = await listarTemasService();
    res.json(resposta);
});

export default rotas;
