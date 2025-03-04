/* eslint-disable no-undef */
import React ,{useContext,useState}from 'react'
import {store} from './App';
import './App.css';

const Display = () => {
    const[data,setData] =useContext(store);
    const[name,setName]=useState('');
    const[editIndex, setEditIndex] =useState(null);
    //create (adds new brand)
    const submitHandler = e =>{
        e.preventDefault();
        if(editIndex !== null){
            //Update functionality
            const UpdatedData = [...data];
            UpdatedData[editIndex]= {brandname:name};
            setData(UpdatedData);
            setEditIndex(null);//reset edit index after updating
        }
        else{
            //adds new brand
            setData([...data,{brandname:name}])
        }
        setName(''); //clear input after submit
    };

    //Edit (set item to edit)
    const handleEdit = (index) =>{
        setEditIndex(index); //set the index of the item to edit
        setName(data[index].brandname); //prefill the input with the item to edit
    }

    //delete
    const handleDelete=(index) =>{
        const UpdatedData = data.filter((_,i)=>i !== index);  //remove item by index
        setData(UpdatedData);
    }

  return (
    <div className='card'>
        <div className='cardBody'>
            {/* {data.map(item => <h3 className='cardTitle'>{item.brandname}</h3>)} */}
            {/* Debugging: check if data is structured correctly */}
            {data.length === 0 && <p>No brands added yet.</p>}
            {data.map((item,index)=>(
                <div key={index} className='cardItem'>
                    <h3 className='cardTitle'>{item.brandname}</h3>
                    <button className='submit-btn' onClick={()=> handleEdit(index)}>Edit</button>
                    <button className='submit-btn' onClick={()=> handleDelete(index)}>Delete</button>
                </div>                    
            ))}
            <form className='card-form' onSubmit={submitHandler}>
                <div className='cardBody'>
                    <input type='text' placeholder='Enter your brand' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type='submit' value={editIndex !== null ? 'Update' : 'Add'}/>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Display
