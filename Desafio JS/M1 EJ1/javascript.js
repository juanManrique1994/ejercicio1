// Funcion para calcular el Punto de Equilibrio
function calcularPuntoEquilibrio() {
    // Solicitar los datos necesarios
    let costosFijos = parseFloat(prompt("Ingrese los costos fijos:"));
    let costosVariables = parseFloat(prompt("Ingrese los costos variables por unidad:"));
    let precioVenta = parseFloat(prompt("Ingrese el precio de venta por unidad:"));
  
    // Calcular el Punto de Equilibrio
    let puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
  
    // Mostrar el resultado por consola
    if (isNaN(puntoEquilibrio) || puntoEquilibrio < 0) {
      console.log("Los datos ingresados no permiten calcular el Punto de Equilibrio.");
    } else {
      console.log("El Punto de Equilibrio es: " + puntoEquilibrio.toFixed(2) + " unidades.");
    }
    
    //Mostrar resultado por pantalla
    alert("El Punto de Equilibrio es: " + puntoEquilibrio.toFixed(2) + " unidades.")
  }
  

  // Llamar a la función para calcular el Punto de Equilibrio
  calcularPuntoEquilibrio();
  