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
        console.log("8 - Modificar proveedor.");
        console.log("9 - Eliminar Cliente.");
        console.log("10 -Eliminar Paciente.");
        console.log("11- Eliminar Proveedor.");
        console.log("12- Eliminar Veterinaria.");
        console.log("0 - Salir")
        }
    
    public seleccion(){
    let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
    let clientes = redVeterinarias.getClientes();
    let clienteauxiliar = redVeterinarias.getClientes();
    let redVetes = redVeterinarias.getVeterinarias();
    let preveAux=redVeterinarias.getProveedores();
    let probAux=redVeterinarias.getProveedores();
    let redVetes2 = redVeterinarias.getVeterinarias();
    switch (opcion) {
        case 1://"1 - Cargar Cliente." 
            let nuevoCliente = new Cliente(readlineSync.question("Ingrese el nombre del cliente: "), readlineSync.questionInt("Ingrese el telefono del cliente: "), generador);           
            redVeterinarias.agregarCliente(nuevoCliente);
            console.log("Clientes:", redVeterinarias.getClientes());
            console.log("Mascotas del cliente: ", nuevoCliente.getMascotas());
            this.iniciar();
            break;
        case 2: //"2 - Cargar Paciente.");              
            let index = clientes.findIndex(cliente => cliente.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
            if (index !== -1) {
                this.seleccion2(redVeterinarias.getClientes()[index]);
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
            }           
            console.log("Clientes:", redVeterinarias.getClientes());
            this.iniciar();
            break;
        case 3://"3 - Cargar Proveedor."
            let proveedor = new Proveedor(readlineSync.question("Nombre proveedor: "),readlineSync.questionInt("Telefono: "),generador);
            redVeterinarias.agregarProveedor(proveedor);
            console.log("Proveedores:", redVeterinarias.getProveedores());
            this.iniciar();
            break;
        case 4: //"4 - Cargar Veterinaria."
            let veterinaria = new Veterinaria(readlineSync.question("Nombre veterinaria: "), readlineSync.question("Direccion: "), generador);
            redVeterinarias.agregarVeterinaria(veterinaria);
            console.log("Veterinarias:", redVeterinarias.getVeterinarias());
            this.iniciar();
            break;
        case 5://"5 - Modificar Cliente.")
            let indice = clienteauxiliar.findIndex(clienteauxiliar => clienteauxiliar.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
            if (indice !== -1) {                
                redVeterinarias.setCliente(redVeterinarias.getClientes()[indice],readlineSync.question("Nombre cliente: "),readlineSync.questionInt("Telefono: ")); 
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
            }                       
            console.log("Clientes:", redVeterinarias.getClientes());
            this.iniciar();
            break;
        case 6://"6 - Modificar veterinaria."
            let indiceDos = redVetes.findIndex(redVetes => redVetes.getID() === readlineSync.questionInt("Ingrese Id de la Veterinaria: "));
            if (indiceDos !== -1) {                
                redVeterinarias.setVeterinaria(redVeterinarias.getVeterinarias()[indiceDos], readlineSync.question("Nombre Veterinaria: "), readlineSync.question("Direccion: ")); 
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
            }        
            console.log("Veterinarias:", redVeterinarias.getVeterinarias());
            this.iniciar();
            break;
        case 7://"7 - Modificar Paciente.""
            let indisote = redVeterinarias.getClientes().findIndex(cliente => cliente.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
            if (indisote !== -1) {
                console.log("Ingrese que mascota quiere modificar: \n\r Mascotas del cliente: \n\r", redVeterinarias.getClientes()[indisote].getMascotas());
                redVeterinarias.setPaciente(redVeterinarias.getClientes() [indisote].getMascotas()[readlineSync.questionInt("Ingrese el Nro de mascota (orden de aparicion XD ): ")-1], readlineSync.question("Ingrese nuevo nombre: "));
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
                this.iniciar();
            }
            console.log("Mascotas del cliente: ", redVeterinarias.getClientes()[indisote].getMascotas());
            this.iniciar();
            break;
        case 8: //"8 - Modificar Proveedor."
        let indexProveedor = redVeterinarias.getProveedores().findIndex(preveAux => preveAux.getID() === readlineSync.questionInt("Ingrese Id del proveedor: "));
        if (indexProveedor !== -1) {
            redVeterinarias.setProveedor(preveAux[indexProveedor], readlineSync.question("Ingrese nuevo nombre: "), readlineSync.questionInt("Ingrese Telefono: "));
        } else {
            console.log("No se encontró ningún proveedor con ese ID.");
        }
        console.log("Proveedores:", redVeterinarias.getProveedores());
        this.iniciar();
        break
        case 9://"9 - Eliminar Cliente.")
            let clienteauxiliar2 = redVeterinarias.getClientes();
            let indexModificar = clienteauxiliar2.findIndex(clienteauxiliar2 => clienteauxiliar2.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
            if (indexModificar !== -1) {                
                redVeterinarias.eliminarCliente(redVeterinarias.getClientes()[indexModificar]); 
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
            }     
            console.log("Clientes:", redVeterinarias.getClientes());                  
            this.iniciar();
            break;
        case 10: //"10 -Eliminar Paciente."
        let indexPteAEliminar = redVeterinarias.getClientes().findIndex(cliente => cliente.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
        if (indexPteAEliminar !== -1) {
            console.log(redVeterinarias.getClientes()[indexPteAEliminar].getMascotas());
            let paciente=redVeterinarias.getClientes() [indexPteAEliminar];
            paciente.eliminarMascota(paciente.getMascotas()[readlineSync.questionInt("Ingrese el Nro de mascota (orden de aparicion XD ): ")-1])
            } else {
            console.log("No se encontró ningún cliente con ese ID.");
        }
        console.log("Mascotas del cliente: ", redVeterinarias.getClientes()[indexPteAEliminar].getMascotas());
        this.iniciar();
        break;
        case 11://"11- Eliminar Proveedor."            
            let indexProvAelim = redVeterinarias.getProveedores().findIndex(probAux => probAux.getID() === readlineSync.questionInt("Ingrese Id del proveedor: "));
            if (indexProvAelim !== -1) {
                redVeterinarias.eliminarProveedor(probAux[indexProvAelim]);
            } else {
                console.log("No se encontró ningún proveedor con ese ID.");
            }
            console.log("Proveedores:", redVeterinarias.getProveedores());
            this.iniciar();
            break;
        case 12://"12- Eliminar Veterinaria."            
            let indexDos = redVetes2.findIndex(redVetes2 => redVetes2.getID() === readlineSync.questionInt("Ingrese Id de la Veterinaria: "));
            if (indexDos !== -1) {                
                redVeterinarias.eliminarVeterinaria(redVeterinarias.getVeterinarias()[indexDos]); 
            } else {
                console.log("No se encontró ninguna veterinaria con ese ID.");
            }        
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
                let exotic = new Exotico(nombreExotico, cliente);
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

