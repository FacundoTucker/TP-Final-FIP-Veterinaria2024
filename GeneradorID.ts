export class GeneradorID {
    private idsGenerados: number[] = [];//arreglo para guardar los IDs generados

    public generarIDUnico(): number {
        let nuevoID: number = Math.floor(Math.random() * 1000000);//generar un ID aleatorio
        while (this.idsGenerados.includes(nuevoID)) {//verificar que el ID no esté repetido
            nuevoID = Math.floor(Math.random() * 1000000); //si ya existe, generar otro
        }
        this.idsGenerados.push(nuevoID);//almacenar el ID generado
        return nuevoID;//retornar el ID único
    }
}