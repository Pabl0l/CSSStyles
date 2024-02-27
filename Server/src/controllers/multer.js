const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage(
    {
        destination:  (req,file,cb)=>{
            cb(null,path.join(__dirname,'../../../Client/public/uploads'))
        },
        filename:  (req,file,cb)=>{
            // console.log("storage - file: ",file)
            const ext = file.originalname.split('.').pop()
            cb(null,`${file.fieldname}_${Date.now()}.${ext}`)
        }
    }
)

const upload = multer({
    storage,
    dest: 'uploads/',
    // limits: {fileSize: 4000000}
})

// para llamarlo Usar: upload.single('file')

module.exports = upload