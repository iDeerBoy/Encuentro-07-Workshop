// let globalGameObject = {
//   stats : {
//     carisma: 20,
//     fuerza: 20,
//     belleza: 20,
//     inteligencia: 20
//   },
//   items : {
//     linternas: 0,
//     estacas: 0,
//     tijeras: 0,
//     globos: 0,
//     espejo: false
//   },
//   vidasEnemigos: {
//     lazy: 5,
//     megaestofeles: 6,
//     unitornio: 5,
//     zombie: 5,
//     burlon: 0,
//   },
// }

export function burlon(e) {
  if (e.vidasEnemigos.burlon >= 1){
    console.log("La heronia se enfrentara al burlon oscuro.")
    if (e.items.linternas >= 1){
        console.log("%cburlon oscuro fue eliminado usando linterna, La heroina a ganado", `background-color: #baf8cb;`);
        e.stats.carisma = e.stats.carisma + 5;
        console.warn("la heroina gano +5 de carisma " + e.stats.carisma);
        e.items.linternas = e.items.linternas - 1;
        console.warn("la heroina ahora tiene: " + e.items.linternas + " linetrnas.");
        e.vidasEnemigos.burlon--
        console.log(`a Burlon le quedan ${e.vidasEnemigos.burlon} vidas.`)
    
    } else {
        if (e.stats.carisma <= 0){
          console.error("Tu carisma es muy bajo, burlon oscuro causo daño a tus demas estadisticas.")
          e.stats.inteligencia = e.stats.inteligencia - 2;
          e.stats.fuerza = e.stats.fuerza - 2;
          e.stats.belleza = e.stats.belleza - 2;
          console.warn(`Tu stats ahora son: carisma: ${e.stats.carisma}, fuerza: ${e.stats.fuerza}, belleza: ${e.stats.belleza}, inteligencia: ${e.stats.inteligencia}.`);
          console.log(`Burlon gano, a Burlon le quedan ${e.vidasEnemigos.burlon} vidas.`)         
        } else{          
        console.error("no tienes linternas, burlon oscuro daño el carisma de la heroina.");
        e.stats.carisma = e.stats.carisma - 10;
        console.warn(`Tu carisma ahora es: ${e.stats.carisma}`)
        console.log(`Burlon gano, a Burlon le quedan ${e.vidasEnemigos.burlon} vidas.`)
        }
    }
  } else {
    console.log("A burlon oscuro no le quedan vidas, genial! continua.")
  }
  

  return e;
  
}


export function obtenerLinterna(e) {
  const probabilidad = Math.floor(Math.random() * 10);
  if (e.stats.carisma <= 5) {
    if (probabilidad > 6){
      console.log("Has obtenido una linterna.");
      e.items.linternas = e.items.linternas + 1;
      console.warn(`Ahora tienes ${e.items.linternas} linternas.`);
    } else {
      console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
    }
  } else {
    if (probabilidad > 6){
      console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
    } else {
      console.log("Has obtenido una linterna.");
      e.items.linternas = e.items.linternas + 1;
      console.warn(`Ahora tienes ${e.items.linternas} linternas.`);
    }
  }

  return e;
}
