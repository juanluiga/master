// Juan Luis Igartua Ciatelo
// Modulo 2 - Ejercicio 3

//Funcion clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
    return {...source};
}

//Funcion Merge. Dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function merge(source, target) {
    return { ...target, ...source };
}