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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  console.log("\n===========================================");
  console.log("  🐾 SISTEMA DE GESTIÓN DE VETERINARIAS 🐾 ");
  console.log("===========================================");

function mostrarMenu() {
  console.log("1. Agregar Veterinaria");
  console.log("2. Agregar Proveedor");
  console.log("3. Agregar Clientes y sus Mascotas");
  console.log("4. Cargar Consultas");
  console.log("5. Modificar Cliente");
  console.log("6. Eliminar Veterinaria");
  console.log("7. Eliminar y Mostrar Todo");
  console.log("8. Salir");
  console.log("===========================================");
}

function manejarSeleccion(opcion: string) {
  switch (opcion) {
    case "1":
      redVeterinarias.agregarVeterinaria(veterinariaM1);
      redVeterinarias.agregarVeterinaria(veterinariaAnimalia);
      console.log("\n🔹 -- Veterinarias Agregadas -- 🔹");
      redVeterinarias.getVeterinarias().forEach(v => {
        console.log(`🏥 Veterinaria: ${v.getNombre()} - 📍 Dirección: ${v.getDireccion()} - Id: ${v.getID()}`);
      });
      pedirOpcion();
      break;

    case "2":
      redVeterinarias.agregarProveedor(proveedor);
      console.log("\n📦 -- Proveedores Agregados -- 📦");
      redVeterinarias.getProveedores().forEach(p => {
      console.log(`📞 Proveedor: ${p.getNombre()} - 📱 Teléfono: ${p.getTelefono()} - Id: ${p.getID()}`);
      });
      pedirOpcion();
      break;
        
    case "3":
      redVeterinarias.agregarCliente(clienteJuan);
      redVeterinarias.agregarCliente(clienteMaria);
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
      pedirOpcion();
      break;
      
    case "4":
      console.log("\n🩺 -- Consultas Realizadas -- 🩺");
      clienteJuan.consultar(pacienteFirulais);
      clienteJuan.consultar(pacienteLoro);
      clienteJuan.consultar(pacienteFirulais);
      clienteJuan.consultar(pacienteMichi);
      clienteJuan.consultar(pacienteFirulais);
      clienteMaria.consultar(pacienteOso);
      clienteMaria.consultar(pacienteIguana);
      clienteMaria.consultar(pacienteOso);
      pedirOpcion();
      break;
    
    case "5":
      console.log("\n✏️ -- Modificación de Cliente -- ✏️");
      redVeterinarias.setCliente(clienteJuan, "Juan Carlos Perez", 2284887070);
      redVeterinarias.getClientes().forEach(c => {
      console.log(`🧑‍⚕️ Cliente: ${c.getNombre()} - 📞 Teléfono: ${c.getTelefono()} - Id: ${c.getID()} - Vip: ${c.getEsVip()}`);
      });
      pedirOpcion();
      break;
    
    case "6":
      console.log("\n❌ -- Eliminación de Veterinaria -- ❌");
      redVeterinarias.eliminarVeterinaria(veterinariaAnimalia);
      console.log("Veterinarias después de eliminación:");
      redVeterinarias.getVeterinarias().forEach(v => {
      console.log(`🏥 Veterinaria: ${v.getNombre()} -📍 Dirección: ${v.getDireccion()} - Id: ${v.getID()}`);
      });
      pedirOpcion();
      break;

    case "7":
      console.log("\n🗑️ -- Eliminación de Todos los Elementos -- 🗑️");
      redVeterinarias.eliminarProveedor(proveedor);
      redVeterinarias.eliminarCliente(clienteJuan);
      redVeterinarias.eliminarCliente(clienteMaria);
      redVeterinarias.eliminarVeterinaria(veterinariaM1);
      console.log("\n🔚 -- Resultado Final Luego de la Eliminación -- 🔚");
      console.log("📦 Proveedores:");
      console.log(redVeterinarias.getProveedores().length ? redVeterinarias.getProveedores() : "No hay proveedores");
      console.log("🏥 Veterinarias:");
      console.log(redVeterinarias.getVeterinarias().length ? redVeterinarias.getVeterinarias() : "No hay veterinarias");
      console.log("👤 Clientes:");
      console.log(redVeterinarias.getClientes().length ? redVeterinarias.getClientes() : "No hay clientes");
      console.log("🐾 Mascotas:");
      console.log(redVeterinarias.getPacientes().length ? redVeterinarias.getPacientes() : "No hay pacientes");
      pedirOpcion();
      break;

    case "8":
      rl.close();
      console.log("\n✨¡Gracias por usar nuestro sistema!✨");
      console.log("===========================================");
      break;
    default:
      console.log("Opción no válida. Intenta de nuevo.");
      pedirOpcion();
      break;
  }
}

function pedirOpcion() {
  mostrarMenu();
  rl.question("Elige una opción: ", (opcion: string) => {
    manejarSeleccion(opcion);
  });
}
pedirOpcion();
