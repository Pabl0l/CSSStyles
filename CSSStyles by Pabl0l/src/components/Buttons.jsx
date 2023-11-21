import {useState} from 'react'
import './css/Buttons.css'
const Buttons = () => {
    const [isFav,setIsFav]=useState(false)
    const [toggleMenu,setToggleMenu]=useState(false)

    const handleFav = () =>{
        setIsFav(!isFav)
    }
    const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
    }

    return(
        <div className="cont cont-hijo-buttons">
        <h2 className="h2 h2-buttons">Buttons</h2>
        <div className="div div-buttons">

            
            {toggleMenu?
            <button className="butt butt-menu" onClick={()=>handleToggle()}> <img className="butt-img" src="/menu-medio.png" alt="" /> </button>:
            <div className='menu-button'>
                <button className="butt butt-menu" onClick={()=>handleToggle()}>
                      <img className="butt-img" src="/menu-medio.png" alt="" />
                      </button>
                      <button className="butt butt-menu" onClick={()=>handleToggle()}>
                      <img className="butt-img" src="/menu-vert.png" alt="" /> 
                      </button>
                      <button className="butt butt-menu" onClick={()=>handleToggle()}>
                      <img className="butt-img" src="/menu-grande.png" alt="" /> 
                      </button>
                      </div> }
<div>
            <button className="butt butt-menu" onClick={()=>handleFav()}> {isFav?<img className="butt-img" src="/corazon-blanco.png" alt="isFav" />:<img className="butt-img"src="/corazon-negro.png" alt="notFav" />}  </button>
            <button className="butt butt-accept"> <img  className="butt-img" src="/more.png" alt="" /> </button>
            <button className="butt butt-submit"> <img  className="butt-img" src="/dado.png" alt="" /> </button>
            <button className="butt butt-cancel"> <img  className="butt-img" src="/close.png" alt="" /> </button>
</div>
<div>
            <button className="butt butt-accept">Accept</button>
            <button className="butt butt-cancel">Cancel</button>
</div>
            <button className="butt butt-submit">Submit</button>
            <button className="butt butt-icon"> <img  className="butt-img" src="/CS3_trans.png" alt="" /> </button>
        </div>
</div>
    )
}
export default Buttons