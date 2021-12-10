
const lasTareas = require('tareas');

switch(accion){
    case 'listar':
        console.log('Listado de tareas');
        let tareas = lasTareas.leerJSON();
        tareas.forEach(function(valor, index){
            console.log(index+1 + ' ' + valor.titulo + ' se encuentra ' + valor.estado);
        })
        break;

    case 'crear':
        let titulo = process.argv[3];
        let objetoNuevo = {
            titulo: titulo,
            estado: 'pendiente'
        }
        lasTareas.guardarTarea(objetoNuevo);
        break;

    case 'filtrar':
        let estadoAFiltrar = process.argv[3];
        let lista = lasTareas.leerPorEstado(estadoAFiltrar);
        lista.forEach(function(valor, index){
            console.log(index+1 + ' ' + valor.titulo + ' estado: ' + valor.estado);
        });
    break;

   case undefined:
       console.log('Atención - tenés que pasar una acción');
       break;

    default:
        console.log('No entiendo lo que me estás pidiendo')
        console.log('Las opciones disponibles son: listar');
        break;
}