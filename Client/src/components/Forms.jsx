import Login from './Login.jsx'
import Register from './Register.jsx'
import './css/Forms.css'
const Forms = () =>{
    return(
        <div className="Forms" id='forms'>
            <div className="cont cont-hijo-forms">
            <h2 className="h2 h2-forms">Forms</h2>
            <div className="div div-forms">
            <hr/>
                <Login/>
                <Register/>
            </div>
            </div>
        </div>
    )
}
export default Forms