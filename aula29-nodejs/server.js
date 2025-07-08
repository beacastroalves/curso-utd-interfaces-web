import express from 'express';

const PORT = 8080;
const app = express();


// Query params
/*

app.get('/query', (req, res) => {

  const sobremesa = req.query.sobremesa || 'Não foi encontrada nenhuma sobremesa';
  const suco = req.query.suco || 'Não foi encontrado nenhum suco';

  res.send(`<h1>Aprendendo a usar Query Parameters</h1><p>${sobremesa}</p><p>${suco}</p>`);

});
*/


// Route Params
app.get('/route/:id', (req, res) => {

  const { id } = req.params;

  res.send(`<h1>Aprendendo a usar Route Parameters</h1><p>O ID do usuário é: ${id}</p>`);

});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
