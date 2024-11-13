import { GeneradorID } from "./GeneradorID";

export class Veterinaria {
    private id: number;
    private nombre: string;
    private direccion: string;

    constructor(nombre: string, direccion: string, generador: GeneradorID) {
        this.id = generador.generarIDUnico();//usamos el generador de ID unico
        this.nombre = nombre;
        this.direccion = direccion;
    }
    
    public getNombre(): string {
        return this.nombre;
    }

    public getDireccion(): string {
        return this.direccion;
    }
    public getID(): number {
        return this.id;
    }
}
