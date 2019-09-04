/*let dobro = function(a){
    return 2 * a
}

dobro = (a,b,c) => { função arrow, sem o uso da palavra reservada function
    return 3 * a + 2 * b + 5 * c
}

console.log(dobro(9,2,15))

*/


function Pessoa(){
    this.idade = 0

    setInterval(() => { // função arrow sendo passada como parâmetro para setInterval, sem o uso da palavra function
        this.idade++
        console.log(this.idade)
    }, 1000 )
}

new Pessoa