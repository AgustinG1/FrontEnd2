import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">QUIÉNES SOMOS</p>
        <h1>Un supermercado cercano.</h1>
        <p className="intro-text">
          La Huerta es un supermercado de barrio que reúne productos para la compra cotidiana:
          frutas, verduras, lácteos, panadería y artículos de despensa.
        </p>
      </section>

      <section className="page about-section">
        <div className="about-heading">
          <p className="eyebrow">NUESTRA PRESENTACIÓN</p>
          <h2>La Huerta</h2>
        </div>
        <div>
          <p>
            Buscamos que las personas encuentren lo necesario para su hogar en un mismo lugar,
            con información clara sobre los productos y una atención amable.
          </p>
          <p>
            La organización de nuestro inventario permite conocer las existencias y mantener
            a la vista la disponibilidad de cada producto. Este sitio reúne esa información
            junto con la presentación y los datos de contacto del supermercado.
          </p>
        </div>
      </section>

      <section className="information-grid" aria-label="Misión y visión">
        <article className="page information-card">
          <span className="card-number" aria-hidden="true">01</span>
          <h2>Nuestra misión</h2>
          <p>Ofrecer productos para las necesidades diarias del hogar, con información clara,
            cercanía y cuidado en la atención de cada persona.</p>
        </article>
        <article className="page information-card">
          <span className="card-number" aria-hidden="true">02</span>
          <h2>Nuestra visión</h2>
          <p>Ser un supermercado de confianza para el barrio, reconocido por la organización
            de sus productos y por una experiencia de compra sencilla.</p>
        </article>
      </section>

      <section className="page values-section">
        <p className="eyebrow">NUESTROS VALORES</p>
        <h2>Lo que nos representa</h2>
        <ul className="values-list">
          <li><strong>Cercanía.</strong> Escuchar y atender de forma respetuosa.</li>
          <li><strong>Claridad.</strong> Presentar precios e información comprensibles.</li>
          <li><strong>Responsabilidad.</strong> Mantener un control ordenado de las existencias.</li>
        </ul>
        <Link className="text-link" to="/contacto">Consulta nuestros datos de contacto →</Link>
      </section>
      <p className="academic-note">La Huerta y su descripción son ficticias y se utilizan exclusivamente para este ejercicio académico.</p>
    </>
  );
}

export default About;
