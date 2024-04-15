'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen text-white gap-5 min-w-60">
      <h1 className="font-bold text-2xl max-w-full w-fit p-10">
        Habit Tracker
      </h1>
      <Link
        href={"/"}
        className={
          path == "/"
            ? "bg-gray-700 font-bold ease-in-out duration-500 mx-3 rounded-lg p-3 text-center hover:font-bold hover:bg-gray-700 "
            : " ease-in-out duration-500 p-3 text-center hover:font-bold hover:bg-gray-700 hover:w-full "
        }
      >
        Home
      </Link>
      <Link href={"/add"} className=" p-3 w-full text-center">Add</Link>
      <h2 className=" p-3 w-full text-center">Daily</h2>
      <h2 className=" p-3 w-full text-center">Weekly</h2>
      <h2 className=" p-3 w-full text-center">Monthly</h2>
    </div>
  );
}
