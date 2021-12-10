const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: () => {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: tareasArray => {
        let tareasConJson = JSON.stringify(tareasArray)
        fs.writeFileSync(this.archivo, tareasConJson)
    },

    guardarTarea: tareasObj => {
        let nuevaTarea = this.leerJSON();
        nuevaTarea.push(tareasObj);
        this.escribirJSON(nuevaTarea);
    },

    leerPorEstado: estado => {
        let leyendo = this.leerJSON();
        let filtrando = leyendo.filter((item) => estado == item.estado)
        return filtrando;
    }
}

module.exports = archivoTareas