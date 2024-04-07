import './css/TheBar.css'
import './css/Options.css'
import TheCategories from './TheCategories.jsx'
import TheUserOptions from './TheUserOptions.jsx'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TheBar = () => {
    const [CVW, setCVW] = useState(window.innerWidth > 800);
    const {pathname} = useLocation()

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
        <section className="div-thebar">
            <div className="sub-div-thebar">
                
                            {CVW?
                            <>
            <div className='divbar div-brand-thebar'>
                            <h4 className="h4-thebar">CSS Styles by Pabl0l</h4> 
                        </div>

                        <div className='divbar div-button-bar'>
                          <Link to="/">
                            <button className='butt butt-thebar bar-home '>Home</button>
                          </Link>
                          <Link to="/landing">
                            <button className='butt butt-thebar bar-content' >Styles</button>
                          </Link>
                          <Link to="/about">
                            <button className='butt butt-thebar bar-about' >About</button>
                          </Link>
                        </div>
                   
                    <div className='divbar div-option-bar menu-bar'>
                   
                   
                    {pathname ==="/landing"     &&      <TheCategories />}

                     <TheUserOptions />

                  
                   
                        </div>
                            </>
                        : 
                             <>
            <div className='divbar div-brand-thebar'>
                            <h4 className="h4-thebar">CS3</h4> 
                        </div>

                        <div className='divbar div-button-bar'>
                          <Link to="/">
                            <button className='butt butt-thebar thome'></button>
                          </Link>
                          <Link to="/landing">
                            <button className='butt butt-thebar tland' ></button>
                          </Link>
                          <Link to="/about">
                            <button className='butt butt-thebar tabout' ></button>
                          </Link>
                        </div>
                   
                    <div className='divbar div-option-bar menu-bar'>
                   
                    {pathname ==="/landing"     &&      <TheCategories />}

                     <TheUserOptions />
                        </div>
                            </>
                      }
            </div>
            
        </section>
    ) 
}
export default TheBar;