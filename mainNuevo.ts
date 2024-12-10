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
const pacienteIguana = new Exotico("Iguana verde", clienteMaria);

const proveedor = new Proveedor("Proveedor Alimentar", 2284037890, generador);

console.log("===========================================");
console.log("  🐾 SISTEMA DE GESTIÓN DE VETERINARIAS 🐾 ");
console.log("===========================================");

// Agregar Veterinarias
redVeterinarias.agregarVeterinaria(veterinariaM1);
redVeterinarias.agregarVeterinaria(veterinariaAnimalia);

console.log("\n🔹 -- Veterinarias Agregadas -- 🔹");
redVeterinarias.getVeterinarias().forEach(v => {
  console.log(`🏥 Veterinaria: ${v.getNombre()} - 📍 Dirección: ${v.getDireccion()} - Id: ${v.getID()}`);
});

// Agregar Proveedores
redVeterinarias.agregarProveedor(proveedor);

console.log("\n📦 -- Proveedores Agregados -- 📦");
redVeterinarias.getProveedores().forEach(p => {
  console.log(`📞 Proveedor: ${p.getNombre()} - 📱 Teléfono: ${p.getTelefono()} - Id: ${p.getID()}`);
});

// Agregar Clientes
redVeterinarias.agregarCliente(clienteJuan);
redVeterinarias.agregarCliente(clienteMaria);

// Agregar Mascotas a los Clientes
clienteJuan.agregarMascota(pacienteFirulais);
clienteJuan.agregarMascota(pacienteMichi);
clienteJuan.agregarMascota(pacienteLoro);

clienteMaria.agregarMascota(pacienteOso);
clienteMaria.agregarMascota(pacienteIguana);

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

// Modificación de Cliente
console.log("\n✏️ -- Modificación de Cliente -- ✏️");
redVeterinarias.setCliente(clienteJuan, "Juan Carlos Perez", 2284887070);
redVeterinarias.getClientes().forEach(c => {
  console.log(`🧑‍⚕️ Cliente: ${c.getNombre()} - 📞 Teléfono: ${c.getTelefono()} - Id: ${c.getID()} - Vip: ${c.getEsVip()}`);
});

// Eliminar Veterinaria
console.log("\n❌ -- Eliminación de Veterinaria -- ❌");
redVeterinarias.eliminarVeterinaria(veterinariaAnimalia);
console.log("Veterinarias después de eliminación:");
redVeterinarias.getVeterinarias().forEach(v => {
  console.log(`🏥 Veterinaria: ${v.getNombre()} -📍 Dirección: ${v.getDireccion()} - Id: ${v.getID()}`);
});

// Eliminar Todos los Elementos
console.log("\n🗑️ -- Eliminación de Todos los Elementos -- 🗑️");
redVeterinarias.eliminarProveedor(proveedor);
redVeterinarias.eliminarCliente(clienteJuan);
redVeterinarias.eliminarCliente(clienteMaria);
redVeterinarias.eliminarVeterinaria(veterinariaM1);

// Mostrar el Estado Final
console.log("\n🔚 -- Resultado Final Luego de la Eliminación -- 🔚");
console.log("📦 Proveedores:");
console.log(redVeterinarias.getProveedores().length ? redVeterinarias.getProveedores() : "No hay proveedores");

console.log("🏥 Veterinarias:");
console.log(redVeterinarias.getVeterinarias().length ? redVeterinarias.getVeterinarias() : "No hay veterinarias");

console.log("👤 Clientes:");
console.log(redVeterinarias.getClientes().length ? redVeterinarias.getClientes() : "No hay clientes");

console.log("🐾 Mascotas:");
console.log(redVeterinarias.getPacientes().length ? redVeterinarias.getPacientes() : "No hay pacientes");

console.log("\n===========================================");
console.log("✨ ¡Gracias por usar el sistema de veterinarias! ✨");
console.log("===========================================");
