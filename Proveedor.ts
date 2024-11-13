import { GeneradorID } from "./GeneradorID";

export class Proveedor {
    private id: number;
    private nombre: string;
    private telefono: string;

    constructor(nombre: string, telefono: string, generador: GeneradorID) {
        this.id = generador.generarIDUnico(); // usamos el generador de ID único
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public getID(): number {
        return this.id;
    }
}