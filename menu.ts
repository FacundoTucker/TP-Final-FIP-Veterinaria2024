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

export class menu{

    public mostrarMenu(){
        console.log("===========================================");
        console.log("  🐾 SISTEMA DE GESTIÓN DE VETERINARIAS 🐾 ");
        console.log("===========================================");
        console.log("Ingrese una de las siguientes opciones");
        console.log("------------------------------------------------");
        console.log("1 - Administrar Clientes");
        console.log("2 - Administrar Pacientes");
        console.log("3 - Administrar Veterinarias");
        console.log("4 - Administrar Proveedores");
        console.log("5 - Mostrar todos los datos guardados");
        console.log("6 - Cargar consulta")
        console.log("0 - Salir")
        }
    
    public seleccion(){
        let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
        let clientes = redVeterinarias.getClientes();
        let redVetes = redVeterinarias.getVeterinarias();
        let probAux=redVeterinarias.getProveedores();
        let index:number;
        switch (opcion) {
            case 1:
                this.mostrarMenuClientes();
                this.iniciar();
                break;

            case 2:
                this.mostrarMenuPacientes();
                this.iniciar()
                break;

            case 3:
                this.mostrarMenuVeterinarias();
                this.iniciar()
                break;

            case 4: this.mostrarMenuProveedores();
            this.iniciar()
            break;

            case 5:
                console.log("\n🔹 -- Veterinarias Agregadas -- 🔹");
                redVeterinarias.getVeterinarias().forEach(v => {
                console.log(`🏥 Veterinaria: ${v.getNombre()} - 📍 Dirección: ${v.getDireccion()} - ID: ${v.getID()}`);
                });

                console.log("\n📦 -- Proveedores Agregados -- 📦");
                redVeterinarias.getProveedores().forEach(p => {
                console.log(`📞 Proveedor: ${p.getNombre()} - 📱 Teléfono: ${p.getTelefono()} - ID: ${p.getID()}`);
                });

                console.log("\n👤 -- Clientes y Mascotas Agregados -- 🐾");
                redVeterinarias.getClientes().forEach(c => {
                console.log(`🧑‍⚕️ Cliente: ${c.getNombre()} - 📞 Teléfono: ${c.getTelefono()} - ID: ${c.getID()} - Vip: ${c.getEsVip()}`);
                c.getMascotas().forEach(mascota => {
                    // Verificación del tipo de mascota mediante su clase
                    let emoji = '';
                    if (mascota instanceof Perro) {
                    emoji = '🐶';
                    } else if (mascota instanceof Gato) {
                    emoji = '🐱';
                    } else if (mascota instanceof Exotico) {
                    emoji = '(Exótico)';
                    }
                    console.log(`  🐾 Mascota: ${mascota.getNombre()} ${emoji}`);
                    });
                });
                this.iniciar();
                break;

            case 6:
                if(clientes[0] === undefined){
                    console.error("No hay clientes registrados.");
                    this.iniciar();
                    break;
                }
                index = clientes.findIndex(clientes => clientes.getID() === readlineSync.questionInt("Ingrese ID del cliente: "));
                if (index !== -1) {
                    let paciente=redVeterinarias.getClientes() [index];
                    if(paciente.getMascotas()[0] !== undefined){
                        console.log(redVeterinarias.getClientes()[index].getMascotas());
                        let nroMascota : number = readlineSync.questionInt("Ingrese el NUMERO de mascota por ORDEN DE APARICION: ")
                        if(nroMascota - 1 <= paciente.getMascotas.length){
                            paciente.consultar(paciente.getMascotas()[nroMascota - 1])
                        } else {
                            console.error("Dato invalido.")
                        }
                        
                    } else {
                        console.error("El cliente no posee mascotas.");
                        this.iniciar();
                        break;
                    }          
                } else {
                    console.error("No se encontró ningún cliente con ese ID.");
                }
                this.iniciar();
                break;

            case 0: //"0 - Salir")
                console.log("\n=====================================================");
                console.log("✨ ¡Gracias por usar el sistema de veterinarias! ✨");
                console.log("=====================================================");
                break;

            default:
                console.log("Ingrese una opcion valida.");
                this.iniciar();
                break;
            }
    }

    //ejecutamos el menu
    public iniciar(){
        this.mostrarMenu();
        this.seleccion();
    }

    //menu a la hora de cargar los pacientes/mascotas
    public seleccionAgregarMascota(cliente:Cliente){
        let opcion : number = readlineSync.questionInt("Ingrese una opcion: \n\r 1 - Perro \n\r 2 - Gato \n\r 3 - Exotico \n\r 0 - Volver al menu principal \n\r");
        switch (opcion) {
            case 1:
                let nombreCan = readlineSync.question('Ingrese el nombre del paciente: ');
                let canino = new Perro(nombreCan, cliente);
                cliente.agregarMascota(canino);
                this.seleccionAgregarMascota(cliente);
                break;
            case 2:
                let nombreFelino = readlineSync.question('Ingrese el nombre del paciente: ');
                let felino = new Gato(nombreFelino, cliente);
                cliente.agregarMascota(felino);
                this.seleccionAgregarMascota(cliente);
                break;
            case 3:
                let nombreExotico = readlineSync.question('Ingrese el nombre del paciente: ');
                let exotic = new Exotico(nombreExotico, cliente);
                cliente.agregarMascota(exotic);
                this.seleccionAgregarMascota(cliente);
                break;
            case 0:
                console.log("Mascotas del cliente: ", redVeterinarias.getClientes()[0].getMascotas());
                break;
            default:
            console.error("Ingrese una opcion valida.");
            this.seleccionAgregarMascota(cliente);
            break;
        }
    }

    public mostrarMenuClientes(): void{
        console.log("===========================================");
        console.log("          👤 SECCIÓN CLIENTES 👤 ");
        console.log("===========================================");
        console.log("Ingrese una de las siguientes opciones");
        console.log("------------------------------------------------");
        console.log("1 - Cargar Cliente");
        console.log("2 - Modificar Cliente");
        console.log("3 - Eliminar Cliente");
        console.log("0 - Volver al Menu Principal");

        let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
        let clientes = redVeterinarias.getClientes();
        let index : number;
        if(opcion !== 0){
            switch(opcion){
                case 1:
                    let nuevoCliente = new Cliente(readlineSync.question("Ingrese el nombre: "), readlineSync.questionInt("Ingrese el numero de telefono: "), generador);           
                    redVeterinarias.agregarCliente(nuevoCliente);
                    console.log("Clientes:", redVeterinarias.getClientes());
                break;
                
                case 2:
                    index = clientes.findIndex(clientes => clientes.getID() === readlineSync.questionInt("Ingrese el ID del cliente: "));
                    if (index !== -1) {                
                        redVeterinarias.setCliente(redVeterinarias.getClientes()[index],readlineSync.question("Ingrese el nuevo nombre: "),readlineSync.questionInt("Ingrese el nuevo numero de telefono: ")); 
                        console.log("Clientes:", redVeterinarias.getClientes());
                    } else {
                        console.error("No se encontró ningún cliente con ese ID.");
                    }                       
                break;

                case 3:
                    index = clientes.findIndex(clientes => clientes.getID() === readlineSync.questionInt("Ingrese el ID del cliente: "));
                    if (index !== -1) {                
                        redVeterinarias.eliminarCliente(redVeterinarias.getClientes()[index]); 
                        console.log("Clientes:", redVeterinarias.getClientes());
                    } else {
                        console.error("No se encontró ningún cliente con ese ID.");
                    }                       
                break;

                default:
                    console.error("Ingrese una opción válida");
                break;
            }
            this.mostrarMenuClientes();
        } 
    }

    public mostrarMenuPacientes(): void {
        console.log("===========================================");
        console.log("          🐾 SECCIÓN PACIENTES 🐾 ");
        console.log("===========================================");
        console.log("Ingrese una de las siguientes opciones");
        console.log("------------------------------------------------");
        console.log("1 - Cargar Paciente");
        console.log("2 - Modificar Paciente");
        console.log("3 - Eliminar Paciente");
        console.log("0 - Volver al Menu Principal");

        let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
        let clientes = redVeterinarias.getClientes();
        let index:number;
        if(opcion !== 0){
            switch(opcion){
                case 1:
                    index = clientes.findIndex(cliente => cliente.getID() === readlineSync.questionInt("Ingrese el ID del cliente: "));
                    if (index !== -1) {
                        this.seleccionAgregarMascota(redVeterinarias.getClientes()[index]);
                    } else {
                        console.error("No se encontró ningún cliente con ese ID.");
                    }           
                break;

                case 2:
                    index = redVeterinarias.getClientes().findIndex(cliente => cliente.getID() === readlineSync.questionInt("Ingrese ID del cliente: "));
                    if (index !== -1) {
                        console.log("Ingrese que mascota quiere modificar: \n\r Mascotas del cliente: \n\r", redVeterinarias.getClientes()[index].getMascotas());
                        redVeterinarias.setPaciente(redVeterinarias.getClientes() [index].getMascotas()[readlineSync.questionInt("Ingrese el NUMERO de mascota por ORDEN DE APARICION: ")-1], readlineSync.question("Ingrese el nuevo nombre: "));
                        console.log("Mascotas del cliente: ", redVeterinarias.getClientes()[index].getMascotas());
                    } else {
                        console.error("No se encontró ningún cliente con ese ID.");
                    }
                break;

                case 3:
                    index = clientes.findIndex(clientes => clientes.getID() === readlineSync.questionInt("Ingrese el ID del cliente: "));
                    if (index !== -1) {
                        console.log(redVeterinarias.getClientes()[index].getMascotas());
                        let paciente=redVeterinarias.getClientes() [index];
                        let nroMascota : number = readlineSync.questionInt("Ingrese el NUMERO de mascota por ORDEN DE APARICION: ")
                        if(nroMascota - 1 <= paciente.getMascotas.length){
                            paciente.eliminarMascota(paciente.getMascotas()[nroMascota - 1]);
                        } else {
                            console.error("Dato invalido.")
                        }
            
                        console.log("Mascotas del cliente: ", redVeterinarias.getClientes()[index].getMascotas());
                    } else {
                        console.error("No se encontró ningún cliente con ese ID.");
                        break;
                    }
                break;

                default:
                    console.error("Ingrese una opción válida");
                break;
            }
            this.mostrarMenuPacientes();
        } 
    }

    public mostrarMenuVeterinarias(): void {
        console.log("===========================================");
        console.log("        🏥 SECCIÓN VETERINARIAS 🏥 ");
        console.log("===========================================");
        console.log("Ingrese una de las siguientes opciones");
        console.log("------------------------------------------------");
        console.log("1 - Cargar Veterinaria");
        console.log("2 - Modificar Veterinaria");
        console.log("3 - Eliminar Veterinaria");
        console.log("0 - Volver al Menu Principal");

        let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
        let redVetes = redVeterinarias.getVeterinarias();
        let index : number;

        if(opcion !== 0){
            switch(opcion){
                case 1:
                    let veterinaria = new Veterinaria(readlineSync.question("Ingrese el nombre de la veterinaria: "), readlineSync.question("Ingrese la direccion: "), generador);
                    redVeterinarias.agregarVeterinaria(veterinaria);
                    console.log("Veterinarias:", redVeterinarias.getVeterinarias());
                break;

                case 2:
                    index = redVetes.findIndex(redVetes => redVetes.getID() === readlineSync.questionInt("Ingrese el ID de la veterinaria: "));
                    if (index !== -1) {                
                        redVeterinarias.setVeterinaria(redVeterinarias.getVeterinarias()[index], readlineSync.question("Ingrese el nuevo nombre: "), readlineSync.question("Ingrese la nueva direccion: "));
                        console.log("Veterinarias:", redVeterinarias.getVeterinarias());
                    } else {
                        console.log("No se encontró ninguna veterinaria con ese ID.");
                    }        
                break;

                case 3:
                    index = redVetes.findIndex(redVetes => redVetes.getID() === readlineSync.questionInt("Ingrese ID de la Veterinaria: "));
                    if (index !== -1) {                
                        redVeterinarias.eliminarVeterinaria(redVeterinarias.getVeterinarias()[index]);
                        console.log("Veterinarias:", redVeterinarias.getVeterinarias());
                    } else {
                        console.error("No se encontró ninguna veterinaria con ese ID.");
                    }        
                break;

                default:
                    console.error("Ingrese una opción válida");
                break;
            }
            this.mostrarMenuVeterinarias();
        }
    }

    public mostrarMenuProveedores(): void {
        console.log("===========================================");
        console.log("        📞 SECCIÓN PROVEEDORES 📞 ");
        console.log("===========================================");
        console.log("Ingrese una de las siguientes opciones");
        console.log("------------------------------------------------");
        console.log("1 - Cargar Proveedor");
        console.log("2 - Modificar Proveedor");
        console.log("3 - Eliminar Proveedor");
        console.log("0 - Volver al Menu Principal");

        let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
        let probAux=redVeterinarias.getProveedores();
        let index : number;

        if(opcion !== 0){
            switch(opcion){
                case 1:
                    let proveedor = new Proveedor(readlineSync.question("Nombre proveedor: "),readlineSync.questionInt("Telefono: "),generador);
                    redVeterinarias.agregarProveedor(proveedor);
                    console.log("Proveedores:", redVeterinarias.getProveedores());
                break;

                case 2:
                    index = redVeterinarias.getProveedores().findIndex(probAux => probAux.getID() === readlineSync.questionInt("Ingrese ID del proveedor: "));
                    if (index !== -1) {
                        redVeterinarias.setProveedor(probAux[index], readlineSync.question("Ingrese el nuevo Nombre: "), readlineSync.questionInt("Ingrese el nuevo Telefono: "));
                        console.log("Proveedores:", redVeterinarias.getProveedores());
                    } else {
                        console.error("No se encontró ningún proveedor con ese ID.");
                    }
                break;

                case 3:
                    index = redVeterinarias.getProveedores().findIndex(probAux => probAux.getID() === readlineSync.questionInt("Ingrese ID del proveedor: "));
                    if (index !== -1) {
                        redVeterinarias.eliminarProveedor(probAux[index]);
                        console.log("Proveedores:", redVeterinarias.getProveedores());
                    } else {
                        console.error("No se encontró ningún proveedor con ese ID.");
                    }
                break;

                default:
                    console.error("Ingrese una opción válida");
                break;
            }
            this.mostrarMenuProveedores();
        }
    }
}

