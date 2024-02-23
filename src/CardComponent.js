import React, { useEffect, useState } from 'react'

export default function CardComponent() {

    const [imageurl , setImageURL] = useState("")

    useEffect(() => {
        fetchRandomImage()
        .then(url => setImageURL(url))
        .catch(error => setImageURL(error))
},[])

  return (
    <div>
      <div className="card" style={{width:"18rem",boxShadow:"0px 0px 10px rgba(0,0,0,0.5)"}}>
  <img src={imageurl} className="card-img-top" alt="..." style={{height:"14rem"}}/>
  <div className="card-body">
    
<div className='text-primary fw-bold'>Sample Image</div>
  </div>
</div>
    </div>
  )
}

function fetchRandomImage() {
    return fetch('https://picsum.photos/200/300')
        .then(response => 
      {    console.log(response)
          return response}
          )
          .then(
            data => {
              console.log(data.url)
              return data.url}
          )
}
