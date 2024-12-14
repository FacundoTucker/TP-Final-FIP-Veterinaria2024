import {menu} from "./menu";
import { GeneradorID } from "./GeneradorID";
import { Cliente } from "./Cliente";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Exotico } from "./Exotico";


const generador = new GeneradorID();
const clienteJuan = new Cliente("Juan Pérez", 123456789, generador);
const pacienteFirulais = new Perro("Firulais", clienteJuan);
const pacienteMichi = new Gato("Michi", clienteJuan);
const pacienteLoro = new Exotico("Loro Pepe", clienteJuan);


clienteJuan.consultar(pacienteFirulais); //consulta con determinada mascota pero siempre el mismo dueño
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteFirulais);
clienteJuan.consultar(pacienteMichi);
clienteJuan.consultar(pacienteLoro);


let Menu = new menu()

Menu.iniciar();