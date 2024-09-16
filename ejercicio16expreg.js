/*
 * EJERCICIO:
 * Utilizando tu lenguaje, explora el concepto de expresiones regulares,
 * creando una que sea capaz de encontrar y extraer todos los números
 * de un texto.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea 3 expresiones regulares (a tu criterio) capaces de:
 * - Validar un email.
 * - Validar un número de teléfono.
 * - Validar una url.
 */

function sacarNum(){
    let p = document.querySelector("p");
    let texto = p.innerText;
    const numeros = texto.match(/[0-9]+/g);
    console.log('NUMEROS:'+'\n'+ numeros);
};

function validarMail(){
    let p = document.querySelector("p");
    let texto = p.innerText;
    const gmail = texto.match(/[A-z]+@+[A-z]+.[A-z]+/g);
    console.log('EMAILESS:'+'\n'+ gmail);
};

function validarTelUru(){
    let p = document.querySelector("p");
    let texto = p.innerText;
    const numeros = texto.match(/[0]+\d[0-9]+/g);
    let telefonos = [];
    numeros.forEach(numero => {
        if(numero.length == 9){
            telefonos.push(numero);
        };
    });
    console.log(telefonos);
};

function validarUrl(){
    let p = document.querySelector("p");
    let texto = p.innerText;
    const url = texto.match(/[h-z]+:+[//]+[a-z]+[/]+[a-z.a-z]+/g);
    console.log('URL:'+'\n'+ url);
};
