const numeros = [ 12, 24, 35 , 10 , 1 , 5 , 29 ];
const numerosPares = numeros
.filter(valor => valor % 2 === 0 ) //peguei só os pares de valor 
.map(valor => valor * 2) //dobrei o pares 
.reduce ((ac,valor) => ac + valor); //e somei os pares dobrados 

console.log (numerosPares)

// a soma do dobro de todos os pares 