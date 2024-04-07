/* eslint-disable react/no-unescaped-entities */
import './css/TheAbout.css'; 
import { useState, useEffect } from 'react';
const TheAbout = () =>{
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
        <article className="cont cont-about">
            {CVW?
                <div className="div div-about div-w">
            <div className='div-detalles-about divabt'>
                <h3 className="h3">Hello!, find me on github as</h3>
            <h2 className="h2 h2-page h2-about Pabl0l"><a className="lonk" href="https://github.com/Pabl0l" target='_blank' rel="noreferrer">Pabl0l</a></h2>
            <h3 className="h3 details">
                Web Developer, UI Designer & prompt engineer. <br />
            Hire me! This is my <a className='lonk' href="https://www.linkedin.com/in/pablo-olivera-451467292/" target='_blank' rel="noreferrer">LinkedIn</a>. <br />
            Or follow my AI images proyect on <a className='lonk' href="https://www.instagram.com/pomxcom/" target='_blank' rel="noreferrer">Instagram</a>.
            </h3>
            </div>
            <div className='div-img-abt-cont divabt'>
            <div className='div-img-theabout'>


            </div>
            </div>
            </div>
            :
                            <div className="div div-about div-w div-mini-about">
                                                            <div className='div-img-theabout'>
                
                
                                                            <div className='div-detalles-about'>
                                <h3 className="h3 peque h3-hello"></h3>
                            <h3 className="h3 details peque peque-det h3-det">
                            Hello!, find me on github as <a className="lonk gituser Pabl0l" href="https://github.com/Pabl0l" target='_blank' rel="noreferrer">Pabl0l</a>! <br />
                                Web Developer, UI Designer and prompt engineer. <br />
                            Hire me! This is my <a className='lonk' href="https://www.linkedin.com/in/pablo-olivera-451467292/" target='_blank' rel="noreferrer">LinkedIn</a>. <br />
                            Or follow my AI images proyect on <a className='lonk' href="https://www.instagram.com/pomxcom/" target='_blank' rel="noreferrer">Instagram</a>.
                            </h3>
                            </div>
                            </div>
                            </div>
            }     
        </article>
    )
}

export default TheAbout

                            {/* <div className='div-img-abt-cont divabt'>

                            </div> */}