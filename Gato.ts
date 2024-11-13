import { Paciente } from "./Paciente"

export class Gato extends Paciente {
    public hacerRuido(): void {
        console.log("Miauuu")
    }
}