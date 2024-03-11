
// Nesse rascunho esta faltando a parte de dirigir o carro


class Car{ //atributos
    pass: number; // Passageiros
    passMax: number; // limite de Passageiros
    gas: number; // tanque
    gasMax: number; // limite do tanque
    km: number; // quantidade de quilometragem

    constructor() { //métodos
        this.pass = 0;
        this.passMax = 2;
        this.gas = 0;
        this.gasMax = 100;
        this.km = 0;
    }

    enter(): void {
        //clausulas de guarda
        if (this.pass == this.passMax) {
            console.log("fail: limite de pessoas atingido");
            return;
        }
        this.pass += 1;
    }

    leave(): void {
        if (this.pass == 0) {
            console.log("fail: nao ha ninguem no carro");
            return;
        }
        this.pass -= 1;
    }

    drive(dist: number): void {
        if (this.pass == 0) {
            console.log("fail: nao ha ninguem no carro");
            return;
        }
        this.gas -= dist;
        this.km += dist;
    }

    fuel(gas: number): void {
        this.gas += gas;
    }
    
    toString(): string {
        return `pass: ${this.pass}, gas: ${this.gas}, km: ${this.km}`;
    }
};


let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

function main() {
    let car = new Car();

    while (true) {
        let line = input();
        write("$" + line);
        let args = line.split(" ");

        if      (args[0] === "show")  { write(car.toString());          }
        else if (args[0] === "enter") { car.enter();                    }
        else if (args[0] === "leave") { car.leave();                    }
        else if (args[0] === "drive") { car.drive(+args[1])}
        else if (args[0] === "fuel")  { car.fuel(+args[1]);             }
        else if (args[0] === "end")   { break;                          }
        else                          { write("fail: comando invalido");}
    }
}

main()

