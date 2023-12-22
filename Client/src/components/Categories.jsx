import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './css/Categories.css'

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false)

  const animationProps = useSpring({
    opacity: isOpen ? 1 : 0,
    from: { opacity: 0 },
  })

  const handleList = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sub-cont cont-hijo-categories">
      <h2 className="sub-h2 h2-categories h2-list">categories</h2>
      <div className="sub-div div-categories column">
        <button className='butt butt-categories butt-cat' onClick={handleList}></button>
        {isOpen && 
        <animated.div style={animationProps} className="div-cat column">
          <button className='butt butt-categories'>Blue</button>
          <button className='butt butt-categories'>Yellow</button>
          <button className='butt butt-categories'>Red</button>
          <button className='butt butt-categories'>Green</button>
          <button className='butt butt-categories' onClick={handleList}>Close</button>
        </animated.div>}
      </div>
    </div>
  )
}

export default Categories
