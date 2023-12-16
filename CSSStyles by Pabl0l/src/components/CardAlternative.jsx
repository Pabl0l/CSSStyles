import {useState} from 'react'
import './css/CardAlternative.css'

const CardAlternative = () => {
    const [Fav, setFav] = useState(false)

    const handleFav = () => {
        setFav(!Fav)
    }
return (
    <div className="sub-cont">
                            <h2 className="sub-h2 h2-card-alternative">Card alternative</h2>
                            <div className="sub-div div-card-alternative">
                            <div className="div-card- div-ca">
                                    <h3 className='h3-ca'>SPACIAL-APE</h3>
                                    <div className='div-ca-cont ca-img'>
                                        <div className="div-img-ca"></div>
                                    </div>
                                    <div className='div-ca-cont det-ca'>
                                        <div className="det-ca">                                                
                                                <h4 className='h4-card'>17 Years old</h4>
                                                <h4 className='h4-card'>Animal Astronaut</h4>
                                                <h4 className='h4-card'>This is a description example of a card for a brave special ape </h4>
                                                <button className='butt butt-fav' onClick={handleFav}> {Fav? <img className='img-fav' src="/corazon-blanco.png" alt="" />: <img className='img-fav' src="/corazon-negro.png" alt="" /> } </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
)
}

export default CardAlternative