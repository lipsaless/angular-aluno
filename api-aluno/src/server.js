// importando express
const express = require('express');
// importando cors
const cors = require('cors');
// guardando express na variável app
const app = express();

app.use(cors());
app.use(express.json());
// importando rotas
app.use(require('./routes'));

// abrindo servidor na porta 3001
app.listen(3001, () => console.log('servidor iniciado na porta 3001'));