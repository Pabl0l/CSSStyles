/* eslint-disable react/prop-types */
import './css/TheLogin.css';
import { useState } from 'react';

const TheRegister = ({onLogoutClick, onLogin}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role:'',
    });


    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setFormData((prevData) => ({ ...prevData, image: file }));
    // };


    const handleSubmit = () => {
            onLogin(formData.username,formData.password)
    };
    
    return (
        <div className="theregister">
            <div className="div-theregister">
                <h2>Log In!</h2>
                
                <input className='input-tr' type="text" placeholder="username" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                
                <input className='input-tr' type="password" placeholder="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>

                <button className='butt butt-tr-register butt-accept' type="submit" onClick={handleSubmit}>Log In!</button>
            
            </div>
                <button className='butt butt-theregister-close close-tuo butt-cancel' onClick={()=>onLogoutClick()}></button>
        </div>
    );
};

export default TheRegister;
