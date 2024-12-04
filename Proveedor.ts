import { GeneradorID } from "./GeneradorID";

export class Proveedor {
    private id: number;
    private nombre: string;
    private telefono: number;

    constructor(nombre: string, telefono: number, generador: GeneradorID) {
        this.id = generador.generarIDUnico(); // usamos el generador de ID único
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public getNombre(): string {
         return this.nombre;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public getID(): number {
        return this.id;
    }

    public setNombre(nombre: string): void {
        if(nombre != undefined){
            this.nombre = nombre;
        } else {
            console.error("Datos ingresados no validos.")
        }
    }
    public setTelefono(telefono: number): void {
        if(telefono != undefined){
            this.telefono = telefono;
        } else {
            console.error("Datos ingresados no validos.")
        }
    }
}
