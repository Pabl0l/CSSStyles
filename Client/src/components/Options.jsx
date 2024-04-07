import { useState } from 'react'
import './css/Options.css'
const Options = () => {
    const [toggleButton,setToggleButton]=useState(false)

    const handleButton = () => {
        setToggleButton(!toggleButton)
    }


    return(
        <section className="cont cont-hijo-options" id='options'>
        <h2 className="h2 h2-options">Options</h2>
        <div className="div div-options">
            <div className='cont-options float'>
            <button className='butt butt-option' onClick={()=>handleButton()}> <img className='butt-img ' src="/menu-vert.png" alt="" /> </button>
            {toggleButton?<div className="sub-div sub-div-options float">
                <button className='butt butt-options'>Option 1</button>
                <button className='butt butt-options'>Option 2</button>
               <hr className='hr-options'/>
                <button className='butt butt-options'>A</button>
                <button className='butt butt-options'>B</button>
                <hr className='hr-options'/>
                <button className='butt butt-options'> <img className='butt-img' src="/settings.png" alt="" /> </button>
                <button onClick={()=>handleButton()} className='butt butt-options'> <img 
                className='butt-img' src="/close.png" alt="" /> </button>
            </div>:null}
            </div>
        </div>
</section>
    )
}
export default Options