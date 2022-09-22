const clubesA  = ['corinthians','parma','saoPaulo'];
const clubesB  = ['guarani','ponte','CSA']
const clubesC = ['Granada', 'boa Vista ']

const clubes  = [...clubesA , 'Luiz ', ...clubesB , ...[5,6,7,], ...clubesC, 'davi' ];

console.log (clubes);

