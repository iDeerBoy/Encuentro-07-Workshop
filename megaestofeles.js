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
//     espejo: true
//   },
//   vidasEnemigos: {
//     lazy: 5,
//     megaestofeles: 0,
//     unitornio: 0,
//     zombie: 5,
//     burlon: 0,
//   },
// }
export function megastofeles(e) {
  if(e.vidasEnemigos.megaestofeles >= 1){    
    console.log("La heronia se enfrentara a megastófeles.")
    if (e.items.espejo === true){
        console.log("%c La heroina a esquivado a megastófoles, a sobrevivdo a su encuentro.", `background-color: #baf8cb;`);
        e.items.espejo = false;
        console.warn(`El espejo se romprio en el enfrentamiento, ya no lo tienes contigo.`);
        e.vidasEnemigos.megaestofeles--;
        console.log(`Megastófoles se hizo daño a si mismo, le quedan ${e.vidasEnemigos.megaestofeles} vidas.`)
    
    } else {
          console.error("No puedes protegerte de megastofóles, daño todas tus estadisticas.")
          e.stats.carisma = e.stats.carisma - 5;
          e.stats.fuerza = e.stats.fuerza - 5;
          e.stats.inteligencia = e.stats.inteligencia - 5;
          e.stats.belleza = e.stats.belleza -5;
          console.warn(`Tu stats ahora son: carisma: ${e.stats.carisma}, fuerza: ${e.stats.fuerza}, belleza: ${e.stats.belleza}, inteligencia: ${e.stats.inteligencia}.`)
    }
  } else {
    console.log("Ya has vencido a Megastófoles, ya no puede hacerte daño, continua.")
  }

  return e;
    
}
  
export function obtenerEscudo(e) {
    const probabilidad = Math.floor(Math.random() * 10);
    if (e.stats.carisma + e.stats.fuerza + e.stats.belleza + e.stats.inteligencia <= 10) {
      if (probabilidad > 5){
        console.log("Has encontrado un espejo, espero que sea de ayuda.");
        e.items.espejo = e.items.espejo = true;
      } else {
        console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
      }
    } else {
      if (probabilidad > 5){
        console.log("%c El cofre esta vacio, no has obtenido nada.", `background-color: #a7b0e2;`)
      } else {
        console.log("Has encontrado un espejo, espero que sea de ayuda.");
        e.items.espejo = e.items.espejo = true;
      }
    }

    return e;
  }