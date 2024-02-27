import './css/Bar.css'
import './css/Options.css'
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
const Bar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenuOptions, setToggleMenuOptions] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [toggleButton,setToggleButton]=useState(false)
  const [texto, setTexto] = useState("");

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

   const handleInputChange = (e) => setTexto(e.target.value)


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
        <div className="cont cont-hijo-bar" id='bar'>
                    
                    <h2 className="h2 h2-bar">Bar</h2>
                   
                    <div className="div div-bar">

                        <div className="sub-div sub-div-bar">

                            <div className='divbar div-icon-bar'>
                            
                                <h4 className="h4-bar">CSS Styles by Pabl0l</h4>
                            
                            </div>
                       
                        <div className='divbar div-search-bar'>
                       
                                        <input  className='search-bar-input' type="text" placeholder='type some thing' onChange={handleInputChange} />
                       
                                        <button className='butt butt-search'> <img className='butt-img search-bar-img' src="/search.png" alt="" /> </button>
                       
                        </div>
                       
                        <div className='divbar div-option-bar menu-bar'>
                       
                        <div className="sub-div div-menu-vertical bar-menu-opt menu-verti">

                      <button className="butt butt-menu-vertical" onClick={handleToggle}  >     {toggleMenu ? (<img className="butt-img" src="/menu-medio.png" alt="" />) : (  <img className="butt-img" src="/menu-vert.png" alt="" /> )}</button>

                      {toggleMenu && (<div className="sub-div sub-div-menu-vertical"><animated.button style={menuAnimation} className="butt butt-menu" onClick={handleFav}>
                            {isFav ? (<img className="butt-img" src="/corazon-blanco.png" alt="isFav" />) : (<img className="butt-img" src="/corazon-negro.png" alt="notFav" />)}</animated.button>

                   
                          <animated.button  style={menuAnimation} className="butt butt-submit"><img className="butt-img" src="/dado.png" alt="" /></animated.button>

                          <animated.button  style={menuAnimation} onClick={handleToggle} className="butt butt-cancel"> <img className="butt-img" src="/close.png" alt="" /> </animated.button>
                                      </div>)}

                      </div>
                       <div className="sub-div div-menu-vertical bar-menu-opt user-opti">

                        <button className="butt butt-menu-vertical" onClick={handleToggleOptions}  ><img className='butt-img img-option-bar' src="/settings.png" alt="option-bar" /></button>

                        {toggleMenuOptions && (
                        <div className="sub-div sub-div-menu-vertical">

                          
                            <animated.button  style={menuAnimationOptions}  className="butt butt-accept" > <img className="butt-img" src="/more.png" alt="" /> </animated.button>

                          <div className='cont-options float'>
                            <animated.button style={menuAnimationOptions} className='butt butt-option' onClick={()=>handleButton()}> <img className='butt-img ' src="/menu-vert.png" alt="" /> </animated.button>
                                 {toggleButton?<div className="sub-div sub-div-options">
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
                            <animated.button  style={menuAnimationOptions} onClick={handleToggleOptions} className="butt butt-cancel"> <img className="butt-img" src="/close.png" alt="" /> </animated.button>
                                        </div>)}

                        </div>
                            </div>
                        </div>
                            <h2 className='h2 h2-texto'> {texto} </h2>
                    </div>
                </div>
    )
}
export default Bar