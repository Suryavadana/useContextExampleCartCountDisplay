import React, { useState, createContext} from 'react'
import './App.css';
import Count from './Count'
import Display from './Display'

export const store= createContext();

const App = () => {

  const [data,setData]=useState([
    {
      brandname: "Samsung"
    },
    {
      brandname: "Apple"
    },
    {
      brandname: "Motorola"
    }

  ])
  return (
    <store.Provider value={[data,setData]}>
      <center>
        <Count/>
        <Display/>
      </center>
    </store.Provider>
  )
}

export default App