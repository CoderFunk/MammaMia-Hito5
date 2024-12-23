import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
        <div className="profile-container" id="profile">
            <div><h1>Profile</h1></div>
            <p><h3>Perfil de usuario</h3></p>
            <img src="https://via.placeholder.com/120" alt="Foto de perfil" class="profile-pic" />
            <p>Pedro Pablo Perez Pereira</p>
            <p>Email:</p>
            <div className="email">pedropabloperezpereira@gmail.com</div>
            <Link to="/"> <button className="logout-btn">Cerrar Sesión</button> </Link>
        </div>    
    </>
  )
}

export default Profile