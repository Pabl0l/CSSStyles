import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './css/SimpleList.css'

const SimpleList = () => {
  const [isOpen, setIsOpen] = useState(false)

  const animationProps = useSpring({
    opacity: isOpen ? 1 : 0,
    from: { opacity: 0},
  })

  const handleList = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="sub-cont cont-hijo-simplelist">
      <h2 className="sub-h2 h2-simplelist h2-lists">Simple List</h2>
      <div className="sub-div div-simplelist column">
        <button className='butt butt-simplelist' onClick={handleList}>simpleList</button>
        <animated.div style={animationProps} className="column">
          <button className='butt butt-simplelist'>User Options</button>
          <button className='butt butt-simplelist'>Categories</button>
          <button className='butt butt-simplelist'>Home</button>
          <button className='butt butt-simplelist'>Settings</button>
          <button className='butt butt-simplelist' onClick={handleList}>Close</button>
        </animated.div>
      </div>
    </section>
  )
}

export default SimpleList
