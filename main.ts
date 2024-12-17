import {menu} from "./menu";
/*import { GeneradorID } from "./GeneradorID";
import { Cliente } from "./Cliente";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Exotico } from "./Exotico";
import { Proveedor } from "./Proveedor";
import { RedVeterinarias } from "./RedVeterinarias";
import { Veterinaria } from "./Veterinaria";*/

/*const generador = new GeneradorID();
const redVeterinarias = new RedVeterinarias();

const veterinariaM1 = new Veterinaria("Veterinaria M1", "Vicente Lopez 2037", generador);
const veterinariaAnimalia = new Veterinaria("Animalia", "Avenida Colon 704", generador);

const clienteJuan = new Cliente("Juan Perez", 2494556622, generador);
const clienteMaria = new Cliente("María López", 2284123455, generador);

const pacienteFirulais = new Perro("Firulais", clienteJuan);
const pacienteMichi = new Gato("Michi", clienteJuan);
const pacienteLoro = new Exotico("Loro Pepe", clienteJuan);

const pacienteOso = new Perro("Oso", clienteMaria);
const pacienteIguana = new Exotico("Iguana verde", clienteMaria);

const proveedor = new Proveedor("Proveedor Alimentar", 2284037890, generador);

// Agregar Veterinarias
redVeterinarias.agregarVeterinaria(veterinariaM1);
redVeterinarias.agregarVeterinaria(veterinariaAnimalia);

// Agregar Proveedores
redVeterinarias.agregarProveedor(proveedor);

// Agregar Clientes
redVeterinarias.agregarCliente(clienteJuan);
redVeterinarias.agregarCliente(clienteMaria);

// Agregar Mascotas a los Clientes
clienteJuan.agregarMascota(pacienteFirulais);
clienteJuan.agregarMascota(pacienteMichi);
clienteJuan.agregarMascota(pacienteLoro);

clienteMaria.agregarMascota(pacienteOso);
clienteMaria.agregarMascota(pacienteIguana);

// Realizar Consultas (Incrementar Visitas)
console.log("\n🩺 -- Consultas Realizadas -- 🩺");
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteLoro);
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteMichi);
clienteJuan.consultar(pacienteFirulais);
clienteMaria.consultar(pacienteOso);
clienteMaria.consultar(pacienteIguana);
clienteMaria.consultar(pacienteOso);



clienteJuan.consultar(pacienteFirulais); //consulta con determinada mascota pero siempre el mismo dueño
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteMichi);
clienteJuan.consultar(pacienteLoro);*/


let Menu = new menu()

Menu.iniciar();