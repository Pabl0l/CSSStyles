import { useState } from 'react';
import './Register.css'
const Register = () => {
    const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

    return (
        <div className="sub-cont">
                        <h2 className="sub-h2 h2-register">Register</h2>
                        <p className="description">Modelo de register con nombre, apellido, teléfono, correo, contraseña, género, dirección, fecha de nacimiento y comentarios.</p>
                        <div className="sub-div div-register">
                        <div className="register-container">
                                    <form onSubmit={handleSubmit}>
                                        <h2 className='h2-log-in'>Register!</h2>
                                        <input className="register-input" type="text" placeholder="name" required/>
                                        <input className="register-input" type="text" placeholder="lastname" required/>
                                        <div className='register-input div-phone-number'>
                                        <input className="register-input mini" type="tel" placeholder="+57" required/>
                                        <input className="register-input tel" type="tel" placeholder="phone number" required/>
                                        </div>
                                        <input className="register-input" type="date" placeholder="birthday" required/>
                                        <div className='register-input div-input'>
                                        <input className="register-input radio" type="radio" id="masculine" name="genero" value="masculine"/><label className='label-register' htmlFor="masculino">Masculine</label><br />
                                        <input className="register-input radio" type="radio" id="femenine" name="genero" value="femenine"/><label className='label-register' htmlFor="femenino">Femenine</label><br />
                                        <input className="register-input radio" type="radio" id="genderless" name="genero" value="genderless"/><label className='label-register' htmlFor="femenino">Genderless</label><br />
                                        <input className="register-input radio" type="radio" id="prefer not say" name="genero" value="prefer not say"/><label className='label-register' htmlFor="femenino">Prefer not say</label><br />
                                        <input className="register-input radio" type="radio" id="Other" name="genero" value="`Other`"/><label className='label-register' htmlFor="femenino">Other</label><br />
                                        </div>
                                        <input className="register-input" type="text" placeholder="address" required/>
                                        <input className="register-input" type="email" placeholder="email" required/>
                                        <input className="register-input" type="password" id="password" placeholder="password"  value={password} onChange={handlePasswordChange} required/>
                                        <input className="register-input" type="password" id="confirmPassword" placeholder="confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
                                        {!passwordsMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p>}
                                        <input className="register-input" type="text" placeholder="comments" required/>
                                        <button className="register-button" type="submit">Register</button>
                                        <p className="pform"> or you can register using:</p>
                                        <div className="div-register-icons">
                                            <a className="register-icons" href=""><img  src="/facebook.png" alt=""/></a><a className="register-icons" href=""><img  src="/google.png" alt=""/></a>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
    )
}

export default Register