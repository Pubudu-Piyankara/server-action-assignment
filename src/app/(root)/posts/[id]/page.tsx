"use client";
import { fetchUserDetails } from "@/app/api/users/route";
import React, { useEffect, useState } from "react";

const PostIdDetails = () => {
  const [userDetail, setUser] = useState({} as userPreview);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserDetails();
        setUser(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid place-items-center mt-10">
      <h1 className="text-xl font-bold">User Details</h1>
      {Object.keys(userDetail).length > 0 && (
        <div className="flex flex-row gap-2 shadow-sm shadow-white p-4 m-2 rounded-md bg-slate-900">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold">Name </h1>
            <h1 className="font-semibold">User Name</h1>
            <h1 className="font-semibold">Email</h1>
            
          </div>
          <div className="flex flex-col gap-4">
            <p>: {userDetail.name}</p>
            <p>: {userDetail.username}</p>
            <p>: {userDetail.email}</p>
          </div>
          <div className="flex flex-row gap-4">
            
          </div>
        </div>
      )}
    </div>
  );
};

export default PostIdDetails;
