// const numeros = [5,10,11,15,20,80,90,16,30,70,45];


// const numerosFiltrados = numeros.filter(valor => valor > 10);


// console.log (numerosFiltrados);


// SEMPRE RETORNARA UM ARRAY IGUAL OU MENOR!



const pessoas =  [
    {nome: 'Maria' , idade: 62},
    {nome: 'joao' , idade: 50},
    {nome: 'jonas' , idade: 30},
    {nome: 'davi' , idade: 10},
    {nome: 'drycka' , idade: 05}
]

const pessoasComNomeGrande = pessoas.filter (obj => obj.nome.length >= 5); //pessoas com mais ou igual 5 letras 
const peesoasmaisIdade = pessoas.filter (id => id.idade < 30); //pessoas com menos de 30 
const nomeA = pessoas.filter (function(p1) {
    return p1.nome.toLowerCase().endsWith('a'); //pessoas que termona copm "a"
})

console.log (nomeA);


//retorna filtrado mas nao modifica 