const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
// rotas
app.use(require('./routes'));

app.listen(3001, () => console.log('servidor iniciado na porta 3001'));