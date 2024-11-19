import { Paciente } from "./Paciente"
import { GeneradorID } from "./GeneradorID";
import { Cliente } from "./Cliente";

export class Exotico extends Paciente {
    private ruido : string;

    constructor(nombre: string, idDuenio: Cliente, ruido : string){
        super(nombre,idDuenio)
        this.ruido = ruido;
    }
    
    public hacerRuido(): void {
        console.log(this.ruido)
    }
}