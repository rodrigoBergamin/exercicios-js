Array.prototype.forEach2 = function(callback) {
    for(i = 0; i < this.length; i++){
        callback(this[i], i, this )
    }
}

const aprovados = ['Agatha','Angelina','Carolina','Hellen','Camille']

aprovados.forEach2(function(element, index, array){ 
    console.log(`${index + 1}) ${element}`)
})