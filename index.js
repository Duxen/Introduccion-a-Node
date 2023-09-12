const operaciones = require('./operaciones');

const args = process.argv.slice(2);

if (args[0] === 'registrar') {

    const [, nombre, edad, tipo, color, enfermedad] = args;
  operaciones.registrar(nombre, edad, tipo, color, enfermedad);
} else if (args[0] === 'leer') {

    operaciones.leer();
} else {
  console.log('Comando no reconocido. Usos válidos: "registrar" o "leer".');
}
