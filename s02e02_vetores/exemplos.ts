//referencia         = objeto
//local              = valor
let cafe: string[] = ["ovo", "cuscuz", "calabrezzza"]

console.log(cafe[0]); //ovo
console.log(cafe[2]); //calabrezzza

cafe.push("frango");
console.log(cafe);
cafe.push("bacon");
cafe.push("feijao");
cafe.push("macarrao");
console.log(cafe);
let comida = cafe.pop();
console.log(comida); //macarrao | undefined
console.log(cafe);
cafe.shift(); //ovo
console.log(cafe); //[ 'cuscuz', 'calabrezzza', 'frango', 'bacon', 'feijao' ]

//posicao, quantos_saem, quem_entra
cafe.splice(1, 3, "toicinho", "orelha");

// for indexado
//quando eu preciso controlar onde começa ou termina
//quando eu preciso do indice
//quando voce quer alterar quem esta nesse indice
for (let i = 0; i < cafe.length; i++) {
    console.log(cafe[i]);
}

//for range
for (let comida of cafe) {
    console.log(comida);
}
