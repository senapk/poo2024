//explicita e forte
let nome: string = "david";
let letraInicial = "d";
let letra = nome[0];

let qtd: number = 3;
let valor: number = 4.566;
let res = Math.floor(valor) * 2;

let ehDia: boolean = false;

let batata: undefined = undefined;

function imprimeNumero(valor: number): void {
    console.log(valor);
}

let mungango: any = 5;
mungango = "eita pleura";
mungango = false;

let numero: number | string = 0;
numero = "zero";

let namorada: string | null = null;
namorada = "dina";
namorada = null;

function procurarPretendente(nome: string, temJuizo: boolean, bebe: boolean): string[] | null {
    return null;
} 

//syntatic sugar
let frutas: string[] = ["banana", "uva", "pessego"];
let animais: Array<string> = ["dog", "cat", "bunny"];
let numeros: Array<string | number> = [1, 2, "tres", 4];

let x: number = 5;
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("vamos todos tirar " + nota);