const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();
/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('='); */ // se va a separar por el signo = base de un lado y el 5 del otro
//esto era para recibir parametro desde la consola como node app --base = 3 etc


console.log(argv);


/* const base = 4; */





crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada correctamente'))
    .catch(err => console.log(err, 'No se pudo crear la tabla'));


/* console.clear(); */


/* console.log("=====================");
console.log("    Tabla del 5");
console.log("=====================");

const base = 3;
let salida = "";

for (let i = 1; i <= 10; i++) {
    salida += (`${base}  x  ${i}  = ${base*i}\n`);
}

console.log(salida); */

//es una forma de crear el archivo
/* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`Tabla del ${base} creada correctamente`);
}) */

//creando el archivo de manera sync

/* fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log(`Tabla del ${base} creada correctamente`); */