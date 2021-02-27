import { lazy, obtenerTijera } from "./lazy.js"
import { megastofeles, obtenerEscudo } from "./megaestofeles.js"
import { unitornio, obtenerGlobo } from "./unitornio.js"
import { zombie, obtenerEstaca } from "./zombie.js"
import { burlon, obtenerLinterna } from "./burlon.js"

let globalGameObject = {
  stats : {
    carisma: 25,
    fuerza: 25,
    belleza: 25,
    inteligencia: 25
  },
  items : {
    linternas: 1,
    estacas: 1,
    tijeras: 1,
    globos: 1,
    espejo: false
  },
  vidasEnemigos: {
    lazy: 2,
    megaestofeles: 3,
    unitornio: 2,
    zombie: 2,
    burlon: 2,
  },
}


// MISCELANEOS
let numeroNivel = 0;

let items = [
  obtenerTijera,
  obtenerEscudo,
  obtenerGlobo,
  obtenerEstaca,
  obtenerLinterna
];
function abrirCofre(globalGameObject) {
  console.log("%c ¡COFRE! 🎁", 'background-color: orange; color: white; font-size: 20px; padding: 10px')
  
  let item = items[Math.floor(Math.random() * items.length)];
  let resultados = item(globalGameObject);

  return resultados;
}

let niveles = [lazy, megastofeles, unitornio, zombie, burlon, abrirCofre, abrirCofre, abrirCofre];

function jugarNivel() {
  let {carisma, fuerza, inteligencia, belleza } = globalGameObject.stats;
  if (carisma + fuerza + belleza + inteligencia <= 0) {
    console.log("%c Nuestra heroína ha sido derrotada y no puede combatir", 'background-color: lightblue; color: black; font-size: 20px; padding: 10px');
    return
  }
  // se escoge un nivel al azar entre boss y abrir cofre
  let nivel = niveles[Math.floor(Math.random() * niveles.length)];

  // se aumenta el nivel
  numeroNivel++;

  setTimeout(() => {
    console.log("%c Entrando al nivel " + numeroNivel + "...", 'background-color: black; color: white; font-size: 20px; padding: 10px');
  }, 100);


  setTimeout(() => {
    let resultados = nivel(globalGameObject);
    globalGameObject = { ...resultados };
  }, 200)

  setTimeout(() => {
    console.log(`%c - RESULTADOS DESPUES DEL NIVEL ${numeroNivel} -`, 'background-color: yellow; color: black; font-size: 20px; padding: 10px');
  }, 300);

  setTimeout(() => {
    let {carisma, fuerza, inteligencia, belleza } = globalGameObject.stats;
    console.log(`%c
        - ESTADISTICAS DE VIDA -
        carisma: ${carisma}
        fuerza: ${fuerza}
        inteligencia: ${inteligencia}
        belleza: ${belleza}
        `, "font-size: 16px");

  }, 400);

  setTimeout(() => {
    let { tijeras, globos, linternas, estacas, espejo } = globalGameObject.items;

    console.log(`%c
        - INVENTARIO -
        tijeras: ✂️ ${tijeras}
        globos: 🎈 ${globos}
        linternas: 🔦 ${linternas}
        estacas: 📏 ${estacas}
        escudo activado? 🌞 ${espejo}
        `, "font-size: 16px");
  }, 500);

  setTimeout(() => {
    globalGameObject.stats.carisma = globalGameObject.stats.carisma < 0 ? 0 : globalGameObject.stats.carisma
    globalGameObject.stats.fuerza = globalGameObject.stats.fuerza < 0 ? 0 : globalGameObject.stats.fuerza
    globalGameObject.stats.inteligencia = globalGameObject.stats.inteligencia < 0 ? 0 : globalGameObject.stats.inteligencia
    globalGameObject.stats.belleza = globalGameObject.stats.belleza < 0 ? 0 : globalGameObject.stats.belleza
    // let {carisma, fuerza, inteligencia, belleza } = globalGameObject.stats;

    if(globalGameObject.stats.carisma + globalGameObject.stats.fuerza + globalGameObject.stats.belleza + globalGameObject.stats.inteligencia <= 0) {
      console.log("GAME OVER")
      alert("Mala suerte :/ la heroina a muerto. F5 para seguir intentando")
    } else {
      console.log("¡LA HEROINA SIGUE VIVA! Vamos al siguiente nivel")
    }
  }, 600)

  let vidasTotal = globalGameObject.vidasEnemigos.lazy + globalGameObject.vidasEnemigos.zombie + globalGameObject.vidasEnemigos.unitornio + globalGameObject.vidasEnemigos.burlon + globalGameObject.vidasEnemigos.megaestofeles;
  if (vidasTotal <= 0){
    alert("Has derrotado todos los mounstros y logrado salir de la mazmorra; GRACIAS POR JUGAR.")
  }

}

const btn = document.getElementById("btn");
btn.addEventListener("click", jugarNivel) 