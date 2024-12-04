import { Paciente } from "./Paciente"
import { Cliente } from "./Cliente";

export class Exotico extends Paciente {

    constructor(nombre: string, idDuenio: Cliente){
        super(nombre,idDuenio)
    }

}