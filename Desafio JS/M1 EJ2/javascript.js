function calcularPresupuesto(ingresoTotal) {
    const gastosNecesarios = ingresoTotal * 0.5;
    const gastosOpcionales = ingresoTotal * 0.3;
    const ahorroEInversion = ingresoTotal * 0.2;
  
    return {
      gastosNecesarios,
      gastosOpcionales,
      ahorroEInversion,
    };
  }
  
  const ingresoTotal = parseFloat(prompt("Ingrese su ingreso total:"));
  
  if (isNaN(ingresoTotal)) {
    console.log("Por favor, ingrese un valor numérico válido.");
  } else {
    const presupuesto = calcularPresupuesto(ingresoTotal);
    console.log("Presupuesto:");
    console.log("Gastos Necesarios:", presupuesto.gastosNecesarios);
    console.log("Gastos Opcionales:", presupuesto.gastosOpcionales);
    console.log("Ahorro e Inversión:", presupuesto.ahorroEInversion);
  }
  