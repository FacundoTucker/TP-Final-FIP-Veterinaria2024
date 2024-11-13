import { Paciente } from "./Paciente"
import { GeneradorID } from "./GeneradorID";
import { Cliente } from "./Cliente";

export class Exotico extends Paciente {
    private ruido : string;

    constructor(nombre: string, idDuenio: Cliente, generador: GeneradorID, ruido : string){
        super(nombre,idDuenio,generador)
        this.ruido = ruido;
    }
    public hacerRuido(): void {
        console.log(this.ruido)
    }
}