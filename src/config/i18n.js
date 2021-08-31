import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          header: {
            "token-add": "Agrega tu token de acceso",
            "allow-farm": "Puedes farmear 😎🌿",
            "deny-farm": "No puedes farmear 😥",
            "invalid-token": "Agrega un token válido",
          },
          harvest: {
            title: "cosechas disponibles: {{value}}",
          },
          wallet: {
            title: "LE disponibles",
          },
          main: {
            "deny-farm": "No puedes farmear en este momento ❌",
            "page-update":
              "<p>no debes recargar la página, se actualiza automáticamente cada 5 minutos. ⏰</p>",
            "add-token": "Agrega un token válido",
            updated: "actualizado: {{lastDate}} | {{currentDate}} UTC",
            time: "🕕 Hora UTC ",
            "group-me": "Mi grupo:",
            "group-current": "Grupo actual:",
            "group-next": "Siguiente grupo:",
            "group-minutes": "minutos",
            "group-hours": "horas",
          },
          plant: {
            created: "📅 creada",
            finished: "finaliza el: ",
            "need-water": "💧 necesita agua?",
            "has-crow": "🐦asustar cuervo?",
            ready: "LISTO!",
            yes: "si",
            no: "no",
            "profit-dollar": "beneficio aproximado en USD al cosechar",
            "time-to-harvest": "tiempo restante para cosechar",
          },
          plantsContainer: {
            title: "Mi granja 👨‍🌾",
            "title-coords": "Coordenadas 🌐",
          },
          priceConvert: {
            usd: "Precio en dólares",
            bnb: "Precio en BNB",
          },
          profit: {
            title: "Ganancias:",
            "usd-title": "Ganancia aproximada en dólares",
          },
          coords: {
            loading:
              "Cargando coordenadas, esto puede tomar de 2 a 4 minutos (según tu conexión), por favor, no cierres la página...",
            comment:
              "El sistema de coordenadas esta en proceso de pruebas, cualquier error o sugerencia avisar por el canal de telegram. \n t.me/pvumonitor",
            "key-coord": "Coordenadas",
            "key-position": "Posición",
            "key-water": "Riegos actuales",
            "key-crow": "Cuervos",
            "has-crow": "Cuervo!!",
          },
          tutorial: {
            title1: "1- ¿Qué es el token?",
            text1:
              "Cuando ingresamos al marketplace de PVU (Plant vs Undead) y nos logeamoscon nuestra cuenta, se nos asigna un código único con el que laplataforma nos identifica, de esta forma, evitamos tener que logearnosnuevamente para cada acción que queremos realizar.",
            "text1-1":
              'Este código asignado se conoce como "token" o "JWT" de las siglas (JSON Web Token).',
            title2: "2- ¿Para qué pedimos tu token?",
            text2:
              "En PVU Monitor solicitamos tu token de acceso para poder conectarnos a través de la API pública de Plant vs Undead y así poder obtener la información mostrada en esta página.",
            title3: "3- ¿Qué puede hacer PVU Monitor con mi token?",
            text3:
              "Con tu token de acceso lo único que podemos realizar es consultar información pública de tu usuario. PVU Monitor",
            "text3-1":
              " NO PUEDE REALIZAR NINGÚN CAMBIO O ACCIÓN EN TU CUENTA.",
            "text3-2":
              "Toda operación realizada dentro del marketplace debe ser aprobada desde Metamask.",
            title4: "4- ¿Cómo obtener mi token?",
            text4:
              "Una vez te hayas logeado en el marketplace, haz click derecho en cualquier lugar de la pantalla, seguido de eso haz click en inspeccionar / inspect según el lenguaje de tu navegador.",
            text5:
              "Al hacer click en inspeccionar se abrirá una nueva ventana conocida como dev tools, debemos entrar en la pestaña llamada Aplicación o Application, si no aparece entre las opciones mostradas, debemos tocar la flecha que está en último lugar como muestra el ejemplo.",
            text6:
              'Dentro de la nueva ventana, aparecerá un menú al lado izquierdo de la pantalla, debemos tocar la flecha que aparece al lado de la opción  Local Storage para desplegar el contenido, en ese momento debemos ver una opción llamada "http://marketplace.plantvsundead.com", hacemos click sobre el elemento y en el panel derecho deberá aparecer un elemento llamado token en la columna key, y el contenido en la columna value. debemos copiar el código que aparece en la columna value.',
            text7:
              "Pegamos el token copiado en la barra principal de PVU Monitor ¡Y LISTO! Ya puedes utilizar PVU Monitor. 👏👏👏",
            warning:
              "* Es posible que después de un día el token caduque, ya que cada token tiene fecha de vencimiento. En ese caso es necesario repetir nuevamente el proceso.",
          },
        },
      },
      en: {
        translation: {
          header: {
            "token-add": "Add a valid access token",
            "allow-farm": "Ready to farm!! 😎🌿",
            "deny-farm": "Farm closed 😥",
            "invalid-token": "Please, add a valid token",
          },
          harvest: {
            title: "total harvestable: {{value}}",
          },
          wallet: {
            title: "LE availables",
          },
          main: {
            "deny-farm": "You can't farm in this moment ❌",
            "page-update":
              "you should not reload the page, it is automatically updated every 5 minutes ⏰",
            "add-token": "Please, add a valid token",
            updated: "updated: {{lastDate}} | {{currentDate}} UTC",
            time: "🕕 UTC Time ",
            "group-me": "My group:",
            "group-current": "Current group:",
            "group-next": "Next group:",
            "group-minutes": "minutes",
            "group-hours": "hours",
          },
          plant: {
            created: "📅 created",
            finished: "harvest on: ",
            "need-water": "💧 need water?",
            "has-crow": "🐦has crow?",
            ready: "READY!",
            yes: "yes",
            no: "no",
            "profit-dollar": "USD profit on harvest",
            "time-to-harvest": "time to harvest",
          },
          plantsContainer: {
            title: "My Farm 👨‍🌾",
            "title-coords": "Coordinates 🌐",
          },
          priceConvert: {
            usd: "USD Price",
            bnb: "BNB Price",
          },
          profit: {
            title: "Profits:",
            "usd-title": "Approximate profit in USD dollars",
          },
          coords: {
            loading:
              "Loading coordinates, this process could be take a few minutes, please, dont close this window...",
            comment:
              "The coordinates system is under test, any problem please report it \n t.me/pvumonitor",
            "key-coord": "Coordinates",
            "key-position": "Position",
            "key-water": "Current Water",
            "key-crow": "Crows",
            "has-crow": "Crow!!",
          },
          tutorial: {
            title1: "1- What is a token?",
            text1:
              "When we enter the PVU marketplace (Plant vs Undead) and log in with our account, we are assigned a unique code with which the platform identifies us, in this way, we avoid having to log in again for each action we want to perform.",
            "text1-1":
              'This assigned code is known as a "token" or "JWT" for the acronym (JSON Web Token).',
            title2: "2- Why do we ask for your token?",
            text2:
              "In PVU Monitor we request your access token to be able to connect through the Plant vs Undead public API and thus be able to obtain the information shown on this page.",
            title3: "3- What can PVU Monitor do with my token?",
            text3:
              "With your access token, the only thing we can do is consult public information about your user. PVU Monitor",
            "text3-1": " CANNOT MAKE ANY CHANGES OR ACTIONS TO YOUR ACCOUNT.",
            "text3-2":
              "All operations carried out within the marketplace must be approved from Metamask.",
            title4: "4- How to get my token?",
            text4:
              "Once you have logged into the marketplace, right click anywhere on the screen, followed by that click on inspect / inspect according to the language of your browser.",
            text5:
              "Clicking on inspect will open a new window known as dev tools, we must enter the tab called Application or Application, if it does not appear among the options shown, we must touch the arrow that is in the last place as shown in the example.",
            text6:
              'Within the new window, a menu will appear on the left side of the screen, we must touch the arrow that appears next to the Local Storage option to display the content, at that moment we must see an option called "http: //marketplace.plantvsundead .com ", we click on the element and in the right panel an element called token should appear in the key column, and the content in the value column. we must copy the code that appears in the value column.',
            text7:
              "Paste the copied token in the main bar of PVU Monitor AND READY! You can now use PVU Monitor. 👏👏👏",
            warning:
              "* It is possible that after a day the token will expire, since each token has an expiration date. In that case it is necessary to repeat the process again.",
          },
        },
      },
    },
  });

export default i18n;
