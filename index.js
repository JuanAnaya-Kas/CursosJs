//console.log('Hola mundo');

//Tidpos de datos en javascript
//STING (cadena de caracteres. ejemplos: 'a' 'hola mundo' 'jake el perro')
//Boolean (true o false)
//Null : es un valor y su valor es nulo
//Number (cualquier numero)
//Undefined. (algo que no esta definido)
//object: objeto (puede contener cualquier tipo de dato en una estructura)

//DECLARAICON DE VARIALBES (VAR, LET O CONST)

//var miPrimeraVarible = 'lala';

//MUTABLILIDAD de las variables es cuando se puede cambiar el valor de una variable

let miPrimeraVarible = 'Mi primera variable';

miPrimeraVarible = 'Esto ha cambiado';

// bolleanos
let miBoleano = true;
let miBoleano2 = false;

//Buena practica el nombre de la variable debe empezar con una letra y concortar con el valor que ablerga
 
let miNumero = 0;
let miNumero2 = 12;
let miNumero3 = -258;

//console.log(miNumero, miNumero2, miBoleano, miPrimeraVarible);

let undef
//console.log(undef);

let nulo = null;

//console.log(nulo);

//Objetos (vacio)

const miPrimerObjeto = {}

//Objetos (son agrupaciones de datos que hacen sentido entre si)

//Los objetos no tiene variables los objetos tiene propiedades

const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unCondicion: true,
}

//console.log(miObjeto.unNumero);


//Arreglos
const arrvacio = [];
const arr = [1, 2, "hola", miObjeto]

//Push agrega un elemento al final del arreglo

arr.push(12);

//console.log(arr);


//Operaciones matematicas
// const suma = 1 + 2
// const resta = 1 - 2
// const multiplicacion = 2 * 3
// const division = 9 / 3

//console.log(suma, resta, multiplicacion, division);

const modulo = 10 % 3
//console.log(modulo);

//Diferencia entre const y let (no permite reasignar una variable)

let num = 5;
// ++ automaticamente suma 1
//num++;
// -- automaticamente resta 1
//num--;
// += aumenta segun el valor
num += 5
// -= resta segun el valor
num -= 5
// *= multiplica segun el valor
num *= 5
// /= divide segun el valor
num /= 2

//console.log(num);

//Operadores de comparacion

// === igualdad extrincta tiene en cuenta tanto el tipo de dato como el valor
const resultado1 = 5 === 6;
// == igualdad no extricta sin tener en cuenta el tipo de dato
const resultado2 = 5 == '5';
// < menor que y > mayor que
const resultado3 = 5 < 6
const resultado4 = 6 > 5
// <= menor o igual que
const resultado5 = 5 <= 5
const resultado6 = 5 <= 6
// desigualdad extricta
const resultado7 = 5 !== 6
// desigualdad no extricta
const resultado8 = 5 != '5'
//console.log(resultado8);

//Operadores logicos ('AND' &&, 'OR' ||, 'NOT' !)

//OR busca el primer valor que sea verdadero y no lo busca mas
const restadoOr = false || true;
//AND busca el primer valor que sea falso y no lo busca mas
const restadoAnd = true && true;
//NOT busca el primer valor que sea verdadero y lo cambia a falso
const restadoNot = !true;
//console.log(restadoNot);

// Control de flujo

//if (condicion) {}

const edad = 5;
if (edad > 5 && edad < 18) {
    //console.log('El niño puede jugar');
}else{
    //console.log('El niño no puede jugar');
}

//while (condicion) {}

//while seguira ejecutandoce  mientras la condicion sea verdadera
let x = 0;

while (x < 5) {
    //console.log(x);
    x++;
}

//console.log('Fin del while');

//switch (condicion) {}

//switch evalua una condicion y ejecuta una accion dependiendo de la condicion

switch (2) {
    case 1:{
        //console.log('Coso de 1');
        break;
    }
    case 2:{
        //console.log('Coso de 2');
        break;
    }
    case 3:{
        //console.log('Coso de 3');
        break;
    }
    default:{
        //console.log('Coso de default');
        break;
    }
}

//for (inicializacion; condicion; incremento) {}
// se inicializa la variable, se evalua la condicion y se incrementa
for (let i =0; i < 10; i++){
    //console.log(i);
}
//aceder a los datos de un arreglo
// const numeros = [1, 2, 'hola', 4, 5];

// for (let i =0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }

//FUNCIONES

//LAS FUNCIONES SON BLOQUES DE CODIGO QUE SE EJECUTAN CUANDO SE LLAMAN
//LOS ARGUMENTOS SON LOS PARAMETROS QUE SE LE PASAN A LA FUNCION

function iterar (agr1 /*argumento*/){
    for (let i =0; i < agr1.length; i++){
    //console.log(agr1[i]);
    }
}
const numeros = [1, 2, 'hola', 4, 5];
const nombres = ['Juan', 'Pedro', 'Maria'];
iterar(numeros /*Parametro*/ );
iterar(nombres);

function suma(a, b){
    return a + b;
}

const resultadoSuma1 = suma(1, 2);
const resultadoSuma2 = suma(5, 6);
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2);

//console.log('Resultado de la suma: ', resultadoSuma3);

//callback es una funcion que se pasa como parametro a otra funcion

function sumar(a,b,cb){
    const r = a + b;
    cb(r)
}
function callback(result){
    console.log('resultado',result);
}
sumar(2,3, callback);