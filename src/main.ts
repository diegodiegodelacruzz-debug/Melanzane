import './style.css'

const whatsapp = '5491140874066'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="hero" id="inicio">
    <nav class="nav">
      <a class="brand" href="#inicio">MELANZANE</a>

      <a
        class="nav-link"
        href="https://wa.me/${whatsapp}"
        target="_blank"
        rel="noopener"
      >
        Pedidos · WhatsApp
      </a>
    </nav>

    <div class="hero-content">
      <div class="hero-copy">
        <div class="italian-line">
          <span></span>
          <p>Una ricetta di famiglia, dal cuore del Sud Italia.</p>
          <span></span>
        </div>

        <span class="eyebrow">BERENJENAS AL ESCABECHE CASERAS</span>

        <h1>
          El sabor de una<br>
          <em>tradición familiar.</em>
        </h1>

        <p class="hero-text">
          Una receta traída desde el sur de Italia y preparada de manera
          casera, conservando el espíritu de aquellas comidas que nacen
          en familia y se comparten alrededor de una mesa.
        </p>

        <div class="hero-actions">
          <a
            class="btn btn-primary"
            href="https://wa.me/${whatsapp}"
            target="_blank"
            rel="noopener"
          >
            Hacer un pedido
          </a>

          <a class="btn btn-secondary" href="#historia">
            Nuestra historia
          </a>
        </div>
      </div>

      <div class="hero-image">
        <div class="image-frame">
          <div class="flag-detail">
            <i></i><i></i><i></i>
          </div>

          <img
            src="/images/foto-01.jpg"
            alt="Berenjenas al escabeche caseras Melanzane"
          >
        </div>
      </div>
    </div>
  </header>

  <main>

    <section class="story-section" id="historia">
      <div class="story-content">
        <div class="section-label">01 · LA STORIA</div>

        <h2>
          Una receta que<br>
          <em>vino de lejos.</em>
        </h2>

        <p>
          Hay recetas que nacen en una cocina y terminan formando parte
          de la historia de una familia. Se preparan una y otra vez,
          se comparten en reuniones, se recuerdan con cariño y, con el
          paso del tiempo, se convierten en algo mucho más importante
          que una simple preparación.
        </p>

        <p>
          Melanzane nace de una de esas recetas. Una preparación de
          berenjenas al escabeche traída desde el sur de Italia, donde
          la cocina familiar siempre estuvo ligada al encuentro, a la
          paciencia y al placer de compartir lo que se hace con las
          propias manos.
        </p>

        <p>
          La receta llegó hasta nuestra mesa y conservó algo esencial:
          su espíritu casero. Ese sabor que no busca parecer industrial,
          sino mantener la personalidad de una preparación hecha con
          dedicación y cuidado.
        </p>
      </div>

      <div class="story-quote">
        <p>
          “Ci sono ricette che non appartengono soltanto alla cucina,
          ma alla memoria di una famiglia.”
        </p>

        <div class="quote-mark">“</div>
      </div>
    </section>

    <section class="tradition-section">
      <div class="tradition-inner">
        <div class="section-label">02 · UNA TRADICIÓN QUE CONTINÚA</div>

        <div class="tradition-grid">
          <div>
            <h2>
              Del sur de Italia<br>
              <em>a nuestra mesa.</em>
            </h2>
          </div>

          <div class="tradition-text">
            <p>
              Con el tiempo, las recetas familiares atraviesan fronteras.
              Cambian los lugares, cambian las generaciones y aparecen
              nuevas mesas, pero hay sabores que permanecen.
            </p>

            <p>
              Las berenjenas al escabeche forman parte de esa tradición:
              una preparación sencilla, intensa y llena de carácter,
              pensada para acompañar una comida, una picada o simplemente
              ese momento en el que uno quiere disfrutar de algo rico
              y hecho en casa.
            </p>

            <p>
              En Melanzane queremos mantener vivo ese espíritu. No se
              trata solamente de preparar berenjenas; se trata de
              conservar una pequeña parte de una historia que comenzó
              lejos y que hoy continúa acá.
            </p>
          </div>
        </div>

        <div class="italian-quote">
          <p>
            Il gusto della tradizione italiana.
          </p>
        </div>
      </div>
    </section>

    <section class="product-section">
      <div class="product-image">
        <img
          src="/images/foto-02.jpg"
          alt="Melanzane - berenjenas al escabeche artesanales"
        >
      </div>

      <div class="product-content">
        <div class="section-label">03 · EL ESPÍRITU DE MELANZANE</div>

        <h2>
          Hechas en casa.<br>
          <em>Hechas con historia.</em>
        </h2>

        <p>
          Lo artesanal está en los detalles. En dedicar tiempo, cuidar
          cada preparación y respetar una receta que llegó hasta nosotros
          desde otra tierra.
        </p>

        <p>
          Queremos que Melanzane conserve justamente eso: el carácter de
          una elaboración casera, la tradición de una receta familiar y
          el placer de llevar a la mesa un producto hecho con dedicación.
        </p>

        <div class="small-italian">
          <span></span>
          <p>
            Fatto in casa.<br>
            Con tradizione. Con passione.
          </p>
        </div>
      </div>
    </section>

    <section class="philosophy-section">
      <div class="philosophy-inner">
        <div class="section-label">04 · LA NOSTRA FILOSOFIA</div>

        <h2>
          Los sabores también<br>
          <em>cuentan historias.</em>
        </h2>

        <p>
          Una buena receta puede llevarnos a otro lugar. Puede recordar
          una cocina, una familia, una conversación o una mesa compartida.
          Por eso creemos que la comida casera tiene algo que va más
          allá del sabor.
        </p>

        <p>
          Melanzane representa esa conexión entre una tradición que viene
          del sur de Italia y nuestra vida cotidiana en Argentina.
        </p>

        <div class="long-italian">
          <p>
            Preparare in casa significa dedicare tempo alle piccole cose,
            scegliere con cura e lasciare che ogni ingrediente racconti
            la propria storia.
          </p>
        </div>
      </div>
    </section>

    <section class="order-section">
      <div class="order-inner">
        <div class="section-label">05 · PEDIDOS</div>

        <h2>
          Llevá un poco de<br>
          <em>Melanzane</em> a tu mesa.
        </h2>

        <p>
          Para consultar por nuestros productos y realizar un pedido,
          escribinos directamente por WhatsApp.
        </p>

        <a
          class="btn btn-light"
          href="https://wa.me/${whatsapp}"
          target="_blank"
          rel="noopener"
        >
          Pedir por WhatsApp
        </a>

        <div class="address">
          <span>Encontranos en</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Almirante+Brown+549+CABA"
            target="_blank"
            rel="noopener"
          >
            Almirante Brown 549 · CABA
          </a>
        </div>
      </div>
    </section>

  </main>

  <footer class="footer">
    <div class="footer-brand">
      <strong>MELANZANE</strong>
      <span>BERENJENAS AL ESCABECHE CASERAS</span>
    </div>

    <div class="footer-italian">
      <p>Dal Sud Italia all'Argentina.</p>
    </div>

    <div class="footer-contact">
      <a
        href="https://wa.me/${whatsapp}"
        target="_blank"
        rel="noopener"
      >
        +54 9 11 4087-4066
      </a>
    </div>
  </footer>
`
