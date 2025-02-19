import React, { useEffect, useState } from "react";
import logo from "../assets/female-medical.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const AlUsers = () => {
  const [data, setData] = useState([]);
  const getAllUsers = async () => {
    await axios
      .get("https://auth-user-yvxy.onrender.com/api/user/all")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[768px]:grid-cols-2 max-[575px]:grid-cols-1 gap-3 p-4">
      {data.map((props,index)=>(
        <div className="border-2 rounded-md p-5" key={index}>
        <div className="flex justify-between items-center mb-4">
          <div className="leading-7">
            <div className=" text-[#969696] font-semibold text-textClamp">
              {props?.email}
            </div>
            <Link to={`/detail/${props._id}`}><div className="font-bold text-mainClamp">{props?.userName}</div></Link>
          </div>
          <div className="size-16">
            <img
              className="object-contain size-full"
              src={logo}
              alt="company logo"
            />
          </div>
        </div>
        <div className="text-secondary font-bold text-textClamp mb-4">
          {props?.phone_No}
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          minima, pariatur adipisci impedit vel iure quod laborum repellat modi?
          Perferendis hic...
        </div>
        <div className="mt-4 flex justify-between items-center font-semibold">
          <div>Lagos, Nigeria</div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default AlUsers;
