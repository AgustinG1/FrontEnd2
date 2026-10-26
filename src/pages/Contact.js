import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">CONTÁCTANOS</p>
        <h1>Estamos cerca de ti.</h1>
        <p className="intro-text">
          Este espacio reúne los datos de contacto y los horarios del supermercado La Huerta.
        </p>
      </section>

      <section className="page contact-notice" aria-label="Aviso sobre datos ficticios">
        <strong>Datos de ejemplo</strong>
        <p>La dirección, el teléfono, el correo y los horarios son ficticios.
          No corresponden a un local real ni a un servicio de atención disponible.</p>
      </section>

      <section className="contact-grid" aria-label="Información de contacto">
        <article className="page contact-card">
          <p className="eyebrow">UBICACIÓN</p>
          <h2>Nuestro local</h2>
          <address>Calle de Ejemplo 123<br />Santiago, Chile</address>
        </article>
        <article className="page contact-card">
          <p className="eyebrow">CONTACTO</p>
          <h2>Teléfono y correo</h2>
          <dl className="contact-details">
            <dt>Teléfono de ejemplo</dt>
            <dd>+56 9 0000 0000</dd>
            <dt>Correo de ejemplo</dt>
            <dd>contacto@lahuerta.example</dd>
          </dl>
        </article>
        <article className="page contact-card">
          <p className="eyebrow">HORARIOS</p>
          <h2>Atención del local</h2>
          <dl className="contact-details">
            <dt>Lunes a sábado</dt>
            <dd>09:00 a 20:00 horas</dd>
            <dt>Domingo</dt>
            <dd>09:00 a 14:00 horas</dd>
          </dl>
        </article>
      </section>

      <section className="help-section">
        <div>
          <h2>Consulta los productos</h2>
          <p>Vuelve al inicio para revisar el inventario y la disponibilidad de ejemplo.</p>
        </div>
        <Link className="button" to="/">Ir al inventario</Link>
      </section>
    </>
  );
}

export default Contact;
