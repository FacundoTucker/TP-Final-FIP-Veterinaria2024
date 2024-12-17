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
        console.log("===========================================");
        console.log("  🐾 SISTEMA DE GESTIÓN DE VETERINARIAS 🐾 ");
        console.log("===========================================");
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
        console.log("13- Mostrar todos los datos guardados.");
        console.log("0 - Salir")
        }
    
    public seleccion(){
    let opcion : number = readlineSync.questionInt("Ingrese una opcion: ");
    let clientes = redVeterinarias.getClientes();
    let redVetes = redVeterinarias.getVeterinarias();
    let probAux=redVeterinarias.getProveedores();
    let index:number;
    switch (opcion) {
        case 1://"1 - Cargar Cliente." 
            let nuevoCliente = new Cliente(readlineSync.question("Ingrese el nombre del cliente: "), readlineSync.questionInt("Ingrese el telefono del cliente: "), generador);           
            redVeterinarias.agregarCliente(nuevoCliente);
            console.log("Clientes:", redVeterinarias.getClientes());
            console.log("Mascotas del cliente: ", nuevoCliente.getMascotas());
            this.iniciar();
            break;
        case 2: //"2 - Cargar Paciente.");              
            index = clientes.findIndex(cliente => cliente.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
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
            index = clientes.findIndex(clientes => clientes.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
            if (index !== -1) {                
                redVeterinarias.setCliente(redVeterinarias.getClientes()[index],readlineSync.question("Nombre cliente: "),readlineSync.questionInt("Telefono: ")); 
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
            }                       
            console.log("Clientes:", redVeterinarias.getClientes());
            this.iniciar();
            break;
        case 6://"6 - Modificar veterinaria."
            index = redVetes.findIndex(redVetes => redVetes.getID() === readlineSync.questionInt("Ingrese Id de la Veterinaria: "));
            if (index !== -1) {                
                redVeterinarias.setVeterinaria(redVeterinarias.getVeterinarias()[index], readlineSync.question("Nombre Veterinaria: "), readlineSync.question("Direccion: ")); 
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
            }        
            console.log("Veterinarias:", redVeterinarias.getVeterinarias());
            this.iniciar();
            break;
        case 7://"7 - Modificar Paciente.""
            index = redVeterinarias.getClientes().findIndex(cliente => cliente.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
            if (index !== -1) {
                console.log("Ingrese que mascota quiere modificar: \n\r Mascotas del cliente: \n\r", redVeterinarias.getClientes()[index].getMascotas());
                redVeterinarias.setPaciente(redVeterinarias.getClientes() [index].getMascotas()[readlineSync.questionInt("Ingrese el Nro de mascota (orden de aparicion XD ): ")-1], readlineSync.question("Ingrese nuevo nombre: "));
                console.log("Mascotas del cliente: ", redVeterinarias.getClientes()[index].getMascotas());
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
                this.iniciar();
            }
            this.iniciar();
            break;
        case 8: //"8 - Modificar Proveedor."
        index = redVeterinarias.getProveedores().findIndex(probAux => probAux.getID() === readlineSync.questionInt("Ingrese Id del proveedor: "));
        if (index !== -1) {
            redVeterinarias.setProveedor(probAux[index], readlineSync.question("Ingrese nuevo nombre: "), readlineSync.questionInt("Ingrese Telefono: "));
        } else {
            console.log("No se encontró ningún proveedor con ese ID.");
        }
        console.log("Proveedores:", redVeterinarias.getProveedores());
        this.iniciar();
        break
        case 9://"9 - Eliminar Cliente.")
            index = clientes.findIndex(clientes => clientes.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
            if (index !== -1) {                
                redVeterinarias.eliminarCliente(redVeterinarias.getClientes()[index]); 
            } else {
                console.log("No se encontró ningún cliente con ese ID.");
            }     
            console.log("Clientes:", redVeterinarias.getClientes());                  
            this.iniciar();
            break;
        case 10: //"10 -Eliminar Paciente."
        index = clientes.findIndex(clientes => clientes.getID() === readlineSync.questionInt("Ingrese Id del cliente: "));
        if (index !== -1) {
            console.log(redVeterinarias.getClientes()[index].getMascotas());
            let paciente=redVeterinarias.getClientes() [index];
            paciente.eliminarMascota(paciente.getMascotas()[readlineSync.questionInt("Ingrese el Nro de mascota (orden de aparicion XD ): ")-1])
            } else {
            console.log("No se encontró ningún cliente con ese ID.");
        }
        console.log("Mascotas del cliente: ", redVeterinarias.getClientes()[index].getMascotas());
        this.iniciar();
        break;
        case 11://"11- Eliminar Proveedor."            
            index = redVeterinarias.getProveedores().findIndex(probAux => probAux.getID() === readlineSync.questionInt("Ingrese Id del proveedor: "));
            if (index !== -1) {
                redVeterinarias.eliminarProveedor(probAux[index]);
            } else {
                console.log("No se encontró ningún proveedor con ese ID.");
            }
            console.log("Proveedores:", redVeterinarias.getProveedores());
            this.iniciar();
            break;
        case 12://"12- Eliminar Veterinaria."            
            index = redVetes.findIndex(redVetes => redVetes.getID() === readlineSync.questionInt("Ingrese Id de la Veterinaria: "));
            if (index !== -1) {                
                redVeterinarias.eliminarVeterinaria(redVeterinarias.getVeterinarias()[index]); 
            } else {
                console.log("No se encontró ninguna veterinaria con ese ID.");
            }        
            console.log("Veterinarias:", redVeterinarias.getVeterinarias());
            this.iniciar();
            break;
        case 13://"12- Mostrar todos los datos."
            console.log("\n🔹 -- Veterinarias Agregadas -- 🔹");
            redVeterinarias.getVeterinarias().forEach(v => {
            console.log(`🏥 Veterinaria: ${v.getNombre()} - 📍 Dirección: ${v.getDireccion()} - Id: ${v.getID()}`);
            });

            console.log("\n📦 -- Proveedores Agregados -- 📦");
            redVeterinarias.getProveedores().forEach(p => {
            console.log(`📞 Proveedor: ${p.getNombre()} - 📱 Teléfono: ${p.getTelefono()} - Id: ${p.getID()}`);

            console.log("\n👤 -- Clientes y Mascotas Agregados -- 🐾");
            redVeterinarias.getClientes().forEach(c => {
              console.log(`🧑‍⚕️ Cliente: ${c.getNombre()} - 📞 Teléfono: ${c.getTelefono()} - Id: ${c.getID()} - Vip: ${c.getEsVip()}`);
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
        });
        this.iniciar();
        break;
        case 0: //"0 - Salir")
            console.log("\n===========================================");
            console.log("✨ ¡Gracias por usar el sistema de veterinarias! ✨");
            console.log("===========================================");
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

