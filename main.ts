import {menu} from "./menu";
import { GeneradorID } from "./GeneradorID";
// import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Exotico } from "./Exotico";
// import { Proveedor } from "./Proveedor";
// import { RedVeterinarias } from "./RedVeterinarias";

const generador = new GeneradorID();

// const redVeterinarias = new RedVeterinarias();

// const veterinaria = new Veterinaria("Veterinaria M1", "Vicente Lopez 2037", generador);
const clienteJuan = new Cliente("Juan Pérez", 123456789, generador);
const pacienteFirulais = new Perro("Firulais", clienteJuan);
const pacienteMichi = new Gato("Michi", clienteJuan);
const pacienteLoro = new Exotico("Loro Pepe", clienteJuan, "pio pio");

// const proveedor = new Proveedor("Proveedor ABC", 123123123, generador);

let Menu = new menu()

Menu.iniciar();

