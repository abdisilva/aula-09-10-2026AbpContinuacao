BEGIN;

CREATE TABLE candidatos (
  id SERIAL PRIMARY KEY,
  cpf CHAR(11) NOT NULL UNIQUE CHECK (cpf ~ '^[0-9]{11}$'),
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  senha_hash TEXT NOT NULL,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT now(),
  certificado_hash VARCHAR(96)
);

CREATE TABLE temas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE,
  ordem INT NOT NULL
);

CREATE TABLE questoes (
  id SERIAL PRIMARY KEY,
  tema_id INT NOT NULL REFERENCES temas(id),
  ordem INT NOT NULL CHECK (ordem BETWEEN 1 AND 4),
  enunciado TEXT NOT NULL,
  imagem_url VARCHAR(200) NOT NULL,
  UNIQUE (tema_id, ordem)
);

CREATE TABLE alternativas (
  id SERIAL PRIMARY KEY,
  questao_id INT NOT NULL REFERENCES questoes(id),
  letra CHAR(1) NOT NULL CHECK (letra IN ('A','B','C','D')),
  texto TEXT NOT NULL,
  correta BOOLEAN NOT NULL DEFAULT false,
  UNIQUE (questao_id, letra)
);

COMMIT;