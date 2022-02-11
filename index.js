console.log('Hola mundo');

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

console.log(miNumero, miNumero2, miBoleano, miPrimeraVarible);

let undef
console.log(undef);

let nulo = null;

console.log(nulo);

//Objetos (vacio)

const miPrimerObjeto = {}

//Objetos (son agrupaciones de datos que hacen sentido entre si)

//Los objetos no tiene variables los objetos tiene propiedades

const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unCondicion: true,
}

console.log(miObjeto.unNumero);


//Arreglos
const arrvacio = [];
const arr = [1, 2, "hola", miObjeto]

//Push agrega un elemento al final del arreglo

arr.push(12);

console.log(arr);


//Operaciones matematicas
const suma = 1 + 2
const resta = 1 - 2
const multiplicacion = 2 * 3
const division = 9 / 3

console.log(suma, resta, multiplicacion, division);

const modulo = 10 % 3
console.log(modulo);

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

console.log(num);

//Operadores logicos

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
console.log(resultado8);


