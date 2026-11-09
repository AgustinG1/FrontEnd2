import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formulario, setFormulario] = useState({ nombre: '', correo: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [validado, setValidado] = useState(false);

  function validar() {
    const nuevosErrores = {};

    if (formulario.nombre.trim().length < 2) {
      nuevosErrores.nombre = 'Ingresa al menos 2 caracteres.';
    } else if (formulario.nombre.trim().length > 80) {
      nuevosErrores.nombre = 'Máximo 80 caracteres.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo.trim())) {
      nuevosErrores.correo = 'Ingresa un correo válido.';
    } else if (formulario.correo.trim().length > 120) {
      nuevosErrores.correo = 'Máximo 120 caracteres.';
    }

    if (formulario.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'Escribe al menos 10 caracteres.';
    } else if (formulario.mensaje.trim().length > 1000) {
      nuevosErrores.mensaje = 'Máximo 1.000 caracteres.';
    }

    return nuevosErrores;
  }

  function actualizar(evento) {
    const { name, value } = evento.target;
    setFormulario({ ...formulario, [name]: value });
    setErrores({ ...errores, [name]: undefined });
    setValidado(false);
  }

  function revisarConsulta(evento) {
    evento.preventDefault();
    const nuevosErrores = validar();
    setErrores(nuevosErrores);
    setValidado(false);

    const primerCampoConError = Object.keys(nuevosErrores)[0];
    if (primerCampoConError) {
      evento.currentTarget.elements.namedItem(primerCampoConError).focus();
      return;
    }

    // Demostración local: no se envían ni se guardan los datos.
    setValidado(true);
  }

  function limpiar() {
    setFormulario({ nombre: '', correo: '', mensaje: '' });
    setErrores({});
    setValidado(false);
  }
  return (
    <>
      <section className="intro-section">
        <p className="eyebrow">CONTÁCTANOS</p>
        <h1>Estamos cerca de ti.</h1>
        <p className="intro-text">
          Consulta nuestros horarios o escríbenos.
        </p>
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
            <dt>Teléfono</dt>
            <dd>+56 9 0000 0000</dd>
            <dt>Correo</dt>
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

      <section className="page contact-form-panel" aria-labelledby="formulario-title">
        <p className="eyebrow">TU CONSULTA</p>
        <h2 id="formulario-title">Escríbenos</h2>
        <form className="contact-form" onSubmit={revisarConsulta} onReset={limpiar} noValidate>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="contacto-nombre">Nombre *</label>
              <input
                id="contacto-nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                value={formulario.nombre}
                onChange={actualizar}
                minLength={2}
                maxLength={80}
                required
                aria-invalid={Boolean(errores.nombre)}
                aria-describedby={errores.nombre ? 'error-nombre' : undefined}
              />
              {errores.nombre && <p className="form-error" id="error-nombre" role="alert">{errores.nombre}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="contacto-correo">Correo electrónico *</label>
              <input
                id="contacto-correo"
                name="correo"
                type="email"
                autoComplete="email"
                value={formulario.correo}
                onChange={actualizar}
                maxLength={120}
                required
                aria-invalid={Boolean(errores.correo)}
                aria-describedby={errores.correo ? 'error-correo' : undefined}
              />
              {errores.correo && <p className="form-error" id="error-correo" role="alert">{errores.correo}</p>}
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contacto-mensaje">Mensaje *</label>
            <textarea
              id="contacto-mensaje"
              name="mensaje"
              rows={5}
              value={formulario.mensaje}
              onChange={actualizar}
              minLength={10}
              maxLength={1000}
              required
              aria-invalid={Boolean(errores.mensaje)}
              aria-describedby={errores.mensaje ? 'mensaje-ayuda error-mensaje' : 'mensaje-ayuda'}
            />
            <p id="mensaje-ayuda" className="form-hint">De 10 a 1.000 caracteres.</p>
            {errores.mensaje && <p className="form-error" id="error-mensaje" role="alert">{errores.mensaje}</p>}
          </div>
          <div className="form-actions">
            <button className="button" type="submit">Enviar</button>
            <button className="button button-clear" type="reset">Limpiar</button>
          </div>
          {validado && (
            <div className="form-success" role="status">
              <strong>¡Gracias por escribirnos!</strong>
              <p>Recibimos tu mensaje y te responderemos pronto.</p>
              <small>Envío de demostración.</small>
            </div>
          )}
        </form>
      </section>
      <section className="help-section">
        <div>
          <h2>Nuestro inventario</h2>
          <p>Revisa nuestros productos y existencias.</p>
        </div>
        <Link className="button" to="/">Ir al inventario</Link>
      </section>
    </>
  );
}

export default Contact;
