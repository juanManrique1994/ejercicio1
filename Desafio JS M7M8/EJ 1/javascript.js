document.addEventListener("DOMContentLoaded", () => {
    const cashFlowData = [
      { periodo: "Enero", ingreso: 1500, egreso: 1500 },
      { periodo: "Febrero", ingreso: 2500, egreso: 2500 },
      { periodo: "Marzo", ingreso: 84683, egreso: 1155 },
      { periodo: "Abril", ingreso: 135353, egreso: 1533 },
      { periodo: "Mayo", ingreso: 1535, egreso: 5434 },
      { periodo: "Junio", ingreso: 4343354, egreso: 5434543 },
      { periodo: "Julio", ingreso: 435453, egreso: 4543 },
      { periodo: "Agosto", ingreso: 78351, egreso: 7816 },
      { periodo: "Septiembre", ingreso: 1878, egreso: 95634 },
      { periodo: "Octubre", ingreso: 48483, egreso: 9433 },
      { periodo: "Noviembre", ingreso: 35483, egreso: 53133 },
      { periodo: "Diciembre", ingreso: 3843, egreso: 348133 }
    ];
  
    const resultElement = document.getElementById("result");
  
    let totalIngreso = 0;
    let totalEgreso = 0;
  
    cashFlowData.forEach(data => {
      totalIngreso += data.ingreso;
      totalEgreso += data.egreso;
    });
  
    const netCashFlow = totalIngreso - totalEgreso;
  
    if (netCashFlow >= 0) {
      resultElement.textContent = "El flujo de caja genera ganancias.";
    } else {
      resultElement.textContent = "El flujo de caja genera pérdidas.";
    }
  
    const cashFlowTable = document.getElementById("cashFlowData");
  
    cashFlowData.forEach(data => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.periodo}</td>
        <td>${data.ingreso}</td>
        <td>${data.egreso}</td>
      `;
      cashFlowTable.appendChild(row);
    });
  });

  
  
  // Ejercicio nro 1 modulo 4 JS


  function analizarFlujoDeCaja(flujos) {
    let totalIngresos = 0;
    let totalEgresos = 0;
  
    flujos.forEach(data => {
      totalIngresos += data.ingreso;
      totalEgresos += data.egreso;
    });
  
    const netCashFlow = totalIngresos - totalEgresos;
  
    if (netCashFlow < 0) {
      return -1; // Pérdidas
    } else if (netCashFlow > 0) {
      return 1; // Ganancias
    } else {
      return 0; // Ingresos iguales a egresos
    }
  }
  
  const flujoDeCaja = [
    { periodo: "Enero", ingreso: 1500, egreso: 1500 },
    { periodo: "Febrero", ingreso: 2500, egreso: 2500 },
    // ... otros meses ...
  ];
  
  const resultado = analizarFlujoDeCaja(flujoDeCaja);
  
  if (resultado === -1) {
    console.log("Hay pérdidas.");
  } else if (resultado === 1) {
    console.log("Hay ganancias.");
  } else {
    console.log("Los ingresos son iguales a las ganancias.");
  }