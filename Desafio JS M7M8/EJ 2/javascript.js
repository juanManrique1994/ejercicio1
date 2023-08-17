// Definición de las ofertas de crédito
const ofertas = [
    { nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15 },
    { nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10 },
    { nombre: 'Plan 003', capital: 450000, plazo: 60, tasa: 23 }
  ];
  
  // Función para calcular el interés
  function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100;
  }
  
  // Calcular intereses y generar el array de información
  const informacionOfertas = ofertas.map(oferta => {
    const interes = calcularInteres(oferta.capital, oferta.plazo, oferta.tasa);
    return {
      nombre: oferta.nombre,
      capital: oferta.capital,
      plazo: oferta.plazo,
      tasa: oferta.tasa,
      interes: interes
    };
  });
  
  // Calcular la suma total de intereses
  const sumaTotalIntereses = informacionOfertas.reduce((total, oferta) => total + oferta.interes, 0);
  
  // Mostrar la información de las ofertas y la suma total de intereses
  console.log('Información de las ofertas:');
  console.log(informacionOfertas);
  console.log('Suma total de intereses:', sumaTotalIntereses);
 

  
  //Ejercicio nro 1 parte B modulo 4 JS

  function calcularInteresInversiones(inversiones) {
    return inversiones.map(inversion => {
      const interes = calcularInteres(inversion.capital, inversion.plazo, inversion.tasa);
      return {
        ...inversion,
        interes: interes
      };
    });
  }
  
  // Ejemplo de array de inversiones
  const inversiones = [
    { nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15 },
    { nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10 },
    { nombre: 'Plan 003', capital: 450000, plazo: 60, tasa: 23 }
  ];
  
  // Llamar a la función para obtener el nuevo array con el campo "interés"
  const inversionesConInteres = calcularInteresInversiones(inversiones);
  
  // Mostrar el nuevo array con el campo "interés"
  console.log(inversionesConInteres);
  