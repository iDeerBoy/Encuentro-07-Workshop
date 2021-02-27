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
//     tijeras: 1,
//     globos: 0,
//     espejo: true
//   },
//   vidasEnemigos: {
//     lazy: 0,
//     megaestofeles: 0,
//     unitornio: 0,
//     zombie: 5,
//     burlon: 0,
//   },
// }

export function lazy(e) {
    if(e.vidasEnemigos.lazy >= 1){
      console.log("La heronia se enfrentara a lazy violenta.")
      if (e.items.tijeras >= 1){
          console.log("%c lazy violenta fue eliminada usando una tijeras, La heroina a ganado", `background-color: #baf8cb;`);
          e.stats.belleza = e.stats.belleza + 5;
          console.warn("la heroina gano +5 de belleza " + e.stats.belleza);
          e.items.tijeras = e.items.tijeras - 1;
          console.warn("la heroina ahora tiene: " + e.items.tijeras + " tijeras.");
          e.vidasEnemigos.lazy--;
          console.log(`a lazy violenta le quedan ${e.vidasEnemigos.lazy} vidas.`)
      
      } else {
          if (e.stats.belleza <= 0){
            console.error("Tu belleza es muy baja, lazy violenta causo daño a tus demas estadisticas.")
            e.stats.carisma = e.stats.carisma - 2;
            e.stats.fuerza = e.stats.fuerza - 2;
            e.stats.inteligencia = e.stats.inteligencia - 2;
            console.warn(`Tu stats ahora son: carisma: ${e.stats.carisma}, fuerza: ${e.stats.fuerza}, belleza: ${e.stats.belleza}, inteligencia: ${e.stats.inteligencia}.`)          
          } else{          
          console.error("no tienes tijeras, lazy violenta daño la belleza de la heroina.");
          e.stats.belleza = e.stats.belleza - 10;
          console.warn(`Tu belleza ahora es: ${e.stats.belleza}`)
          }
      }
    } else{
      console.log("A lazy violenta no le quedan vidas, genial! continua.")
    }

    return e;
    
}

  
export function obtenerTijera(e) {
    const probabilidad = Math.floor(Math.random() * 10);
    if (e.stats.belleza <= 5) {
      if (probabilidad > 6){
        console.log("Has obtenido unas tijeras.");
        e.items.tijeras = e.items.tijeras + 1;
        console.warn(`Ahora tienes ${e.items.tijeras} tijeras.`);
      } else {
        console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
      }
    } else {
      if (probabilidad > 6){
        console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
      } else {
        console.log("Has obtenido unas tijeras.");
        e.items.tijeras = e.items.tijeras + 1;
        console.warn(`Ahora tienes ${e.items.tijeras} tijeras.`);
      }
    }

    return e;
  }