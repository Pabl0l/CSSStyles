import CardBasic from "./CardBasic.jsx"
import CardAlternative from "./CardAlternative.jsx"
import CardProduct from "./CardProduct.jsx"
const Card = () =>{
    return (
        <div className="cont cont-hijo-card">
                    <h2 className="h2 h2-card">Card</h2>
                    <div className="div div-card">
                        <hr />
                    <CardBasic />
                    <CardAlternative />
                    <CardProduct />
                    </div>
                    </div>

    )
}

export default Card