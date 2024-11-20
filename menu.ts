import * as readlineSync from "readline-sync";
import { RedVeterinarias } from "./RedVeterinarias";
import { GeneradorID } from "./GeneradorID";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Exotico } from "./Exotico";
import { Proveedor } from "./Proveedor";

const generador = new GeneradorID();
const redVeterinarias = new RedVeterinarias();
const veterinaria = new Veterinaria("Veterinaria M1", "Vicente Lopez 2037", generador);
const clienteJuan = new Cliente("Juan Pérez", 123456789, generador);

const pacienteFirulais = new Perro("Firulais", clienteJuan);
const pacienteMichi = new Gato("Michi", clienteJuan);
const pacienteLoro = new Exotico("Loro Pepe", clienteJuan, "pio pio");

const proveedor = new Proveedor("Proveedor ABC", 123123123, generador);

console.log("Veterinarias:", redVeterinarias.getVeterinarias());
console.log("Clientes:", redVeterinarias.getClientes());
console.log("Mascotas del cliente: ", clienteJuan.getMascotas());  //tambien podemos agregar las mascotas a la red como pacientes
console.log("Proveedores:", redVeterinarias.getProveedores());

export class menu{

    public mostrarMenu(){
        console.log("◊◊◊◊◊◊◊◊◊◊◊◊ CADENA DE VETERINARIAS ◊◊◊◊◊◊◊◊◊◊◊◊")
        console.log("Ingrese una de las siguientes opciones");
        console.log("------------------------------------------------");
        console.log("1 - Cargar Cliente.");
        console.log("2 - Cargar Paciente.");
        console.log("3 - Cargar Proveedor.");
        console.log("4 - Cargar Veterinaria.");
        console.log("5 - Modificar Cliente.");
        console.log("6 - Modificar Paciente.");
        console.log("7 - Modificar Proveedor.");
        console.log("8 - Modificar Veterinaria.");
        console.log("9 - Eliminar Cliente.");
        console.log("10 -Eliminar Paciente.");
        console.log("11- Eliminar Proveedor.");
        console.log("12- Eliminar Veterinaria.");
        console.log("0 - Salir")
        }
    
    public seleccion(){
    let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
    switch (opcion) {
        case 1://"1 - Cargar Cliente."            
            redVeterinarias.agregarCliente(clienteJuan);
            console.log("Clientes:", redVeterinarias.getClientes());
            this.iniciar();
            break;
        case 2: //"2 - Cargar Paciente.");
            clienteJuan.agregarMascota(pacienteFirulais);
            clienteJuan.agregarMascota(pacienteMichi);
            clienteJuan.agregarMascota(pacienteLoro);
            console.log("Mascotas del cliente: ", clienteJuan.getMascotas());  //tambien podemos agregar las mascotas a la red como pacientes
            this.iniciar();
            break;
        case 3://"3 - Cargar Proveedor."
            redVeterinarias.agregarProveedor(proveedor);
            console.log("Proveedores:", redVeterinarias.getProveedores());
            this.iniciar();
            break;
        case 4: //"4 - Cargar Veterinaria."
            redVeterinarias.agregarVeterinaria(veterinaria);
            console.log("Veterinarias:", redVeterinarias.getVeterinarias());
            this.iniciar();
            break;
        case 5://"5 - Modificar Cliente.")
            redVeterinarias.setCliente(clienteJuan, "juanete")
            console.log("Clientes:", redVeterinarias.getClientes());
            this.iniciar();
            break;
        case 6://"6 - Modificar Paciente.""
            redVeterinarias.setPaciente(pacienteFirulais, "Scooby");
            redVeterinarias.setPaciente(pacienteMichi, "Gaturro");
            redVeterinarias.setPaciente(pacienteLoro, "Parlanchín");
            console.log("Mascotas del cliente: ", clienteJuan.getMascotas()); //tambien podemos agregar las mascotas a la red como pacientes
            this.iniciar();
            break;
        case 7: //"7 - Modificar Proveedor."
            redVeterinarias.setProveedor(proveedor,"proveedooor", 34553434);
            console.log("Proveedores:", redVeterinarias.getProveedores());
            this.iniciar();
            break;
        case 8://"8 - Modificar veterinaria."
            redVeterinarias.setVeterinaria(veterinaria, "Veterinaria M3", "Coronel Suarez 5400");
            console.log("Veterinarias:", redVeterinarias.getVeterinarias());
            this.iniciar();
            break;
        case 9://"9 - Eliminar Cliente.")
            redVeterinarias.eliminarCliente(clienteJuan);
            console.log("Clientes:", redVeterinarias.getClientes());
            this.iniciar();
            break;
        case 10: //"10 -Eliminar Paciente."
            clienteJuan.eliminarMascota(pacienteFirulais);
            clienteJuan.eliminarMascota(pacienteMichi);
            clienteJuan.eliminarMascota(pacienteLoro);
            console.log("Mascotas del cliente: ", clienteJuan.getMascotas());  //tambien podemos agregar las mascotas a la red como pacientes
            this.iniciar();
            break;
        case 11://"11- Eliminar Proveedor."
            redVeterinarias.eliminarProveedor(proveedor);
            console.log("Proveedores:", redVeterinarias.getProveedores());
            this.iniciar();
            break;
        case 12://"12- Eliminar Veterinaria."
            redVeterinarias.eliminarVeterinaria(veterinaria);
            console.log("Veterinarias:", redVeterinarias.getVeterinarias());
            this.iniciar();
            break;
        case 0: //"0 - Salir")
            console.log("¡Hasta Luego!");
            break;
        default:
            console.log("Ingrese una opcion valida.");
            this.iniciar();
            break;
    }
    }
    public iniciar(){
        this.mostrarMenu();
        this.seleccion();
    }
}

