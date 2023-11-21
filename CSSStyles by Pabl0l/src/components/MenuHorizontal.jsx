import {useState} from 'react'
import './css/MenuHorizontal.css'

const MenuHorizontal = () => {

    const [isFav,setIsFav]=useState(false)
    const [toggleMenu,setToggleMenu]=useState(false)

    const handleFav = () =>{
        setIsFav(!isFav)
    }
    const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
    }

    return(
        <div className="cont cont-hijo-menu-horizontal">
        <h2 className="h2 h2-menu-horizontal">Menu Horizontal</h2>
        <div className="div div-menu-horizontal">
        
        {toggleMenu? <>   <button className="butt butt-menu-horizontal" onClick={()=>handleToggle()}>{toggleMenu? <img className="butt-img" src="/menu-medio.png" alt="" />: <img className="butt-img" src="/menu-medio.png" alt="" /> }</button><div className='sub-div sub-div-menu-horizontal'>            <button className="butt butt-menu" onClick={()=>handleFav()}> {isFav?<img className="butt-img" src="/corazon-blanco.png" alt="isFav" />:<img className="butt-img"src="/corazon-negro.png" alt="notFav" />}  </button>
            <button className="butt butt-accept"> <img  className="butt-img" src="/more.png" alt="" /> </button>
            <button className="butt butt-submit"> <img  className="butt-img" src="/dado.png" alt="" /> </button>
            <button className="butt butt-cancel"> <img  className="butt-img" src="/close.png" alt="" /> </button></div></>:<button className="butt butt-menu-horizontal" onClick={()=>handleToggle()}>{toggleMenu? <img className="butt-img" src="/menu-medio.png" alt="" />: <img className="butt-img" src="/menu-medio.png" alt="" /> }</button>}
            
            
        </div>
</div>
    )
}
export default MenuHorizontal