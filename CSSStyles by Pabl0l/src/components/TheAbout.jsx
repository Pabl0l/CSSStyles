/* eslint-disable react/no-unescaped-entities */
import './css/TheAbout.css'; 
const TheAbout = () =>{
    return(
        <div className="cont cont-about">
            <div className="div div-w div-about">
            <h2 className="h2 h2-page h2-about">About</h2>
            <h3 className="h3">Hello, i'm Pabl0l: Web Developer, Designer and prompt engineer. <br /> You can find out more about me by entering my social networks.</h3>
            <div className="div-links">
                <button className='butt butt-theabout butt-thebar linkedin'></button>
                <button className='butt butt-theabout butt-thebar github'></button>
                <button className='butt butt-theabout butt-thebar instagram'></button>
            </div>
            </div>

        </div>
    )
}

export default TheAbout