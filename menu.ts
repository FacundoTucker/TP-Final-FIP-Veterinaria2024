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

// const pacienteFirulais = new Perro("Firulais", clienteJuan);
// const pacienteMichi = new Gato("Michi", clienteJuan);
// const pacienteLoro = new Exotico("Loro Pepe", clienteJuan, "pio pio");

const proveedor = new Proveedor("Proveedor ABC", 123123123, generador);

console.log("Veterinarias:", redVeterinarias.getVeterinarias());
console.log("Clientes:", redVeterinarias.getClientes());
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
        console.log("6 - Modificar veterinaria.");
        console.log("7 - Modificar paciente.");
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
            let nombre = readlineSync.question('Ingrese el nombre del cliente: ');
            let tel = parseInt(readlineSync.question('Ingrese el telefono del cliente: '));
            const nuevoCliente = new Cliente(nombre, tel, generador);           
            redVeterinarias.agregarCliente(nuevoCliente);
            console.log("Clientes:", redVeterinarias.getClientes());
            console.log("Mascotas del cliente: ", nuevoCliente.getMascotas());  //tambien podemos agregar las mascotas a la red como pacientes
            this.iniciar();
            break;
        case 2: //"2 - Cargar Paciente.");           
            this.seleccion2(redVeterinarias.getClientes()[0]);
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
            this.iniciar();
            redVeterinarias.setCliente(nuevoCliente, "juanete")
            console.log("Clientes:", redVeterinarias.getClientes());
            break;
        case 6://"6 - Modificar veterinaria."
            redVeterinarias.setVeterinaria(veterinaria, "Veterinaria M3", "Coronel Suarez 5400");
            console.log("Veterinarias:", redVeterinarias.getVeterinarias());
            this.iniciar();
            break;
        case 7://"7 - Modificar Paciente.""
            // redVeterinarias.setPaciente(pacienteFirulais, "firu2");
            this.iniciar();
            console.log("Mascotas del cliente: ", nuevoCliente.getMascotas());  //tambien podemos agregar las mascotas a la red como pacientes
            break;
        case 8: //"8 - Modificar Proveedor."
            redVeterinarias.setProveedor(proveedor,"proveedooor", 34553434);
            console.log("Proveedores:", redVeterinarias.getProveedores());
            this.iniciar();
            break;
        case 9://"9 - Eliminar Cliente.")
            // redVeterinarias.eliminarCliente(nuevoCliente);
            console.log("Clientes:", redVeterinarias.getClientes());
            this.iniciar();
            break;
        case 10: //"10 -Eliminar Paciente."
            // clienteJuan.eliminarMascota(pacienteFirulais);
            console.log("Mascotas del cliente: ", nuevoCliente.getMascotas());  //tambien podemos agregar las mascotas a la red como pacientes
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
    public seleccion2(cliente:Cliente){
        let opcion : number = readlineSync.questionInt("Ingrese una opcion: \n\r 1_ Perro \n\r 2_Gato \n\r 3_Exotico \n\r 0_Volver al menu anterior \n\r");
        switch (opcion) {
            case 1:
                let nombreCan = readlineSync.question('Ingrese el nombre del paciente: ');
                let canino = new Perro(nombreCan, cliente);
                cliente.agregarMascota(canino);
                this.seleccion2(cliente);
                break;
            case 2:
                let nombreFelino = readlineSync.question('Ingrese el nombre del paciente: ');
                let felino = new Gato(nombreFelino, cliente);
                cliente.agregarMascota(felino);
                this.seleccion2(cliente);
                break;
            case 3:
                let nombreExotico = readlineSync.question('Ingrese el nombre del paciente: ');
                let onomatopeya = readlineSync.question('Ingrese onomatopeya: ');
                let exotic = new Exotico(nombreExotico, cliente, onomatopeya);
                cliente.agregarMascota(exotic);
                this.seleccion2(cliente);
                break;
            case 0:
                console.log("Mascotas del cliente: ", redVeterinarias.getClientes()[0].getMascotas());  //tambien podemos agregar las mascotas a la red como pacientes
                this.iniciar();
                break;
            default:
            console.log("Ingrese una opcion valida.");
            this.seleccion2(cliente);
            break;
        }
    }
}

