import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getUserTC } from './store/reducers/getUserReducer/getUserReducer'
import { Route, Routes } from 'react-router-dom'

import UserPage from './pages/UserPage/UserPage'

import './App.css'

function App() {
const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUserTC())
  },[])
  
  return (
    <>
    <Routes>
    <Route path='/users' element={<UserPage />}/>
    </Routes>
    </>
  )
}

export default App
