import React, {useContext} from 'react'
import {store} from './App';

const Count = () => {
    // eslint-disable-next-line no-unused-vars
    const[data,setData] = useContext(store);
  return (
    <div className='card'>
        <div className='cardBody'>
            <h3 className='cardTitle'>Count: {data.length}</h3>

        </div>
      
    </div>
  )
}

export default Count;
