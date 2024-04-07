import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './css/MenuHorizontal.css';

const MenuHorizontal = () => {
  const [isFav, setIsFav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  // Animación para la aparición/desaparición suave de los botones
  const menuAnimation = useSpring({
    opacity: toggleMenu ? 1 : 0,
    transform: `scale(${toggleMenu ? 1 : 0})`,
  });
  const divAnimation = useSpring({
    
  })
  const handleFav = () => {
    setIsFav(!isFav);
  };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section className="cont cont-hijo-menu-horizontal">
      <h2 className="sub-h2 h2-menu-horizontal">Menu Horizontal</h2>
      <div className="sub-div div-menu-horizontal">
        <button
          style={menuAnimation}
          className="butt butt-menu-horizontal"
          onClick={handleToggle}
        >
          {toggleMenu ? (
            <img className="butt-img" src="/menu-medio.png" alt="" />
          ) : (
            <img className="butt-img" src="/menu-medio.png" alt="" />
          )}
        </button>

        {toggleMenu && (
          <animated.div className="sub-div sub-div-menu-horizontal"
          style={divAnimation}>
            <animated.button
              style={menuAnimation}
              className="butt butt-menu"
              onClick={handleFav}
            >
              {isFav ? (
                <img
                  className="butt-img"
                  src="/corazon-blanco.png"
                  alt="isFav"
                />
              ) : (
                <img
                  className="butt-img"
                  src="/corazon-negro.png"
                  alt="notFav"
                />
              )}
            </animated.button>

            <animated.button
              style={menuAnimation}
              className="butt butt-accept"
            >
              <img className="butt-img" src="/more.png" alt="" />
            </animated.button>

            <animated.button
              style={menuAnimation}
              className="butt butt-submit"
            >
              <img className="butt-img" src="/dado.png" alt="" />
            </animated.button>

            <animated.button
              style={menuAnimation}
              onClick={handleToggle}
              className="butt butt-cancel"
            >
              <img className="butt-img" src="/close.png" alt="" />
            </animated.button>
          </animated.div>
        )}
      </div>
    </section>
  );
};

export default MenuHorizontal;
