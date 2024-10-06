import { useNavigate } from 'react-router-dom';
import './landingStyles.css';
import { useState } from 'react';

import snLogo from './sn-logo.png'
import { useDispatch } from 'react-redux';
import { updateCurrentUser } from '../../redux/actions';

function Landing() {

  const navigate = useNavigate();
  const dispatch= useDispatch();


  const login= async (userData)=> {
    const { usuario, contraseña } = userData;
    if (usuario==="usuario" && contraseña==="123asd"){
        dispatch(updateCurrentUser('user'))
        navigate('/home')
    }else if (usuario==="admin" && contraseña==="123asd"){
      dispatch(updateCurrentUser('admin'))
      navigate('/allTramites')
    }else{
        throw Error("Usuario o contraseña incorrectos")
    }
  }


  const [userData, setUserData]= useState({
    usuario: '',
    contraseña: ''
  })

  const handleChange= (event)=>{
    setUserData({
        ...userData,
        [event.target.name] : event.target.value
    })
  }


  const handleSubmit=(event)=>{
    event.preventDefault();
    
    login(userData)
  }




  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto  w-auto" src={snLogo} alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Ingreso a tu cuenta</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" /* action="#" */ /* method="POST" */ onSubmit={handleSubmit}>
      <div>
        <label /* for="email" */ class="block text-sm font-medium leading-6 text-gray-900">Usuario</label>
        <div class="mt-2">
          <input
           /* id="email" */
           /* name="email" */
           /* type="email"  */
           /* autocomplete="email" */ 
           required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           
           value={userData.usuario} name='usuario' onChange={handleChange}/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label /* for="password" */ class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
          <div class="text-sm">
            <a /* href="#" */ class="font-semibold text-indigo-600 hover:text-indigo-500">Olvidaste tu contraseña?</a>
          </div>
        </div>
        <div class="mt-2">
          <input 
            /* id="password" 
            name="password" 
            type="password" */ 
            /* autocomplete="current-password" */ 
            required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            
            value={userData.contraseña} name='contraseña' onChange={handleChange}/>
        </div>
      </div>

      <div>
        <button
         type="submit"
         class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

         
         >Ingresar
         </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      No estás registrado?
      <a /* href="#" */ class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Crea una cuenta</a>
    </p>
  </div>
</div>
  );
}

export default Landing;