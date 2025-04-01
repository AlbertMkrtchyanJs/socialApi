import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getUserTC } from "./store/reducers/getUserReducer/getUserReducer";
import { Route, Routes } from "react-router-dom";

import UserPage from "./pages/UserPage/UserPage";
import Layout from "./components/Layout/Layout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getUserTC());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<HomePage/>}/>
          <Route path="/users" element={<UserPage />} />
          <Route path="/profile/:id" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
