const fs = require('fs');
const path = require('path');

const tomarUltImg= ()=> {
    
    const rutaCarpeta = path.join(__dirname,'../../../Client/public/uploads');
    
    console.log("tomarUltImg: ", rutaCarpeta);

    try {
        const archivos = fs.readdirSync(rutaCarpeta);

        const archivosFiltrados = archivos.filter(nombreArchivo => fs.statSync(path.join(rutaCarpeta, nombreArchivo)).isFile());

        // Ordena los archivos por fecha de modificación (más reciente primero)
        const archivosOrdenados = archivosFiltrados.sort((a, b) => {
            return fs.statSync(path.join(rutaCarpeta, b)).mtime.getTime() - fs.statSync(path.join(rutaCarpeta, a)).mtime.getTime();
        });

        // Devuelve el nombre del último archivo
        console.log(archivosOrdenados[0])
        return archivosOrdenados[0];
    } catch (error) {
        console.error('Error al obtener el último archivo:', error.message);
        return null;
    }
}

module.exports = tomarUltImg

