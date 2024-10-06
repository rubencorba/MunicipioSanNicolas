import {Route,Routes} from "react-router-dom";

import { Fragment, useEffect, useState } from 'react'
import Navbar from "../../components/navbar/navbarComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllTramites, getAllUsers } from "../../redux/actions";





function AllMyTramites() {

    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(getAllTramites())
    }, []);

    const tramitesPendientes = useSelector((state) => state.allTramites)
    console.log(tramitesPendientes)
    


  return (
    <div>
    <Navbar></Navbar>
    {/* <nav class="bg-gradient-to-b from-gray-800 to-gray-600 p-4">
  <div class="flex justify-center space-x-4">
    <button class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Pendientes</button>
    <button class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Aprobados</button>
    <button class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Rechazados</button>
  </div>
    </nav> */}








    {tramitesPendientes.map((tramite, index) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full my-24">

      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Información del Trámite</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Detalles personales</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Estado del trámite</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramite.estado}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Comentario</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramite.comentario}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre completo</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramite.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de nacimiento</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramite.fechaNacimiento}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Domicilio</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramite.domicilio}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">DNI</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramite.dni}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Sexo</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{tramite.sexo}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Foto frontal DNI</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <img src={tramite.imagen} alt="foto del DNI" />
            </dd>
          </div>
          {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Comentario</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input type="text" class="w-full h-16 text-xs p-4 border border-gray-300 rounded-md" />
            </dd>
          </div> */}


          {/* <div class="flex justify-center space-x-4">
  <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
    Aprobar
  </button>
  <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
    Rechazar
  </button>
</div> */}
         
        </dl>
      </div>
    </div>
    </div>
    ))}


    </div>



  );
}

export default AllMyTramites;