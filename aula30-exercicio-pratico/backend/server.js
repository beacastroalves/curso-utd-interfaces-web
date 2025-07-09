import express from 'express';

const alunos =
[
  {"id":1,"nome":"vitor"}, {"id":2,"nome":"raquel"}, {"id":3,"nome":"ana"},
  {"id":4,"nome":"laura"}, {"id":5,"nome":"patricia"}, {"id":6,"nome":"lucas"},
  {"id":7,"nome":"adelina"}
];

const PORT = 8080;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Pagina inicial');
});

app.get('/alunos', (req, res) => {
  res.status(200).json(alunos);
});

app.get('/alunos/:id', (req, res) => {
  const { id } = req.params;

  const aluno = alunos.filter(aluno => aluno.id === Number.parseInt(id));

  res.status(200).json(aluno);
});

app.post('/alunos', (req, res) => {
  const aluno = req.body;

  alunos.push(aluno);

  res.status(201).json(alunos);
});

app.delete('/alunos/:id', (req, res) => {
  const { id } = req.params;

  const alunoRes = alunos.filter(aluno => aluno.id === Number.parseInt(id));

  if (alunoRes.length === 0) {
    res.status(404).send('Not Found | Aluno não existe');
  } else {
    const aluno = alunoRes[0];
    const indice = alunos.indexOf(aluno);
    alunos.splice(indice,1);
    res.status(204).send();
  }
});

app.put('/alunos/:id', (req, res) => {

  const { id } = req.params;

  const aluno = req.body;

  const alunoRes = alunos.filter(aluno => aluno.id === Number.parseInt(id));

  if (alunoRes.length === 0) {
    res.status(404).send('Not Found | Aluno não existe');
  } else {
    const al = alunoRes[0];
    const indice = alunos.indexOf(al);
    alunos[indice].nome = aluno.nome;
    res.status(200).json(alunos[indice]);
  }
});

app.listen(PORT);