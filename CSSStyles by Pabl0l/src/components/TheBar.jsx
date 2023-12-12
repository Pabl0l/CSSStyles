import './css/TheBar.css'
import './css/Options.css'
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
const TheBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleMenuOptions, setToggleMenuOptions] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [toggleButton,setToggleButton]=useState(false)


    const menuAnimation = useSpring({
        opacity: toggleMenu ? 1 : 0,
        transform: `scale(${toggleMenu ? 1 : 0})`,
      });
    const menuAnimationOptions = useSpring({
        opacity: toggleMenuOptions ? 1 : 0,
        transform: `scale(${toggleMenuOptions ? 1 : 0})`,
      });
    const optionsAnimation = useSpring({
        opacity: toggleButton ? 1 : 0,
        transform: `scale(${toggleButton ? 1 : 0})`,
      });

      const handleButton = () => {
          setToggleButton(!toggleButton)
      }

      const handleFav = () => {
        setIsFav(!isFav);
      };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleOptions = () => {
    setToggleMenuOptions(!toggleMenuOptions);
    setToggleButton(false)
  };
    return(
        <div className="div-thebar">
            <div className="sub-div-thebar">
                
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
                   
                    <div className="sub-div div-menu-vertical thebar-menu-opt menu-verti">

                  <button className="butt butt-thebar butt-menu-vertical " onClick={handleToggle}  >     {toggleMenu ? (<img className="butt-img " src="/menu-medio.png" alt="" />) : (  <img className="butt-img " src="/menu-vert.png" alt="" /> )}</button>

                  {toggleMenu && (<div className="sub-div sub-div-menu-vertical "><animated.button style={menuAnimation} className="butt butt-thebar butt-menu" onClick={handleFav}>
                        {isFav ? (<img className="butt-img " src="/corazon-blanco.png" alt="isFav" />) : (<img className="butt-img " src="/corazon-negro.png" alt="notFav" />)}</animated.button>

               
                      <animated.button  style={menuAnimation} className="butt butt-thebar butt-submit"><img className="butt-img " src="/dado.png" alt="" /></animated.button>

                      <animated.button  style={menuAnimation} onClick={handleToggle} className="butt butt-thebar butt-cancel"> <img className="butt-img " src="/close.png" alt="" /> </animated.button>
                                  </div>)}

                  </div>
                   <div className="sub-div div-menu-vertical thebar-menu-opt user-opti">

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

                    </div>
                        </div>
            </div>
        </div>
    ) 
}
export default TheBar;