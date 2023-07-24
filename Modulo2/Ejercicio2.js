// Juan Luis Igartua Ciatelo
// Modulo 2 - Ejercicio 2


//Funcion concat. Dados 2 arrays como entrada, devuelva la concatenacion de ambos. Utiliza rest / spread operators.

const concat = (a, b) => [...a, ...b];

//Implementa una version del ejercicio anterior donde se acepten multiples arrays de entrada (mas de 2).

const concatMore = (...arrays) => [].concat(...arrays);