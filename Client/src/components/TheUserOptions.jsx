import './css/TheUserOptions.css'
import axios from 'axios'
import { useState } from 'react'
import TheRegister from './TheRegister.jsx'
import TheLogin from './TheLogin.jsx'
const TheUserOptions = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [registering, setRegistering] = useState(false)
    const [onLog, setOnLog] = useState(false)
    const [userData, setUserData] = useState({
        username: "Invited",
        role: "",
        imagen:""
    })
    const handleList = () => {
        setIsOpen(!isOpen)
      }

      const loginButton = () => {
        setRegistering(true)
        setOnLog(false)
    }
    
    const handleLogIn = () => {
        setOnLog(true)
        setRegistering(false)
    }
    const onSubmitClick = () => {
        setRegistering(false)
        setOnLog(false)
    }
    const handleLogOut = () => {
        setUserData({
            username: "Invited",
            role: "",
        })
    }


      const onLogin = async (username, password) => {

        await axios.get(`http://localhost:3001/users`)
          .then(response => {
            console.log("onLogin:",response.data);
            const userOnLogin = response.data.find(user => user.username === username)
      
            if (userOnLogin) {
              if (userOnLogin.password === password) {
                    console.log("Ingreso exitoso: ", username, userOnLogin.role, userOnLogin.imagen);
                    
                    setUserData({
                        username: username,
                        role: userOnLogin.role,
                        imagen:userOnLogin.imagen
                    })
                    
                    setOnLog(false)
              } else {
                console.log("Contraseña incorrecta");
              }
            } else {
              console.log("Usuario no encontrado");
            }
          })
          .catch(error => {
            console.error('Error al obtener datos:', error.message);
          });
      };
      


    return(
        <>
        <div className="theuseroptions">
            
            <button className="butt butt-thebar butt-bar-tuo" onClick={handleList}></button>
            {isOpen&&
                             <div className="div-tuo float">
                                { userData.imagen &&
                                <div className='div-cont-img-tuo'>
                                    <div className='div-img-tuo'> 
                                      <img className='div-img-user' src={userData.imagen} alt="" />
                                      </div>
                                </div> 
                                      }
                                <div className='det-tuo'>
                                    <h3 className='h3-tuo'> {userData.username.split(' ')[0]} </h3>
                                   { userData.username === "Invited"   ?  null: <h3 className='h3-tuo-role'> {userData.role} </h3>}
                                    
                                        {
                                            userData.username === "Invited"   ?   
                                            <>
                                            <button className='butt butt-tuo login-tuo' onClick={handleLogIn}> log in </button>
                                            <button className='butt butt-tuo register-tuo' onClick={loginButton}>register</button>
                                            </>
                                            :
                                            <>
                                            {/* <button className='butt butt-tuo edit-tuo' onClick={handleEdit}> edit</button> */}
                                            <button className='butt butt-tuo register-tuo' onClick={handleLogOut}> log out </button>
                                            </>
                                        }
                                        

                                </div>
                             </div>
           }
        </div>
        {registering &&<TheRegister onLogoutClick={onSubmitClick} onLogin={onLogin}/>}
        {onLog && <TheLogin onLogoutClick={onSubmitClick} onLogin={onLogin}/>}
        </>
    )
}
export default TheUserOptions