import { useState } from "react";
import toast, {Toaster} from 'react-hot-toast'
const CommentsForm = () => { 
    const [formData, setFormData] = useState({
        comment : "",
        image : "",
      });
      const CommentUpload = () => {
        toast.success('successfully commented')
    }
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name==="comment"){
            setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        }else{

            //Aquí sigue la lógica para agregar una imagen
            // el objetivo es mostrar la imagen arriba de el comment form como es usual.
        }
      };
    return(
        <div className="cont-commentsform" id='comments'>
        <h2 className="sub-h2 h2-commentsform">Comments Form</h2>
        <div className="sub-div div-commentsform">
        <img className="img-comments" src="../public/yo.jpeg" alt="" />
              <textarea className="input-commentsform input-comment" type="text" onChange={handleInputChange} required rows="4" cols="50"  placeholder="Type comments here!"></textarea>


    <div className='div-input-image'>
              <label htmlFor="file" className='label-file'>📷</label>
              <input  className='input-image input-file' type="file" id="file" name="image" value={formData.image}   onChange={handleInputChange}/>    
    </div>
    
    
        <button className="butt butt-commentsform" type="reset" onClick={CommentUpload}>&rsaquo;</button>
        </div>
        <Toaster
                                  position="bottom-right"
                                  reverseOrder={false}
                                   />
</div>
    )
}
export default CommentsForm