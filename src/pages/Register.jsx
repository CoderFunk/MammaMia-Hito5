import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const RegisterPage = () => {
    const [email, setEmail]= useState('');
    const [clave, setClave] = useState('');
    const [confClave, setConfClave] = useState('');
    const [error, setError] = useState(false);

    function validaForm(){
        if  (!email.trim() || !clave.trim() || !confClave.trim())
            {
            alert("Todos los campos deben ser completados");
            return;
        }
        else {
            compararClave();
            alert("Formulario enviado correctamente");
            setEmail('');
            setClave('');
            setConfClave('');
        }
        
    }

    // Comparacion de claves 
    function compararClave(){
        if(clave !== confClave){
            alert("Las claves no coinciden");
            setConfClave("");
            return
        }
        setError(false)    
    }

    // Caracteres minimos de clave 
    function mideClave(){
        if(clave.length <6){
            alert("La clave debe tener al menos 6 caracteres");
            setClave('');
        }
    }




  return (
        <form className="d-flex flex-column align-items-center FormStyle">
        <h2>Regístrate</h2>
            {/* email */}
            <div id='FormDivs'>
                <input type="email" name='email' placeholder='Ingresa tu email' onChange={(e)=> setEmail(e.target.value)}
                className='peer block w-full py-3 px-3 border' value={email} />
            </div>


            {/* pass */}
            <div id='FormDivs'>
                <input type="password" name='clave' placeholder='Ingrese Clave' onChange={(e)=> setClave(e.target.value)}
                className='peer block w-full py-3 px-3 border' value={clave} onBlur={()=>mideClave()}  />
            </div>


            {/* Comprobar pass  */}
            <div id='FormDivs'>
                <input type="password" name='confClave' placeholder='Confirma tu Clave' onChange={(e)=> setConfClave(e.target.value)}
                className='peer block w-full py-3 px-3 border' value={confClave} onBlur={()=>compararClave()}  />                
            </div>


            {/* Boton  */}
            <div>
                <button type="button"
                className='flex cursor-pointer items-center justify-center w-40 h-10 text-sm font-semibold transition-colors rounded-xl border'
                    onClick={()=>validaForm()}>
                    Regitrar
                </button>
            </div>        
        </form>
  )
}

export default RegisterPage