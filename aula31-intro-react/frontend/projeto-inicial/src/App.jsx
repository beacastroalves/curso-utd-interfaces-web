import './App.css';
import Card from './components/Card/Card.jsx';
import card1 from './assets/images/card1.jpg'
import card2 from './assets/images/card2.jpg'
import card3 from './assets/images/card3.jpg'
import card4 from './assets/images/card4.jpg'
import card5 from './assets/images/card5.jpg'
import card6 from './assets/images/card6.jpg'
import Navbar from './components/Navbar/navbar.jsx';
import Painel from './components/Painel/Painel.jsx';

function App() {

  const palestrantes = [
    {'nome': 'Ana Maria', 'especialidade': 'Engenharia de Software'},
    {'nome': 'Jose Amaro', 'especialidade': 'QA'},
    {'nome': 'Betina Almeida', 'especialidade': 'Frontend'},
    {'nome': 'Rui Murcio', 'especialidade': 'Backend'},
    {'nome': 'Marina Bezel', 'especialidade': 'UX/UI'},
    {'nome': 'Damario Souza', 'especialidade': 'DevOps'},
  ]

  return (
    <>
      <Navbar />
      <Painel>
        <Card imagem={card1} user={palestrantes[0]} />
        <Card imagem={card2} user={palestrantes[1]} />
        <Card imagem={card4} user={palestrantes[2]} />
        <Card imagem={card3} user={palestrantes[3]} />
        <Card imagem={card5} user={palestrantes[4]} />
        <Card imagem={card6} user={palestrantes[5]} />
      </Painel>
    </>
  )
};

export default App
