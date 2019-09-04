const obj = {a: 1, b: 2, c: 3, soma(){return a + b +c}}
console.log(JSON.stringify(obj)) //convertendo um objeto para JSON

console.log(JSON.parse(    '{"a":1, "b":2, "c":3}'    )) //convertendo um JSON para objeto

console.log(JSON.parse(  '{"a":1, "b":true, "c": "string", "d": [], "e":{}}'   )) //convertendo um JSON para objeto