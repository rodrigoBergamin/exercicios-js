const prod1 = {}
prod1.nome = 'Celular ultrafucking'
prod1.preco = 4999.98
prod1['descontoLegal'] = 0.30 //atribuição através de colchetes


const produto = {
   nome : "celular xiaomi redmi note 7",
   info : {
       modelo: "Redmi Note 7",
       fabricacao: "2009",
       imei: 9292020192
       //objeto dentro de outro objeto
   }

}

console.log(produto)

//json é uma forma textual de intercomunicação entre sistemas, não tem haver com objetos javascript
/*atribuição por referência no endereço de memória, tipos primitivos de dados como número, boolean ou texto fazem uma atribuição por valor
e não apontam para o mesmo endereço na memória, diferentemente de objetos.*/

