import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);

//GET: Listar/buscar informação
//POST: Criar nova informação
//PUT: Atualizar uma informação
//DELETE: Deletar uma informação

//CORPO (Request Body): Dados para a criação ou atualização de um registro
//Route Params: identificar qual recurso eu quero atualizar ou deletar => /users/:id req.params
//Query Params: /page=2&name="joao"