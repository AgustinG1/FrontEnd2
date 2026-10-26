import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">QUIÉNES SOMOS</p>
        <h1>Un supermercado cercano.</h1>
        <p className="intro-text">Alimentos frescos, panadería y despensa para tu hogar.</p>
      </section>

      <section className="page about-section">
        <div className="about-heading">
          <p className="eyebrow">NOSOTROS</p>
          <h2>La Huerta</h2>
        </div>
        <div>
          <p>Somos un supermercado con los mejores precios y productos para tu hogar.</p>
          <p>Variedad y calidad para tu compra diaria.</p>
        </div>
      </section>

      <section className="information-grid" aria-label="Misión y visión">
        <article className="page information-card">
          <h2>Nuestra misión</h2>
          <p>Acercar productos de calidad a tu hogar.</p>
        </article>
        <article className="page information-card">
          <h2>Nuestra visión</h2>
          <p>Ser tu supermercado de confianza.</p>
        </article>
      </section>

      <section className="page values-section">
        <p className="eyebrow">NUESTROS VALORES</p>
        <h2>Lo que nos representa</h2>
        <ul className="values-list">
          <li><strong>Cercanía.</strong> Atención amable.</li>
          <li><strong>Claridad.</strong> Información y precios claros.</li>
          <li><strong>Responsabilidad.</strong> Productos y existencias en orden.</li>
        </ul>
        <Link className="text-link" to="/contacto">Contáctanos →</Link>
      </section>
    </>
  );
}

export default About;
