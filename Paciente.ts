import { Cliente } from "./Cliente";

export class Paciente {
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
    
    public setNombre(nombre: string): void {
        if(nombre != undefined){
            this.nombre = nombre;
        } else {
            console.error("Datos ingresados no validos.")
        }
    }
}
