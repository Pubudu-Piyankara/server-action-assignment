"use client";
import React, { useEffect, useState } from "react";
import fetchUsers from "@/app/api/users/route";
import Link from "next/link";

const UsersList = () => {
  const [user, setUser] = useState([] as userPreview[]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        setUser(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid place-items-center mt-10">
      <h1 className="text-xl font-semibold items-center m-2">Users List</h1>
      <div className="shadow-sm shadow-white p-4 m-2 rounded-md bg-slate-900">
        {user.map((user: any) => (
          <div key={user.id} className="hover:underline">
            <Link href={`/posts/${user.id}`}>
              <h1>{user.name}</h1>
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default UsersList;
