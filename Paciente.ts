import { GeneradorID } from "./GeneradorID";
import { Cliente } from "./Cliente";

export abstract class Paciente {
    private id: number;
    private nombre: string;

    constructor(nombre: string, idDuenio: Cliente) {
        this.nombre = nombre;
        this.id = idDuenio.getID();
    }

    public getID(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    abstract hacerRuido(): void

    
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}
