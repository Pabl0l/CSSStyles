import {useState,useEffect} from 'react'
import PostForm from './PostForm';
import './css/Post.css'
import toast, {Toaster} from 'react-hot-toast'
const Post = () => {
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
    const [CVW, setCVW] = useState(window.innerWidth > 1100);
    const [Fav, setFav] = useState(true)
    const [com, setCom] = useState(false)
    const handleFav = () => {
        setFav(!Fav)
    }
    const handleCom=()=>{
        setCom(!com)
    }
    useEffect(() => {
      const handleResize = () => {
        setCVW(window.innerWidth > 1100);
      };
            window.addEventListener('resize', handleResize);
            return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
        <div className="cont cont-hijo-post" id='post'>
        <h2 className="h2 h2-post">Post</h2>
        <div className="div div-post">
        <div className="div div-posts">
           {CVW?
           <>
            <div className="min-div-post">
                <div className='left-post'>
                <img className="img-autor" src="../public/girl-ad.jpg" alt="../public/girl-ad.jpg" />
                <h3 className="h3-post-autor"><a className="h3-comment username" href="https://github.com/Pabl0l" target='_blank' rel="noreferrer">@Pabl0l</a></h3>
                    <h3 className='h3-post-released'>26/02/2024</h3>
                    <h3 className='h3-post-desc'>Last night with new European friends.</h3>
                    <button className='butt butt-comment' onClick={handleCom}></button>
                <button className='butt butt-thumb' onClick={handleFav}> {Fav? <img className='img-fav' src="/thumb-up.png" alt="" />: <img className='img-fav' src="/thumb-up-negro.png" alt="" /> }</button>
                </div>
                <div className='right-post'>
                <img className="img-post-post" src="../public/spaceparty.jpg" alt="" />
                </div>
            
            </div>
            {com?
            <>
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
                                   </>
            :
            null}
            </>
                :
                <>
            <div className="mini-div-post">
                <div className='up-post'>
                <img className="mini-img-autor" src="../public/yo.jpeg" alt="../public/yo.jpeg" />
                    <div className='div-autor'>
                <h3 className="mini-h3-post-autor"><a className="h3-comment username" href="https://github.com/Pabl0l" target='_blank' rel="noreferrer">@Pabl0l</a></h3>
                    <h3 className='mini-h3-post-released'>26/02/2024</h3>
                    </div>
                </div>
                <div className='down-post'>
                <img className="img-post-post" src="../public/spaceparty.jpg" alt="" />
                </div>
                <button className='butt mini-butt-fav' onClick={handleFav}> {Fav? <img className='img-fav' src="/thumb-up.png" alt="" />: <img className='img-fav' src="/thumb-up-negro.png" alt="" /> }</button>
                <button className='butt mini-butt-comment' onClick={handleCom}></button>
                    <h3 className='mini-h3-post-desc'>Last night with new European friends.</h3>
            </div>
            {com?
            <>
             <div className="sub-div div-commentsform">
        <img className="img-comments" src="../public/yo.jpeg" alt="" />
              <textarea className="mini-input-commentsform input-comment" type="text" onChange={handleInputChange} required rows="4" cols="50"  placeholder="Type comments here!"></textarea>


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
                                   </>
            :
            null}
                </>
}
        </div>
        </div>
        <PostForm/>
</div>
    )
}
export default Post