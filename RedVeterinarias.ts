import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

export class RedVeterinarias {
    private veterinarias: Veterinaria[] = [];
    private clientes: Cliente[] = [];
    private pacientes: Paciente[] = [];
    private proveedores: Proveedor[] = [];

    //metodos agregar
    public agregarVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
    }
    public agregarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }
    public agregarPaciente(paciente : Paciente) : void {
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

    //setters
    public setVeterinaria(veterinariaAModificar : Veterinaria, nombreNuevo : string, direccionNueva : string) : void {
        veterinariaAModificar.setNombre(nombreNuevo);
        veterinariaAModificar.setDireccion(direccionNueva);
    }
    public setCliente(clienteAModificar : Cliente, nombreNuevo : string, telefonoNuevo : number) : void {
        clienteAModificar.setNombre(nombreNuevo);
        clienteAModificar.setTelefono(telefonoNuevo);
    }
    public setPaciente(pacienteAModificar : Paciente, nombreNuevo : string): void {
        pacienteAModificar.setNombre(nombreNuevo);
    }
    public setProveedor(proveedorAModificar : Cliente, nombreNuevo : string, telefonoNuevo : number) : void {
        proveedorAModificar.setNombre(nombreNuevo);
        proveedorAModificar.setTelefono(telefonoNuevo);
    }
}
