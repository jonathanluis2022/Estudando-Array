const pessoas = [
    {nome: 'drycka' , idade: 29},
    {nome: 'davi' , idade: 21},
    {nome: 'jhow' , idade: 32},
    {nome: 'mae' , idade: 50},
    {nome: 'cinthia' , idade: 34},
    {nome: 'susu' , idade: 100},
    {nome: 'sisi' , idade: 40}
];

                   //começa com acumulador depois o valor 
const maisVelha = pessoas.reduce (function (mais , valor){ 
    if (mais.idade > valor.idade) return mais;//começa do primeiro checando qual idade maior 
    return valor; // ira retornr o valor da idade maior 
});
 console.log (maisVelha);