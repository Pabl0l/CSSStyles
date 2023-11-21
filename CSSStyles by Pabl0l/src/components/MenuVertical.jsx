import {useState} from 'react'
import './css/MenuVertical.css'
const MenuVertical = () => {

    const [isFav,setIsFav]=useState(false)
    const [toggleMenu,setToggleMenu]=useState(false)

    const handleFav = () =>{
        setIsFav(!isFav)
    }
    const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
    }

    return(
        <div className="cont cont-hijo-menu-vertical">
        <h2 className="h2 h2-menu-vertical">Menu vertical</h2>
        <div className="div div-menu-vertical">
        
         

            {toggleMenu? <>   <button className="butt butt-menu-vertical" onClick={()=>handleToggle()}>{toggleMenu? <img className="butt-img" src="/menu-medio.png" alt="" />: <img className="butt-img" src="/menu-vert.png" alt="" /> }</button><div className='sub-div sub-div-menu-vertical'>            <button className="butt butt-menu" onClick={()=>handleFav()}> {isFav?<img className="butt-img" src="/corazon-blanco.png" alt="isFav" />:<img className="butt-img"src="/corazon-negro.png" alt="notFav" />}  </button>
            <button className="butt butt-accept"> <img  className="butt-img" src="/more.png" alt="" /> </button>
            <button className="butt butt-submit"> <img  className="butt-img" src="/dado.png" alt="" /> </button>
            <button className="butt butt-cancel"> <img  className="butt-img" src="/close.png" alt="" /> </button></div></>:<button className="butt butt-menu-vertical" onClick={()=>handleToggle()}>{toggleMenu? <img className="butt-img" src="/menu-medio.png" alt="" />: <img className="butt-img" src="/menu-vert.png" alt="" /> }</button>}
            
            
        </div>
</div>
    )
}
export default MenuVertical