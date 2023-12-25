/* eslint-disable react/prop-types */
import axios from 'axios';
import './css/TheRegister.css';
import { useState } from 'react';

const TheRegister = ({onLogoutClick, onLogin}) => {
    const [pass, setPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role:'',
    });


    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        name === 'password' ? setPass(value) : setConPass(value);
        setPasswordsMatch(name === 'password' ? value === conPass : pass === value);
    };


    const handleSubmit = async () => {
        const jsonData = JSON.stringify(formData);
    
       await axios.post('http://localhost:3001/users', jsonData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
                console.error('Error al enviar datos:', error);
            });
            
            onLogoutClick()
            onLogin(formData.username,formData.password)
            console.log("termina handleSubmit")
    };
    
    return (
        <div className="theregister">
            <div className="div-theregister">
                <h2>Register</h2>
                
                <input className='input-tr' type="text" placeholder="username" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                
                <input className='input-tr' type="text" placeholder="role ex. Teacher, Admin, Web Dev..." name="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />

                <input className='input-tr' type="password" placeholder="password" name="password" value={pass} onChange={handlePasswordChange} />
                
                <input className='input-tr' type="password" placeholder="confirm password" name="confirmPassword" value={conPass} onChange={handlePasswordChange} />

                {/* <input className='input-tr' type="file" name="imagen" placeholder="Image"/> */}

                {!passwordsMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}

                <button className='butt butt-tr-register butt-accept' type="submit" onClick={handleSubmit} disabled={!passwordsMatch}>Register!</button>
            
            </div>
                <button className='butt butt-theregister-close close-tuo butt-cancel' onClick={()=>onLogoutClick()}></button>
        </div>
    );
};

export default TheRegister;
