"use client";
import serverAction from "@/app/api/action/route";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center mt-10">
      <button className="bg-[white] text-black p-5 rounded-full m-5" onClick={serverAction}>
        Do Server Action
      </button>

      <div className="usersdata">
        <Link href={"/userslist"}>Get Users List</Link>
      </div>
    </div>
  );
}
