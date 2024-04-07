import './css/CardBasic.css';
import {useState} from 'react'
const CardBasic = () => {

    const [Fav, setFav] = useState(true)

    const handleFav = () => {
        setFav(!Fav)
    }

return (
    <section className="sub-cont">
                            <h2 className="sub-h2 h2-card-basic">Card basic</h2>
                            <div className="sub-div div-card-basic">
                                <div className="div-card-">
                                    <div className='div-card-cont'>
                                        <div className="div-img-card cb-img"></div>
                                    </div>
                                    <div className='div-card-cont det'>
                                        <div className="det-card cb">
                                                <h3>Vaca Colo Rida</h3>
                                                <h4 className='h4-card'>30 Years old</h4>
                                                <h4 className='h4-card'>Milker</h4>
                                                <h4 className='h4-card'>This is a description example of a card for a crazy cow</h4>
                                                <button className='butt butt-fav' onClick={handleFav}> {Fav? <img className='img-fav' src="/corazon-blanco.png" alt="" />: <img className='img-fav' src="/corazon-negro.png" alt="" /> } </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
)
}

export default CardBasic