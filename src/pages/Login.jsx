import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
    const [email, setEmail]= useState('');
    const [clave, setClave] = useState('');
    const userName='prueba@prueba.com';
    const pass='prueba';

    function validaForm(){
        if(!email.trim() || !clave.trim()){
            alert("Todos los campos deben ser completados");
            return;
        }else if(email === userName && clave === pass){
            alert("Inicio de sesion correcto");
            setClave('');
            setEmail('');
            return;
        }else{
            alert("El usuario o la clave no son correctos");
            setEmail('');
            setClave('');
            return;
        }
    }
    
    function mideClave(){
        if(clave.length <6){
            alert("La clave debe tener al menos 6 caracteres");
            return
        }
    }

    return (
      
        <form className="d-flex flex-column align-items-center FormStyle">
          <h2>Login</h2>
            <div id='FormDivs'>
                <input type="email" name='email' placeholder='Ingresa tu email' onChange={(e)=> setEmail(e.target.value)}
                    className='peer block w-full py-3 px-3 border' value={email} />
            </div>


            <div id='FormDivs'>
                <input type="password" name='password' placeholder='Contraseña' onChange={(e)=> setClave(e.target.value)}
                    className='peer block w-full py-3 px-3 border' value={clave} onBlur={()=>mideClave()} />
            </div>


            <div>
                <button type="button" className='flex cursor-pointer items-center justify-center w-40 h-10 text-sm font-semibold transition-colors rounded-xl border'
                    onClick={()=>validaForm()}>
                    Ingresar
                </button>
            </div>            
        </form>
    )
}

export default LoginPage