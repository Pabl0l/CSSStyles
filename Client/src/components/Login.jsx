import './css/Login.css'
const Login = () =>{
    return(
        <section className="sub-cont">
                        <h2 className="sub-h2 h2-login">Login</h2>
                        <div className="sub-div div-login">

                            <div className="login-container">
                                    <form action="">
                                        <h2 className='h2-log-in'>Log in!</h2>
                                        <input className="login-input" type="email" placeholder="email" required/>
                                        <input className="login-input" type="password" placeholder="password" required/>
                                        <button  className="login-button" type="submit">Enter</button>
                                        <p className="pform"> or you can start session using:</p>
                                        <div className="div-login-icons">
                                            <a className="login-icons" href=""><img  src="/facebook.png" alt=""/></a><a className="login-icons" href=""><img  src="/google.png" alt=""/></a>
                                        </div>
                                    </form>
                            </div>


                        </div>
                    </section>
    )
}
export default Login