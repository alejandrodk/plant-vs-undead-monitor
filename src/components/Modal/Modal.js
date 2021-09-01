import { useTranslation } from "react-i18next";
import { Container, Toggle, Image } from "./ModalStyle";

function Modal({ setShow }) {
  const { t } = useTranslation();
  return (
    <Container>
      <Toggle onClick={() => setShow(false)}>X</Toggle>
      <h2>CORS</h2>
      <p>
        CORS son las siglas de Cross-Origin Resource Sharing, una medida de
        seguridad implementada por los sitios web para que su información pueda
        ser sólo consultada por sus aplicaciones. ¿En qué nos afecta? al
        implementar una política de CORS, PVU nos restringe a poder consultar
        los datos mostrados en esta página.
        <br />
        <br />
        ¿Cómo se puede solucionar? Hay muchas extensiones disponibles en el
        marketplace de Google Chrome y Firefox que nos ayudan a evitar este
        bloqueo 😎, en este ejemplo yo te voy a mostrar la que uso, pero
        cualquiera de las opciones sirve.
      </p>
      <h2>1- Ingresar a la pestaña de extensiones</h2>
      Pueden evitar los siguientes pasos haciendo click
      <a
        target="_blank"
        href="https://chrome.google.com/webstore/search/CORS?hl=en-US"
      >
        {"--> aquí <--"}
      </a>
      para ir directo al marketplace de extensiones de google y pasar
      directamente al paso 2
      <p>
        En el lado superior derecho del navegador encontramos nuestras
        extensiones, simplemente debemos hacer click en la opción{" "}
        <b>Manejar extensiones</b>
      </p>
      <Image src="/cors.jpg" />
      <p>
        Nos llevará a una nueva página. En el lado superior derecho hacemos
        click en <b>Extensiones</b>
      </p>
      <Image src="/cors1.jpg" />
      <p>
        En la parte baja de la pantalla, hacemos click en "Open Chrome Web
        Store"
      </p>
      <Image src="/cors2.jpg" />
      <h2>2- Instalar extensión de CORS</h2>
      <p>
        Ya dentro del marketplace de Google o Firefox, nos dirijimos al buscador
        de extensiones y simplemente buscamos <b>CORS</b>
      </p>
      <Image src="/cors3.jpg" />
      <p>
        Como dije anteriormente, pueden utilizar cualquiera, yo personalmente
        utilizo{" "}
        <a
          href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en-US"
          target="_blank"
        >
          Allow CORS
        </a>{" "}
        para este ejemplo. (click en el nombre para ir a la extensión)
      </p>
      <h2>Activando CORS</h2>
      <p>
        Una vez instalada la extensión solo deben ir a su herramienta de
        extensiones nuevamente y hacer click en la que hayan instalado
      </p>
      <Image src="/cors6.jpg" />
      <p>Si instalaron Allow CORS, les aparecerá una ventana como esta</p>
      <Image src="/cors4.jpg" />
      <p>
        Para activarla simplemente deben hacer click en la imagen gris, una vez
        este activada la imagen cambiara de color como pueden ver en el ejemplo
      </p>
      <Image src="/cors5.jpg" />
      <h4>
        Listo!! con eso ya puedes utilizar PVU Monitor sin problemas, te
        recomiendo desactivar la extensión cuando entres a Plant vs Undead para
        evitar errores en su página
      </h4>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

export default Modal;
