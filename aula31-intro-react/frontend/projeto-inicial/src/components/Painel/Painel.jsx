import './Painel.css';

function Painel({children}) {
  return (
    <>
      <h2 id="titulo-painel">Palestrantes do Dia</h2>
      <section className="painel">
        {children}
      </section>
    </>
  )
};

export default Painel;