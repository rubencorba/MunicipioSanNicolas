import Navbar from '../../components/navbar/navbarComponent';

import nuevoTramiteLogo from './NuevoTramite.jpg'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const navegar = () =>{
    navigate('/create')
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center mt-10 min-h-screen">
      <button onClick={navegar}>
        <img src={nuevoTramiteLogo} alt="nuevoTramiteLogo" className="w-[10rem]" />
        <p className="hover:text-blue-500">Nuevo Trámite</p>
      </button>
      </div>
    </div>
  );
}

export default Home;