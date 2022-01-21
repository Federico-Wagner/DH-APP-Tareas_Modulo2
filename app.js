let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach(function(tarea, index){console.log((index + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado);})

        console.log()
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    case 'crear':
        archivoTareas.guardarTarea({
            "titulo":process.argv[3],
            "estado": "pendiente"
            })
        console.log();    
        console.log('La tarea '+ process.argv[3] + " ha sido guardada");
        console.log('----------------------------------------');
        break;

    case 'filtrar':
        let estado = process.argv[3];
        let tareas_estado = archivoTareas.leerPorEstado(estado);
        console.log('Listado de tareas en '+ estado);
        tareas_estado.forEach(function(tarea, index){console.log((index + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado);})
        console.log('----------------------------------------');
        break;
    
    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
