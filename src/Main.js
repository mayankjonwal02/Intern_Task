import React from 'react'
import CardComponent from './CardComponent'
import "./customcss.css"

export default function Main() {
  return (
    <div className='bg-white' style={{padding:"100px",justifyContent:"flex-start",width:"100%",height:"100%",alignItems:"center",display:"flex",flexDirection:"Column"}}>
      <h1 className='fw-bold'>
        Select Image
      </h1>

      <div className='mygrid'>
       
        {
           Array(25).fill().map((_,index) => (
            <CardComponent/>
           ))
        }

        {/* {
    Array(25).fill().map((_, index) => (
        <CardComponent key={index} />
    ))
} */}

      </div>
    </div>
  )
}
