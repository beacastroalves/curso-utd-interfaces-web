import './Card.css'
import image from '../../assets/images/beautiful-landscape.jpg'

function Card() {

  return (
    <>
      <div className="card">
        <header>
          <h2>Titulo do Card</h2>
        </header>
        <img src={image} alt="" />
        <section>
          <p className="subtitulo">
            subtitulo
          </p>
          <p className="info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum veniam consequuntur et molestias, iste laboriosam similique tenetur autem aperiam tempora, repudiandae saepe! Tempora quaerat in molestiae non vero ipsa magni?
          </p>
        </section>
      </div>
    </>
  )
};

export default Card;
