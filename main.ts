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

const veterinariaM1 = new Veterinaria("Veterinaria M1", "Vicente Lopez 2037", generador);
const veterinariaAnimalia = new Veterinaria("Animalia", "Avenida Colon 704", generador);

const clienteJuan = new Cliente("Juan Perez", 2494556622, generador);
const clienteMaria = new Cliente("María López", 2284123455, generador);

const pacienteFirulais = new Perro("Firulais", clienteJuan);
const pacienteMichi = new Gato("Michi", clienteJuan);
const pacienteLoro = new Exotico("Loro Pepe", clienteJuan);

const pacienteOso = new Perro("Oso", clienteMaria);
const pacienteIguana = new Exotico("Iguana verde", clienteMaria)

const proveedor = new Proveedor("Proveedor Alimentar", 123123123, generador);

console.log("Testeo");

//agregar veterinarias
redVeterinarias.agregarVeterinaria(veterinariaM1);
redVeterinarias.agregarVeterinaria(veterinariaAnimalia);

console.log('Veterinarias agregadas:');
console.log(redVeterinarias.getVeterinarias());

//agregar clientes
redVeterinarias.agregarCliente(clienteJuan);
redVeterinarias.agregarCliente(clienteMaria);

//agregamos las mascotas a sus dueños
clienteJuan.agregarMascota(pacienteFirulais);
clienteJuan.agregarMascota(pacienteMichi);
clienteJuan.agregarMascota(pacienteLoro);

clienteMaria.agregarMascota(pacienteOso);
clienteMaria.agregarMascota(pacienteIguana);

//mostramos los clientes con sus mascotas cargadas
console.log('\nClientes agregados:');
console.log(redVeterinarias.getClientes());

//modificacion cliente
redVeterinarias.setCliente(clienteJuan, "Juan Carlos Perez", 2284887070);

//mostramos cliente modificado
console.log(redVeterinarias.getClientes());

//eliminar veterinaria
redVeterinarias.eliminarVeterinaria(veterinariaAnimalia);

console.log('\nVeterinarias después de la eliminación:');
console.log(redVeterinarias.getVeterinarias());

//incrementar visitas del cliente y verificar VIP
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteLoro)
clienteJuan.consultar(pacienteFirulais)
clienteJuan.consultar(pacienteMichi)
clienteJuan.consultar(pacienteFirulais)

console.log('\nEstado del cliente después de incrementar visitas:');
console.log(clienteJuan.getEsVip());





