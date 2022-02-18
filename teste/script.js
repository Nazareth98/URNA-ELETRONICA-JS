const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'R$ 300',
    'Contas Pagar',
    'R$ 400',
    'Meus Dados'
]

const precosFiltro = precos.filter(p => p.includes('R$'));
const precosNumero = precosFiltro.map((preco) => Number(preco.replace("R$ ", "")))

console.log(precosFiltro)
console.log(precosNumero)

