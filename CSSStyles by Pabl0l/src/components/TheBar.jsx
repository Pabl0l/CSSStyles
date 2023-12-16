// import { useSpring, animated } from 'react-spring';
import './css/TheBar.css'
import './css/Options.css'
import TheCategories from './TheCategories.jsx'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TheBar = () => {
    const [CVW, setCVW] = useState(window.innerWidth > 800);
    // const [toggleMenuOptions, setToggleMenuOptions] = useState(false);
    // const [toggleButton,setToggleButton]=useState(false)
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

    // const menuAnimationOptions = useSpring({
    //     opacity: toggleMenuOptions ? 1 : 0,
    //     transform: `scale(${toggleMenuOptions ? 1 : 0})`,
    //   });
    // const optionsAnimation = useSpring({
    //     opacity: toggleButton ? 1 : 0,
    //     transform: `scale(${toggleButton ? 1 : 0})`,
    //   });

    //   const handleButton = () => {
    //       setToggleButton(!toggleButton)
    //   }


  // const handleToggleOptions = () => {
  //   setToggleMenuOptions(!toggleMenuOptions);
  //   setToggleButton(false)
  // };
    return(
        <div className="div-thebar">
            <div className="sub-div-thebar">
                
            <div className='divbar div-brand-thebar'>
                            {CVW?
                            <h4 className="h4-thebar">CSS Styles by Pabl0l</h4> : <h4 className='h4-thebar'>
                                CSS3
                            </h4>
                        }
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

                  
                   {/* <div className="sub-div div-menu-vertical thebar-menu-opt user-opti">

                    <button className="butt butt-thebar butt-menu-vertical" onClick={handleToggleOptions}  ><img className='butt-img  img-option-bar' src="/settings.png" alt="option-bar" /></button>

                    {toggleMenuOptions && (
                    <div className="sub-div sub-div-menu-vertical">
                 
                        <animated.button  style={menuAnimationOptions}  className="butt butt-thebar butt-accept" > <img className="butt-img " src="/more.png" alt="" /> </animated.button>
                        <div className='cont-options float'>
                        <animated.button style={menuAnimationOptions} className='butt butt-option butt-thebar' onClick={()=>handleButton()}> <img className='butt-img  ' src="/menu-vert.png" alt="" /> </animated.button>
                             {toggleButton?<div className="sub-div sub-div-options float">
                                 <animated.button style={optionsAnimation}  className='butt butt-options'>Option 1</animated.button>
                                 <animated.button style={optionsAnimation}  className='butt butt-options'>Option 2</animated.button>
                                 <animated.button style={optionsAnimation}  className='butt butt-options'>Option 3</animated.button>
                                 <animated.button style={optionsAnimation}  className='butt butt-options'>Option 4</animated.button>
                                 <hr className='hr-options'/>
                                 <animated.button style={optionsAnimation}  className='butt butt-options'>A</animated.button>
                                 <animated.button style={optionsAnimation}  className='butt butt-options'>B</animated.button>
                                 <animated.button style={optionsAnimation}  className='butt butt-options'>C</animated.button>
                                 <animated.button style={optionsAnimation}  className='butt butt-options'>D</animated.button>
                                 <hr className='hr-options'/>
                                 <animated.button style={optionsAnimation}  className='butt butt-options'> <img className='butt-img' src="/settings.png" alt="" /> </animated.button>
                                 <animated.button style={optionsAnimation}  onClick={()=>handleButton()} className='butt butt-options'> <img 
                                 className='butt-img' src="/close.png" alt="" /> </animated.button>
                             </div>:null}
                    </div>

                       
                        <animated.button  style={menuAnimationOptions} onClick={handleToggleOptions} className="butt butt-thebar butt-cancel"> <img className="butt-img" src="/close.png" alt="" /> </animated.button>
                                    </div>)}

                    </div> */}
                        </div>
            </div>
        </div>
    ) 
}
export default TheBar;