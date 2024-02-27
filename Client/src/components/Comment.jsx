import CommentForm from "./CommentForm.jsx"
import "./css/Comments.css"
import {useState} from 'react'


const Comments = () => {
    const [Fav, setFav] = useState(true)
    const handleFav = () => {
        setFav(!Fav)
    }
    return(
        <div className="cont cont-hijo-comments" id='comments'>
        <h2 className="h2 h2-comments">Comments</h2>
        <div className="div div-comments">
            <div className="div-comment">
                <div className="autor-details">
                <img className="img-details" src="../public/yo.jpeg" alt="" />
                <h3 className="h3-comment username"><a className="h3-comment username" href="https://github.com/Pabl0l" target='_blank' rel="noreferrer">@Pabl0l</a></h3>
                </div>
                <div className="comment-details">
                    <h4 className="h4-comment">Cogito ergo sum</h4>
                </div>
                <div className="div-released">
                <h3 className="h3-comment released">26/02/2024</h3>
                <button className='butt butt-fav' onClick={handleFav}> {Fav? <img className='img-fav' src="/thumb-up.png" alt="" />: <img className='img-fav' src="/thumb-up-negro.png" alt="" /> }</button>

</div>
            </div>
        </div>
        <CommentForm/>
</div>
    )
}
export default Comments