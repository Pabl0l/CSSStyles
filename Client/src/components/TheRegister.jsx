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
        imagen:null,
    });


    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        name === 'password' ? setPass(value) : setConPass(value);
        setPasswordsMatch(name === 'password' ? value === conPass : pass === value);
    };
       
    const handleUpload = async (image) => {
        const formData = new FormData();
        formData.append('imagen', image);

        console.log("fomrData:", formData)
      
        try {
          const response = await axios.post('http://localhost:3001/users/imageUpload', formData);
          if (response.data.success) {
            console.log('Imagen subida con exito!');
          } else {
            console.log('Error al subir la imagen');
          }
        } catch (error) {
          console.log('error en handleUpload: ',error);
        }
      };

      const handleChange = (e) => {
        const imagen = (e.target.files[0]);
        console.log("handleChange:", imagen)
        handleUpload(imagen);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        await axios.post('http://localhost:3001/users', formData, {
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => {
                console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
                console.error('Error al enviar datos en el registro:', error);
            });
            
            onLogoutClick()
            onLogin(formData.username,formData.password)
            console.log("termina handleSubmit")
    };
    
    return (
        <div className="theregister">
            <div className="div-theregister">
                <h2>Register</h2>
                <form action="/users" method='POST' encType='multipart/form-data'>

                <input className='input-tr' type="text" placeholder="username" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                
                <input className='input-tr' type="text" placeholder="role" name="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />

                <input className='input-tr' type="password" placeholder="password" name="password" value={pass} onChange={handlePasswordChange} />
                
                <input className='input-tr' type="password" placeholder="confirm password" name="confirmPassword" value={conPass} onChange={handlePasswordChange} />

                <input className='input-file input-tr' type="file" name="imagen" placeholder="Imagen" onChange={handleChange}/>

                {!passwordsMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}

                <button className='butt butt-tr-register butt-accept' type="submit" onClick={handleSubmit} disabled={!passwordsMatch}>Register!</button>
            
                </form>
            </div>
                <button type='submit' className='butt butt-theregister-close close-tuo butt-cancel' onClick={()=>onLogoutClick()}></button>
        </div>
    );
};

export default TheRegister;

