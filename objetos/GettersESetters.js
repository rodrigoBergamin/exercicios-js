//Getters e Setters servem para acessar o valor de objetos e atributos privados (encapsulados)
//Get serve para ler o conteúdo do atributo e Set para modificar esse valor

/*const sequencia = {
    _valor: 1, //Convenção Javascript, underline diz que a variável é privada
    
    get valor() {return this._valor++}, //getters e setters são funções
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }

}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
*/

//Exemplo 3

const aluno = {
    _nota: 0,
   
    get verNota() {
      if (this._nota > 7) {
        return `Sua nota é ${this._nota}`
      }
      return 'Não passou'
    },
    
    set nota(nota) {
      this._nota = nota
    }
  }
  // Quando utilizamos set, não passamos a nota via parametro e sim via atribuição
  aluno.nota = 9;
  // E aqui não precisa utilizar () ao final de verNota
  console.log(aluno.verNota);