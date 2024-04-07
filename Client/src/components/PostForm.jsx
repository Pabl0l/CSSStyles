import { useState } from "react";
import toast, {Toaster} from 'react-hot-toast'
const PostForm = () => { 
    const [formData, setFormData] = useState({
        comment : "",
        image : "",
      });
      const CommentUpload = () => {
        toast.success('successfully posted!')
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
        <section className="cont-commentsform" id='comments'>
        <h2 className="sub-h2 h2-commentsform">Post Form</h2>
        <form className="sub-div div-commentsform">
        <img className="img-comments" src="/girl-ad.jpg" alt="" />
              <textarea className="input-commentsform input-comment" type="text" onChange={handleInputChange} required rows="4" cols="50"  placeholder="What are you thinking about?"></textarea>


    <div className='div-input-image'>
              <label htmlFor="file" className='label-file'>📷</label>
              <input  className='input-image input-file' type="file" id="file" name="image" value={formData.image}   onChange={handleInputChange}/>    
    </div>
    
    
        <button className="butt butt-commentsform" type="reset" onClick={CommentUpload}>&rsaquo;</button>
        </form>
        <Toaster
                                  position="bottom-right"
                                  reverseOrder={false}
                                   />
</section>
    )
}
export default PostForm