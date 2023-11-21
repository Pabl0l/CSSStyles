import MenuVertical from './MenuVertical.jsx'
import MenuHorizontal from './MenuHorizontal.jsx'
import './css/Menu.css'
const Menu = () => {
    return(
        <div className="cont cont-hijo-menu">
        <h2 className="h2 h2-menu">Menu</h2>
        <div className="div div-menu">
            <MenuVertical />
            <MenuHorizontal />
        </div>
</div>
    )
}
export default Menu