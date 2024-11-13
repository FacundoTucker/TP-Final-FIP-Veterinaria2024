import { Paciente } from "./Paciente";

export class Perro extends Paciente {
    
    public hacerRuido(): void {
        console.log("Guau Guauuuu");
    }
}