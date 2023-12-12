import './css/TheCategories.css'
import { useState } from 'react'
const TheCategories = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleList = () => {
        setIsOpen(!isOpen)
      }
    return(
        <div className="thecategories">
            <button className="butt cat butt-thebar butt-thecat" onClick={handleList}></button>
            {isOpen&&
                             <div className="div-thecat float">
                                 <button   className='butt butt-cate'>Option 1</button>
                                 <button   className='butt butt-cate'>Option 2</button>
                                 <button   className='butt butt-cate'>Option 3</button>
                                 <button   className='butt butt-cate'>Option 4</button>
                                 <hr className='hr-cat'/>
                                 <button   className='butt butt-cate'>A</button>
                                 <button   className='butt butt-cate'>B</button>
                                 <button   className='butt butt-cate'>C</button>
                                 <button   className='butt butt-cate'>D</button>
                             </div>
           }
        </div>
    )
}
export default TheCategories