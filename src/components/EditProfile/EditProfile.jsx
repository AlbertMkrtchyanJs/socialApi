import React from 'react'
import { API } from '../../api/api'

const EditProfile = () => {
  
  const Photofile = (e) => {
   const file = e.target.files[0]

   API.putPhoto(file)
  } 
  
  return (
    <div>
      <h3>DRAG FILE TO EDIT YOUR AVATAR</h3>
      <input type="file" onChange={Photofile}/>
    </div>
  )
}

export default EditProfile