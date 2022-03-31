const fs = require('fs');
const colors = require('colors');

//metodo async super facil y  ya regresa una promesa
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    // haz esto
    try {

        console.clear();

        if (listar == true) {
            console.log("=====================".red);
            console.log(colors.green(`Tabla del ${base}`));
            console.log("=====================".yellow);
        }
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            consola += (colors.rainbow(`${base}  x  ${i}  = ${base*i}\n`));
            salida += (`${base}  x  ${i}  = ${base*i}\n`);

        }

        if (listar == true) { console.log(consola); }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`Tabla del ${base}`.rainbow);

        // y si da un error pasa esto
    } catch (error) {

        throw error;
    }


}




/*     
        const crearArchivo = (base = 5) => {
return new Promise((resolve, reject) => {

        console.clear();


        console.log("=====================");
        console.log(`tabla del $(base)`);
        console.log("=====================");

        let salida = "";

        for (let i = 1; i <= 10; i++) {
            salida += (`${base}  x  ${i}  = ${base*i}\n`);
        }

        console.log(salida);


        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`Tabla del ${base}`);



    }) */



module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}