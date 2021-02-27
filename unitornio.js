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
//     unitornio: 0,
//     zombie: 5,
//     burlon: 0,
//   },
// }

export function unitornio(e) {
    if(e.vidasEnemigos.unitornio >= 1){
        console.log("La heronia se enfrentara al unitornio de fuego.")
        if (e.items.globos >= 1){
            console.log("%cunitornio de fuego fue eliminado usando un globo, La heroina a ganado", `background-color: #baf8cb;`);
            e.stats.inteligencia = e.stats.inteligencia + 5;
            console.warn("la heroina gano +5 de inteligancia " + e.stats.inteligencia);
            e.items.globos = e.items.globos - 1;
            console.warn("la heroina ahora tiene: " + e.items.globos + " globos.");
            e.vidasEnemigos.unitornio--
            console.log(`a Burlon le quedan ${e.vidasEnemigos.unitornio} vidas.`)
        
        } else {
            if (e.stats.inteligencia <= 0){
              console.error("Tu inteligencia es muy baja, unitornio de fuego causo daño a tus demas estadisticas.")
              e.stats.carisma = e.stats.carisma - 2;
              e.stats.fuerza = e.stats.fuerza - 2;
              e.stats.belleza = e.stats.belleza - 2;
              console.warn(`Tu stats ahora son: carisma: ${e.stats.carisma}, fuerza: ${e.stats.fuerza}, belleza: ${e.stats.belleza}, inteligencia: ${e.stats.inteligencia}.`)          
            } else{          
            console.error("no tienes bombas de agua, unitornio de fuego daño la inteligencia de la heroina.");
            e.stats.inteligencia = e.stats.inteligencia - 10;
            console.warn(`Tu inteligencia ahora es: ${e.stats.inteligencia}`)
            }
        }
    } else {
      console.log("A unitornio de fuego no le quedan vidas, genial! continua.")
    }
  
    return e;
    
  }
  
  export function obtenerGlobo(e) {
    const probabilidad = Math.floor(Math.random() * 10);
    if (e.stats.inteligencia <= 5) {
      if (probabilidad > 6){
        console.log("Has obtenido un globo.");
        e.items.globos = e.items.globos + 1;
        console.warn(`Ahora tienes ${e.items.globos} globos.`);
      } else {
        console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
      }
    } else {
      if (probabilidad > 6){
        console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
      } else {
        console.log("Has obtenido un globo.");
        e.items.globos = e.items.globos + 1;
        console.warn(`Ahora tienes ${e.items.globos} globos.`);
      }
    }
  
    return e;
  }
