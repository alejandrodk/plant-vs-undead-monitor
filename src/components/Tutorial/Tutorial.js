import { Container, Toggle, Image } from "./TutorialStyle";

function Tutorial({ setShowTutorial }) {
  return (
    <Container>
      <Toggle onClick={() => setShowTutorial(false)}>X</Toggle>
      <h3>1- ¿Qué es el token?</h3>
      <p>
        Cuando ingresamos al marketplace de PVU (Plant vs Undead) y nos logeamos
        con nuestra cuenta, se nos asigna un código único con el que la
        plataforma nos identifica, de esta forma, evitamos tener que logearnos
        nuevamente para cada acción que queremos realizar.
        <br />
        <br />
        Este código asignado se conoce como "token" o "JWT" de las siglas (JSON
        Web Token).
      </p>
      <h3>2- ¿Para qué pedimos tu token?</h3>
      <p>
        En PVU Monitor solicitamos tu token de acceso para poder conectarnos a
        través de la API pública de Plant vs Undead y así poder obtener la
        información mostrada en esta página.
      </p>
      <h3>3- ¿Qué puede hacer PVU Monitor con mi token?</h3>
      <p>
        Con tu token de acceso lo único que podemos realizar es consultar
        información pública de tu usuario. PVU Monitor{" "}
        <b>NO PUEDE REALIZAR NINGÚN CAMBIO O ACCIÓN EN TU CUENTA.</b>
        Toda operación realizada dentro del marketplace debe ser aprobada desde
        Metamask.
      </p>
      <h3>4- ¿Cómo obtener mi token?</h3>
      <p>
        Una vez te hayas logeado en el marketplace, haz click derecho en
        cualquier lugar de la pantalla, seguido de eso haz click en{" "}
        <b>inspeccionar / inspect</b> según el lenguaje de tu navegador.
      </p>
      <Image src="/token-1.jpg" />
      <p>
        Al hacer click en inspeccionar se abrirá una nueva ventana conocida como
        "dev tools", debemos entrar en la pestaña llamada{" "}
        <b>"Aplicación o Application"</b>, si no aparece entre las opciones
        mostradas, debemos tocar la flecha que está en último lugar como muestra
        el ejemplo.
      </p>
      <Image src="/token-2.jpg" />
      <br />
      <p>
        Dentro de la nueva ventana, aparecerá un menú al lado izquierdo de la
        pantalla, debemos tocar la flecha que aparece al lado de la opción{" "}
        <b>Local Storage</b> para desplegar el contenido, en ese momento debemos
        ver una opción llamada <b>"http://marketplace.plantvsundead.com"</b>,
        hacemos click sobre el elemento y en el panel derecho deberá aparecer un
        elemento llamado <b>token</b> en la columna <b>key</b>, y el contenido
        en la columna <b>value</b>. debemos copiar el código que aparece en la
        columna <b>value</b>.
      </p>
      <Image src="/token-3.jpg" />
      <br />
      <p>
        Pegamos el token copiado en la barra principal de PVU Monitor ¡Y LISTO!
        Ya puedes utilizar PVU Monitor. 👏👏👏
      </p>
      <Image src="/token-4.jpg" />
      <p>
        * Es posible que después de un día o dos el token caduque, ya que cada
        token tiene fecha de vencimiento. En ese caso es necesario repetir
        nuevamente el proceso.
      </p>
    </Container>
  );
}

export default Tutorial;
