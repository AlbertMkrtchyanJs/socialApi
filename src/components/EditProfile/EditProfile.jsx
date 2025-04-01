import React from 'react'
import { API } from '../../api/api'
import style from './EditProfile.module.css'

const EditProfile = () => {
  
  const Photofile = (e) => {
   const file = e.target.files[0]

   API.putPhoto(file)
  } 
  
  return (
    <div className={style.main}>
      <h3 className={style.font}>DRAG FILE TO EDIT YOUR AVATAR</h3>
      <input className={style.font} type="file" onChange={Photofile}/>
    </div>
  )
}

export default EditProfile