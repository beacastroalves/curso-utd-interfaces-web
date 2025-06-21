const codigoRef = document.getElementById('codigo');
const nomeRef = document.getElementById('nome');
const precoRef = document.getElementById('preco');
const tipoRef = document.getElementById('tipo');

const produtos = [
  { 'codigo':'1111', 'nome':'arroz', 'preco':'4.1', 'tipo':'cereal' },
  { 'codigo':'1112', 'nome':'feijao', 'preco':'5.0', 'tipo':'leguminosa' },
  { 'codigo':'1113', 'nome':'abacaxi', 'preco':'3.8', 'tipo':'fruta' },
  { 'codigo':'1114', 'nome':'abacate', 'preco':'7.0', 'tipo':'fruta' },
  { 'codigo':'1115', 'nome':'banana', 'preco':'3.6', 'tipo':'fruta' },
  { 'codigo':'1116', 'nome':'aveia', 'preco':'6.0', 'tipo':'cereal' },
  { 'codigo':'1117', 'nome':'milho', 'preco':'3.0', 'tipo':'cereal' },
  { 'codigo':'1118', 'nome':'castanha', 'preco':'8.5', 'tipo':'semente' },
  { 'codigo':'1119', 'nome':'grao-de-bico', 'preco':'9.3', 'tipo':'leguminosas' },
  { 'codigo':'1120', 'nome':'creme dental', 'preco':'5.3', 'tipo':'higiene' },
  { 'codigo':'1121', 'nome':'sabonete', 'preco':'4.0', 'tipo':'higiene' },
  { 'codigo':'1122', 'nome':'shampoo', 'preco':'14.2', 'tipo':'higiene' },
  { 'codigo':'1123', 'nome':'desodorante', 'preco':'6.1', 'tipo':'higiene' },
];


function exibirProdutos(produtos) {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  produtos.forEach(obj => {
    const tr = document.createElement('tr');
    const codigo = document.createElement('td');
    const nome = document.createElement('td');
    const preco = document.createElement('td');
    const tipo = document.createElement('td');

    codigo.innerText = obj.codigo;
    nome.innerText = obj.nome;
    preco.innerText = obj.preco;
    tipo.innerText = obj.tipo;

    tr.appendChild(codigo);
    tr.appendChild(nome);
    tr.appendChild(preco);
    tr.appendChild(tipo);

    lista.appendChild(tr);
  });
};

function limpaFormulario() {
  codigoRef.value = '';
  nomeRef.value = '';
  precoRef.value = '';
  tipoRef.value = '';
}

document.getElementById('cadastro').addEventListener('click', () => {

  if (produtos.find(obj => obj.codigo === codigoRef.value)) {
    window.alert('Código já cadastrado!');
    codigoRef.value = '';
    return
  }

  produtos.push({
    codigo: codigoRef.value,
    nome: nomeRef.value,
    preco: precoRef.value,
    tipo: tipoRef.value
  });

  limpaFormulario();
  exibirProdutos(produtos);
});

exibirProdutos(produtos);