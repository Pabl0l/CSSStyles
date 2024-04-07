import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './css/MenuVertical.css';

const MenuVertical = () => {

  const [isFav, setIsFav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  // Animación para la aparición/desaparición suave de los botones
  const menuAnimation = useSpring({
    opacity: toggleMenu ? 1 : 0,
    transform: `scale(${toggleMenu ? 1 : 0})`,
  });

  const handleFav = () => {
    setIsFav(!isFav);
  };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section className="cont cont-hijo-menu-vertical">
      <h2 className="sub-h2 h2-menu-vertical">Menu vertical</h2>
      <div className="sub-div div-menu-vertical">
        <button className="butt butt-menu-vertical" onClick={handleToggle}  >
          {toggleMenu ? (
            <img className="butt-img" src="/menu-medio.png" alt="" />
          ) : (
            <img className="butt-img" src="/menu-vert.png" alt="" />
          )}
        </button>

        {toggleMenu && (
          <div className="sub-div sub-div-menu-vertical">
            <animated.button
              style={menuAnimation}
              className="butt butt-menu"
              onClick={handleFav}
            >
              {isFav ? (
                <img className="butt-img" src="/corazon-blanco.png" alt="isFav" />
              ) : (
                <img className="butt-img" src="/corazon-negro.png" alt="notFav" />
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
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuVertical;
