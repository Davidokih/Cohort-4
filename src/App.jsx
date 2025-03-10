// import Card from "./components/Card";
// import Hero from "./components/Hero";
// import MobileMenu from "./components/MobileMenu";
// import CallbackMemo from "./hooks/CallbackMemo";
// import Reducer from "./hooks/Reducer";
// import CompLayout from "./layout/CompLayout";
import GlobalLayout from "./layout/GlobalLayout";

// import data from "./Data.json";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Products from "./components/products";
import { Route, Routes } from "react-router-dom";
import Login from "./app/Login";
import Register from "./app/Register";
import AlUsers from "./app/AlUsers";
import UserDetail from "./app/UserDetail";
import UpdateDetail from "./app/UpdateDetail";
import UploadFile from "./app/UploadFile";

const App = () => {
  // const [productData, setProductData] = useState();

  // const getAllProduct = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     console.log(response);
  //     setProductData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllProduct();
  // }, []);
  return (
    <GlobalLayout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<UploadFile />} />
        <Route path="/detail/:id" element={<UserDetail />} />
        <Route path="/update" element={<UpdateDetail />} />
      </Routes>
    </GlobalLayout>
  );
};

export default App;
