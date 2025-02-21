import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/female-medical.jpg";

const UserDetail = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  const getUserDetail = async () => {
    await axios
      .get(`https://auth-user-yvxy.onrender.com/api/user?userId=${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(()=>{
getUserDetail()
  },[])
  return (
    <div>
      <div className="border-2 rounded-md p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="leading-7">
            <div className=" text-[#969696] font-semibold text-textClamp">
              {data?.email}
            </div>
              <div className="font-bold text-mainClamp">{data?.userName}</div>
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
          {data?.phone_No}
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
    </div>
  );
};

export default UserDetail;
