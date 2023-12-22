import './css/About.css'
import { useState, useEffect } from 'react';
const About = () => {
  
        const [CVW, setCVW] = useState(window.innerWidth > 1100);
      
        useEffect(() => {
          const handleResize = () => {
            setCVW(window.innerWidth > 1100);
          };
                window.addEventListener('resize', handleResize);
                return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);


        const redirigirAWeb = () => {
            window.open('https://www.instagram.com/itsoliviabulldog/', '_blank');
          };
  


    return(
        <div className="cont cont-hijo-about" id='about'>
        <h2 className="h2 h2-about">About</h2>
        <div className="div div-about">
            <div className='div-about-'>

            
            
            <div className='div-about-cont'>
            {CVW?   <>
                    <div className='div-about-det-big'>
                        <h2 className='h2-about- about-content'>Olivia Buldoiser</h2>
                        <h3 className='h3-about about-content'>3 years old</h3>
                        <h4 className='h4-about about-content'>Woof! Hello! I am a very playful and lovely bulldog. I´m always ready to eat chicken legs, so ask me anything you want or just give me a hug! Check my instagram if u lov me as i lov u.</h4>
                        <button className="butt butt-about- bbig instagram" onClick={redirigirAWeb}></button>
                    </div>
                    <div className='div-about-img'>
                            <div className='abt-img'> </div>
                    </div>
                    </>
                    :
                                <>
                    
                        <div className='div-about-img div-small'>
                        <div className='div-about-det-small'>
                        <h2 className='h2-about- about-content h2-small h-small'>Olivia Buldoiser</h2>
                        <h3 className='h3-about- about-content h3-small h-small'>3 years old</h3>
                        <h4 className='h4-about about-content h4-small h-small'>Woof! Hello! I am a very playful and curious bulldog. I´m always ready to eat chicken legs, so ask me anything you want or just give me a hug! Check my instagram if u lov me as i lov u</h4>
                        <button className="butt butt-about- bsmall instagram" onClick={redirigirAWeb}></button>
                        </div>
                        </div>
            </>
            }
            </div>

            
            
                        


                    

            </div>
        </div>
</div>
    )
}
export default About