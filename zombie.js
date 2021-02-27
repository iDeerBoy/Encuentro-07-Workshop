// let globalGameObject = {
//   stats : {
//     carisma: 20,
//     fuerza: 20,
//     belleza: 20,
//     inteligencia: 20
//   },
//   items : {
//     linternas: 0,
//     estacas: 2,
//     tijeras: 1,
//     globos: 0,
//     espejo: true
//   },
//   vidasEnemigos: {
//     lazy: 0,
//     megaestofeles: 0,
//     unitornio: 0,
//     zombie: 0,
//     burlon: 0,
//   },
// }

export function zombie(e) {
      if (e.vidasEnemigos.zombie >= 1){
        console.log("La heronia se enfrentara al zombie electrico")
        if (e.items.estacas >= 1){
            console.log("%c zombie fue eliminado usando una estaca, La heroina a ganado", `background-color: #baf8cb;`);
            e.stats.fuerza = e.stats.fuerza + 5;
            console.warn("la heroina gano +5 de fuerza " + e.stats.fuerza);
            e.items.estacas = e.items.estacas - 1;
            console.warn("la heroina ahora tiene: " + e.items.estacas + " estacas");
            e.vidasEnemigos.zombie--;
            console.log(`a zombie electrico le quedan ${e.vidasEnemigos.zombie} vidas.`)        
        } else {
            if (e.stats.fuerza <= 0){
              console.error("Tu fuerza es muy baja, el zombie electrico causo daño a tus demas estadisticas.")
              e.stats.carisma = e.stats.carisma - 2;
              e.stats.belleza = e.stats.belleza - 2;
              e.stats.inteligencia = e.stats.inteligencia - 2;
              console.warn(`Tu stats ahora son: carisma: ${e.stats.carisma}, fuerza: ${e.stats.fuerza}, belleza: ${e.stats.belleza}, inteligencia: ${e.stats.inteligencia}.`)          
            } else{          
            console.error("no tienes estacas, el zombie hizo daño la fuerza de la heroina.");
            e.stats.fuerza = e.stats.fuerza - 10;
            console.warn(`Tu fuerza ahora es: ${e.stats.fuerza}`)
            }
        }
        
      }else{
        console.log("A zombie elctrico no le quedan vidas, genial! continua.")
      }
  
      return e;
      
}  

export function obtenerEstaca(e) {
    const probabilidad = Math.floor(Math.random() * 10);
      if (e.stats.fuerza <= 5) {
        if (probabilidad > 6){
          console.log("Has obtenido una estaca.");
          e.items.estacas = e.items.estacas + 1;
          console.warn(`Ahora tienes ${e.items.estacas} estacas.`);
        } else {
          console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
        }
      } else {
        if (probabilidad > 6){
          console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
        } else {
          console.log("Has obtenido una estaca.");
          e.items.estacas = e.items.estacas + 1;
          console.warn(`Ahora tienes ${e.items.estacas} estacas.`);}
      }
  
      return e;
}