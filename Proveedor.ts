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

    public getNombre(): string {
         return this.nombre;
    }

    public getTelefono(): string {
        return this.nombre;
    }

    public getID(): number {
        return this.id;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }
}
