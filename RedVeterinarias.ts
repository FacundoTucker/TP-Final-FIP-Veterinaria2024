import { GeneradorID } from "./GeneradorID";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

export class RedVeterinarias {
    private veterinarias: Veterinaria[] = [];
    private clientes: Cliente[] = [];
    private pacientes: Paciente[] = [];
    private proveedores: Proveedor[] = [];

    public agregarVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
    }

    public agregarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    public agregarPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
    }

    public agregarProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
    }

    // Getters
    public getVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

    public getPacientes(): Paciente[] {
        return this.pacientes;
    }

    public getProveedores(): Proveedor[] {
        return this.proveedores;
    }
}