// map altera o valor do array , nao o valor o original e sim altera para fazer um novo array

const numero = [ 5 , 10 , 40 , 30 , 50 , 70 ];
const numerosEmDobro = numero.map(valor => valor + 3  ); //vai retornar os numeros dobrados 


const carros = [
    {nomes: 'renegage', marcas: 'Jeep'},
    {nomes: 'Q7' , marcas: 'Audi'},
    {nomes: 'X6' , marcas: 'BMW'},
    {nomes: 'Camaro ', marcas: 'Chevrolet'},
    {nomes: 'Jetta' , marcas: "wolks"}
];

const modelos = carros.map (obj => obj.nomes);
const marcaS = carros.map (obj => obj.marcas);

const comIds = carros.map (function(obj , indice){
    obj.id = (indice + 1);
    return obj;
});

console.log (comIds);








