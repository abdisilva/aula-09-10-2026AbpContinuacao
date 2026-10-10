import {Router} from "express";
import {cadastrarCandidatoService} from "../services/candidatos.js";

const rotas = Router();

/*
curl -X POST http://localhost:3001/api/candidatos \
  -H "Content-Type: application/json" \
  -d '{
    "cpf": "12345678903",
    "nome": "Maria Couto",
    "email": "maria@example.com",
    "senha": "123456"
  }'
*/
rotas.post("/", async function(req, res){
    const {cpf, nome, email, senha} = req.body;
    const resposta = await cadastrarCandidatoService(cpf, nome, email, senha);
    res.json(resposta);
});

export default rotas;