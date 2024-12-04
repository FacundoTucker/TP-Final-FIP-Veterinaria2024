import { GeneradorID } from "./GeneradorID";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Exotico } from "./Exotico";
import { Proveedor } from "./Proveedor";
import { RedVeterinarias } from "./RedVeterinarias";

//instanciamos todas las clases
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

const proveedor = new Proveedor("Proveedor Alimentar", 2284037890, generador);


console.log(" - - Testing Trabajo Veterinaria - - ");

//agregar veterinarias
redVeterinarias.agregarVeterinaria(veterinariaM1);
redVeterinarias.agregarVeterinaria(veterinariaAnimalia);

console.log("Veterinarias agregadas: ");
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

//modificacion cliente y mostramos cliente modificado
redVeterinarias.setCliente(clienteJuan, "Juan Carlos Perez", 2284887070);
console.log(redVeterinarias.getClientes());

//eliminar veterinaria
redVeterinarias.eliminarVeterinaria(veterinariaAnimalia);

console.log("Veterinarias despues de la eliminacion:");
console.log(redVeterinarias.getVeterinarias());

//incrementar visitas del cliente y verificar VIP
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteLoro)
clienteJuan.consultar(pacienteFirulais)
clienteJuan.consultar(pacienteMichi)
clienteJuan.consultar(pacienteFirulais)

console.log("Estado del VIP del cliente despues de incrementar visitas:");
console.log(clienteJuan.getEsVip());

//metodos de eliminacion
console.log("Eliminamos todo:")
redVeterinarias.eliminarProveedor(proveedor);
redVeterinarias.eliminarCliente(clienteJuan);
redVeterinarias.eliminarCliente(clienteMaria);
redVeterinarias.eliminarVeterinaria(veterinariaM1);

//mostramos todo nuevamente
console.log(redVeterinarias.getProveedores());
console.log(redVeterinarias.getVeterinarias());
console.log(redVeterinarias.getClientes());
console.log(redVeterinarias.getPacientes());





