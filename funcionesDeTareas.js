const fs = require('fs');
let base_path = "C:/VS_code/Digital-House/Modulo 2/APP_TAREAS/"

let archivoTareas = {
    archivo: base_path + 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    guardarTarea: function(tarea_obj){
        let save = this.leerArchivo()  //array
        save.push(tarea_obj)
            this.escribirJSON(save)
    },

    escribirJSON: function(array){
            let guardando = JSON.stringify(array)  //array -> JSON
            fs.writeFileSync(this.archivo, guardando, 'utf-8'); //guardado
    },

    leerPorEstado: function(estado){
        let tareas = this.leerArchivo()
        return tareas.filter(tarea => tarea.estado == estado)
    }
}
module.exports = archivoTareas;


