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
