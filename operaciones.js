const fs = require('fs');
const citasFile = 'citas.json';

function registrar(nombre, edad, tipo, color, enfermedad) {
  // Leer las citas actuales del archivo
  let citas = [];
  try {
    const data = fs.readFileSync(citasFile, 'utf8');
    citas = JSON.parse(data);
  } catch (error) {
    citas = [];
  }

  // Crear una nueva cita
  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  // Agregar una nueva cita
  citas.push(nuevaCita);

  // Escribir las citas actualizadas en el archivo
  fs.writeFileSync(citasFile, JSON.stringify(citas, null, 2));

  console.log('Cita registrada con éxito.');
}

function leer() {
  // Leer y mostrar todas las citas registradas
  try {
    const data = fs.readFileSync(citasFile, 'utf8');
    const citas = JSON.parse(data);
    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
      console.log(`Cita #${index + 1}:`);
      console.log(`Nombre: ${cita.nombre}`);
      console.log(`Edad: ${cita.edad}`);
      console.log(`Tipo: ${cita.tipo}`);
      console.log(`Color: ${cita.color}`);
      console.log(`Enfermedad: ${cita.enfermedad}`);
      console.log('-------------------------');
    });
  } catch (error) {
    console.error('Error al leer las citas:', error.message);
  }
}

module.exports = {
  registrar,
  leer,
};
