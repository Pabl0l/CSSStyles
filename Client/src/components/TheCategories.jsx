import './css/TheCategories.css'
import { useState } from 'react'
import { Link, animateScroll  } from 'react-scroll';
const TheCategories = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleList = () => {
        setIsOpen(!isOpen)
      }
      const scrollToComponent = () => {
        animateScroll.scrollTo('forms', {
          duration: 800,
        });
      };
    return(
        <section className="thecategories">
            <button className="butt cat butt-thebar butt-thecat" onClick={handleList}></button>
            {isOpen&&
                             <div className="div-thecat float">
                                        <Link to="forms" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Forms</button>
                                        </Link>
                                        <Link to="buttons" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Buttons</button>
                                        </Link>
                                        <Link to="icons" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Icons</button>
                                        </Link>
                                        <Link to="list" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>List</button>
                                        </Link>
                                        <Link to="menu" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Menu</button>
                                        </Link>
                                        <Link to="options" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Options</button>
                                        </Link>
                                        <Link to="bar" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Bar</button>
                                        </Link>
                                        <Link to="card" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Card</button>
                                        </Link>
                                        <Link to="about" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>About</button>
                                        </Link>
                                        <Link to="comments" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Comments</button>
                                        </Link>
                                        <Link to="post" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Post</button>
                                        </Link>
                                        <Link to="footer" smooth={true} offset={-70}>
                                        <button   className='butt butt-cate' onClick={scrollToComponent}>Footer</button>
                                        </Link>
                             </div>
           }
        </section>
    )
}
export default TheCategories