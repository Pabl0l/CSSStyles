import { useState } from 'react'
import './css/List.css'
const List = () => {
    const [isOpen,setIsOpen]=useState(false)
    const handleList = () => {
        setIsOpen(!isOpen)
    }
    return(
        <div className="cont cont-hijo-list">
        <h2 className="h2 h2-list">List</h2>
        <div className="div div-list">
            <button className='butt-list' onClick={()=>handleList()}>List</button>
            {isOpen && <>
            <button className='butt-list'>User Options</button>
            <button className='butt-list'>Categories</button>
            <button className='butt-list'>Home</button>
            <button className='butt-list'>Settings</button>
            <button className='butt-list' onClick={()=>handleList()}>Close</button>
            </>}
        </div>
</div>
    )
}
export default List