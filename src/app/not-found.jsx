import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-purple-100 flex flex-col items-center justify-center font-bold text-5xl text-black">
      404, This page is not found!
      <Link href={"/"}>
        <button className="btn bg-[#244D3F] text-white w-50 mt-10">Back to home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;