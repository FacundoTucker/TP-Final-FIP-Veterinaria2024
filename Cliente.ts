import { GeneradorID } from "./GeneradorID";
import { Paciente } from "./Paciente";

export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: string;
    private visitas: number = 0;
    private esVip: boolean = false;
    private mascotas: Paciente[] = [];

    constructor(nombre: string, telefono: string, generador: GeneradorID) {
        this.id = generador.generarIDUnico(); // usamos el generador de ID único
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public incrementarVisitas(): void {
        this.visitas += 1;
        if (this.visitas >= 5) {
            this.esVip = true;
        }
    }

    public getID(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getTelefono(): string {
        return this.telefono;
    }


    public consultar(mascota: Paciente): void {
        console.log("Consulta realizada a: " + mascota.getNombre());
        this.incrementarVisitas();
    }

    public agregarMascota(mascota: Paciente): void {
        this.mascotas.push(mascota);
    }
}
