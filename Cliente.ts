import { GeneradorID } from "./GeneradorID";
import { Paciente } from "./Paciente";

export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: number;
    private visitas: number = 0;
    private esVip: boolean = false;
    private mascotas: Paciente[] = [];

    constructor(nombre: string, telefono: number, generador: GeneradorID) {
        this.id = generador.generarIDUnico(); // usamos el generador de ID único
        this.nombre = nombre;
        this.telefono = telefono;
    }

    //getters
    public getID(): number {
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getTelefono(): number {
        return this.telefono;
    }
    public getEsVip() : boolean {
        return this.esVip;
    }
    public getMascotas(): Paciente[] {
        return this.mascotas;
    }

    //setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    //metodo incrementar visitas
    public incrementarVisitas(): void {
        this.visitas += 1;
        if (this.visitas >= 5) {
            this.esVip = true;
        }
    }

    //metodo de consulta que implementa el metodo incrementarVisita
    public consultar(mascota: Paciente): void {
        console.log("Consulta realizada a: " + mascota.getNombre());
        this.incrementarVisitas();
    }

    //metodo agregar mascota
    public agregarMascota(mascota: Paciente): void {
        this.mascotas.push(mascota);
    }

    //metodo eliminar mascota
    public eliminarMascota(mascotaAEliminar: Paciente): void {
        const index = this.mascotas.indexOf(mascotaAEliminar);
        if (index !== -1) this.mascotas.splice(index, 1);
    }
}
