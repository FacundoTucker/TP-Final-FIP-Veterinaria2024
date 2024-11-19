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

const veterinaria = new Veterinaria("Veterinaria M1", "Vicente Lopez 2037", generador);
const clienteJuan = new Cliente("Juan Pérez", "123456789", generador);

const pacienteFirulais = new Perro("Firulais", clienteJuan);
const pacienteMichi = new Gato("Michi", clienteJuan);
const pacienteLoro = new Exotico("Loro Pepe", clienteJuan, "pio pio");

const proveedor = new Proveedor("Proveedor ABC", "123123123", generador);

redVeterinarias.agregarVeterinaria(veterinaria);
redVeterinarias.agregarCliente(clienteJuan);
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
console.log("Mascotas del cliente: ", clienteJuan.getMascotas());
console.log("Proveedores:", redVeterinarias.getProveedores());

redVeterinarias.setVeterinaria(veterinaria, "Veterinaria M3", "Coronel Suarez 5400");
console.log(redVeterinarias.getVeterinarias());
