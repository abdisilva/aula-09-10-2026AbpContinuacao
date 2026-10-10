import pool from "../config/database.js";
import bcrypt from "bcryptjs";

export async function cadastrarCandidatoService(cpf, nome, email, senha){
    const senhaHash = await bcrypt.hash(senha,12);
    const {rows} = await pool.query(`
        INSERT INTO candidatos (cpf, nome, email, senha_hash)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (cpf) DO NOTHING
        RETURNING id, cpf, nome, email, criado_em
        `, [cpf, nome, email, senhaHash]);
    return rows[0];
}
