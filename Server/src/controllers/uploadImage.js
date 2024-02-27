const uploadImage = (req, res) => {

    // console.log("uploadImage --> req.file:",req.file)
      console.log("uploadImage")
    if (req.file) {
      console.log("Imagen subida con exito!")
      return  res.json({
        success: true,
        message: 'Imagen subida correctamente!!!',
        file: req.file.filename
      });
    } else {
        console.log("Error al subir imagen!")
     return res.json({
        success: false,
        message: 'Error al subir la imagen'
      });
    }
  }

module.exports=uploadImage