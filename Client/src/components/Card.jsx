import CardBasic from "./CardBasic.jsx"
import CardAlternative from "./CardAlternative.jsx"
import CardProduct from "./CardProduct.jsx"
import './css/Card.css'
const Card = () =>{
    return (
        <section className="cont cont-hijo-card" id='card'>
                    <h2 className="h2 h2-card">Card</h2>
                    <div className="div div-card">
                        <hr />
                    <CardBasic />
                    <CardAlternative />
                    <CardProduct />
                    </div>
                    </section>

    )
}

export default Card