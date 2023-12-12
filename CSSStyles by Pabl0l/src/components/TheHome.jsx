import {Link} from 'react-router-dom'
import './css/TheHome.css'
const TheHome = () => {
    return(
        <div className="cont thehome">
            <div className="div div-w div-thehome">
            <h2 className="h2 h2-page h2-thehome"> Welcome! </h2>
            <h3 className='h3'> This is my style page, i began this proyect on december of 2023. <br />
                My principal goal on this site is practice and show my CSS Skills! </h3>
            <Link to="/landing">
            <button className="butt butt-home">&lt;/&gt;</button>
            </Link>
            </div>
        </div>
    )
}
export default TheHome