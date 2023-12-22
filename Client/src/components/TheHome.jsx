import {Link} from 'react-router-dom'
import './css/TheHome.css'
import { useState, useEffect } from 'react';
const TheHome = () => {

    const [CVW, setCVW] = useState(window.innerWidth > 800);

    useEffect(() => {
      const handleResize = () => {
        setCVW(window.innerWidth > 800);
      };
            window.addEventListener('resize', handleResize);
            return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
        <div className="cont thehome">
            <div className="div div-w div-thehome">
                {CVW?
                    <h2 className="h2 h2-page h2-thehome"> Welcome! </h2>: <h2 className="h2 h2-page h2-thehome h2-mini">Welcome!</h2>

                }
            <h3 className='h3'> This is my style page, i began this proyect on december of 2023. <br />
                My main goal on this site is practice and show my CSS and React skills! </h3>
            <Link to="/landing">
            <button className="butt butt-home">&lt;/&gt;</button>
            </Link>
            </div>
        </div>
    )
}
export default TheHome