const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Ambas funções fazem a mesma coisa 

const resultado = nota => {
  return  nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
}


console.log(resultado(6.9))
console.log(resultado(7.1))