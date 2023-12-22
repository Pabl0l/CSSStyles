
import toast, {Toaster} from 'react-hot-toast'
import './css/CardProduct.css'
const CardProduct = () => {

    const handleFav = () => {
        toast.success('successfully added to shopping cart (it`s just a toast)')
    }
return (
    <div className="sub-cont">
                            <h2 className="sub-h2 h2-card-product">Card product</h2>
                            <div className="sub-div div-card-product">
                                <div className="div-cp">
                                    <div className='div-cp-img'>
                                        <div className=" product-img"></div>
                                    </div>
                                    <div className='div-cp-det'>
                                                <h3 className='h3-cp'>AI Micro Chip</h3>
                                        <div className="div-cp-minidet">
                                                <h4 className='h4-card'>$ 999.99</h4>
                                                <h4 className='h4-card'>This is a description example of a card for IA Micro Chip</h4>
                                        </div>
                                                <button className='butt butt-buy' onClick={handleFav}> Buy! </button>
                                    </div>
                                </div>
                                </div>
                                <Toaster
                                  position="bottom-right"
                                  reverseOrder={false}
                                   />
                        </div>
)
}

export default CardProduct