import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Github() {
  const navigate = useNavigate();
  // const data = useLoaderData()
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/ashgole");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  


  const randomNUmber = Math.floor(Math.random()*100+1)
  console.log(randomNUmber)


  const submiData = () => {
    navigate(`/user/${randomNUmber}`,{
      state:{
        userid:12566322
      }
    });
  };

  return (
    <div className="relative text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}K
      <button className="absolute right-5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" onClick={submiData}>user Data</button>
      <img
        className="mt-4 rounded-lg"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
    </div>
  );
}

export default Github;
