// Juan Luis Igartua Ciatelo
// Modulo 2 - Ejercicio 1


//Funcion Head. Dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([firstElement, ...rest]) => firstElement;


//Funcion Tail. Dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([firstElement, ...rest]) => rest;

//Funcion Init. Dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array) => array.slice(0, array.length - 1);

//Funcion Last. Dado un array como entrada devuelva el último elemento.

const last = (array) => array.length > 0 ? array[array.length - 1] : undefined;

