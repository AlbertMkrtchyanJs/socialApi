import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserTC } from "./store/reducers/getUserReducer/getUserReducer";
import { Route, Routes } from "react-router-dom";

import UserPage from "./pages/UserPage/UserPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";



import "./App.css";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUserTC());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/users" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
