import {Router} from "express";
import {buscarQuestaoService} from "../services/questoes.js";

const rotas = Router();

// HTTP GET http://localhost:3001/api/questoes/1
rotas.get("/:id", async function(req, res){
    const id = req.params.id;
    const resposta = await buscarQuestaoService(id);
    res.json(resposta);
});

export default rotas;
