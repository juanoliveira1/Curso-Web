{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera) // variavel(var) dentro de escopo simples é visivel globalmente 
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local) // variavel dentro de uma função pertence apenas a função