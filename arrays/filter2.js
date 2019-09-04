Array.prototype.filter2 = function(callback){
    const newArray = []
    for(i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(callback(this[i], i, this))
        }
    }
    return newArray
}
//explicando funcionamento interno do filter