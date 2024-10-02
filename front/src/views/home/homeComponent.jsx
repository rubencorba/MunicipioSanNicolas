import { useEffect } from 'react';
import './homeStyles.css';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/actions';

function Home() {
  const dispatch= useDispatch();
  useEffect (()=>{
    dispatch(getAllUsers());
  },[dispatch])
  return (
    <div>
      <p>Este es el home</p>
    </div>
  );
}

export default Home;