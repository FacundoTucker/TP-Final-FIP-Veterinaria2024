import { GeneradorID } from "./GeneradorID";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Exotico } from "./Exotico";
import { Proveedor } from "./Proveedor";
import { RedVeterinarias } from "./RedVeterinarias";

const generador = new GeneradorID();

const redVeterinarias = new RedVeterinarias();

const veterinaria = new Veterinaria("Vet Central", "Calle Falsa 123", generador);
const clienteJuan = new Cliente("Juan Pérez", "123456789", generador);

const pacienteFirulais = new Perro("Firulais", clienteJuan, generador);
const pacienteMichi = new Gato("Michi", clienteJuan, generador);
const pacienteLoro = new Exotico("Loro Pepe", clienteJuan, generador, "pio pio");

const proveedor = new Proveedor("Proveedor ABC", "123123123", generador);

redVeterinarias.agregarVeterinaria(veterinaria);
redVeterinarias.agregarCliente(clienteJuan);
redVeterinarias.agregarPaciente(pacienteFirulais);
redVeterinarias.agregarPaciente(pacienteMichi);
redVeterinarias.agregarPaciente(pacienteLoro);
redVeterinarias.agregarProveedor(proveedor);

clienteJuan.agregarMascota(pacienteFirulais);
clienteJuan.agregarMascota(pacienteMichi);
clienteJuan.agregarMascota(pacienteLoro);

clienteJuan.consultar(pacienteFirulais); //consulta con determinada mascota pero siempre el mismo dueño
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteMichi);
clienteJuan.consultar(pacienteLoro);


console.log("Veterinarias:", redVeterinarias.getVeterinarias());
console.log("Clientes:", redVeterinarias.getClientes());
console.log("Pacientes:", redVeterinarias.getPacientes());
console.log("Proveedores:", redVeterinarias.getProveedores());