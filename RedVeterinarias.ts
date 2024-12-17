import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

export class RedVeterinarias {
    private veterinarias: Veterinaria[] = [];
    private clientes: Cliente[] = [];
    //private pacientes: Paciente[] = [];
    private proveedores: Proveedor[] = [];

    //metodos agregar
    public agregarVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
        console.log("Veterinaria " + veterinaria.getNombre() + " agregada con exito");
    }
    public agregarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log("Cliente " + cliente.getNombre() + " agregado con exito");
    }
    public agregarProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
        console.log("Proveedor " + proveedor.getNombre() + " agregado con exito");
    }

    //metodos eliminar
    public eliminarVeterinaria(veterinariaAEliminar: Veterinaria): void {
        const index = this.veterinarias.indexOf(veterinariaAEliminar);
        if (index !== -1){
            this.veterinarias.splice(index, 1);
            console.log("Veterinaria " + veterinariaAEliminar.getNombre() + " eliminado con exito");
        }
    }
    public eliminarCliente(clienteAEliminar: Cliente): void {
        const index = this.clientes.indexOf(clienteAEliminar);
        if (index !== -1){
            this.clientes.splice(index, 1);
            console.log("Cliente " + clienteAEliminar.getNombre() + " eliminado con exito");
        }

    }
    public eliminarProveedor(proveedorAEliminar: Proveedor): void {
        const index = this.proveedores.indexOf(proveedorAEliminar);
        if (index !== -1) {
            this.proveedores.splice(index, 1);
            console.log("Proveedor " + proveedorAEliminar.getNombre() + " eliminado con exito")
        }
    }

    // Getters
    public getVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }
    public getClientes(): Cliente[] {
        return this.clientes;
    }
    public getProveedores(): Proveedor[] {
        return this.proveedores;
    }

    //setters
    public setVeterinaria(veterinariaAModificar : Veterinaria, nombreNuevo : string, direccionNueva : string) : void {
        if(veterinariaAModificar != undefined && nombreNuevo != undefined && direccionNueva != undefined){
            veterinariaAModificar.setNombre(nombreNuevo);
            veterinariaAModificar.setDireccion(direccionNueva);
            console.log("Veterinaria modificada con exito.")
        } else {
            console.error("Datos ingresados no validos.")
        }
    }
    public setCliente(clienteAModificar : Cliente, nombreNuevo : string, telefonoNuevo : number) : void {
        if(clienteAModificar != undefined && nombreNuevo != undefined && telefonoNuevo != undefined){
            clienteAModificar.setNombre(nombreNuevo);
            clienteAModificar.setTelefono(telefonoNuevo);
            console.log("Cliente modificado con exito.")
        } else {
            console.error("Datos ingresados no validos.")
        }
    }
    public setPaciente(pacienteAModificar : Paciente, nombreNuevo : string): void {
        if(pacienteAModificar != undefined && nombreNuevo != undefined){
            pacienteAModificar.setNombre(nombreNuevo);
            console.log("Paciente modificado con exito.")
        } else {
            console.error("Datos ingresados no validos.")
        }
    }
    public setProveedor(proveedorAModificar : Proveedor, nombreNuevo : string, telefonoNuevo : number) : void {
        if(proveedorAModificar != undefined && nombreNuevo != undefined && telefonoNuevo != undefined){
            proveedorAModificar.setNombre(nombreNuevo);
            proveedorAModificar.setTelefono(telefonoNuevo);
            console.log("Proveedor modificado con exito.")
        } else {
            console.error("Datos ingresados no validos.")
        }
    }
}
