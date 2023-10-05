import { Avatar } from "flowbite-react";
import React from "react";

const Activity = ({fixed}) => {
    
  return (
    <div
      id="activity"
      className={`hidden lg:block col-span-1 bg-white shadow-xl top-[6.5rem]  right-[10%] h-[85vh] w-[16rem] -z-10 ${fixed ? 'sticky': ""}`}
    >
      <div className="static top-0 border-b border-gray-300 h-[13%] flex items-center pl-3">
        <h1 className="font-bold">Recent activities</h1>
      </div>
      <div className="py-5 px-3 h-[72vh] overflow-auto">
        <div className="flex items-start gap-3 mb-6">
          <Avatar img={"https://i.pravatar.cc/300"} rounded />
          <div className="">
            <div className="flex justify-between items-center">
              <span className="font-bold">Name</span>
              <p className="text-gray-500 text-sm ">2 days ago</p>
            </div>

            <p className="text-gray-500 text-sm">commented on cekk ere...</p>
          </div>
        </div>
        <div className="flex items-start gap-3 mb-5">
          <Avatar img={"https://i.pravatar.cc/300"} rounded />
          <div className="">
            <div className="flex justify-between items-center">
              <span className="font-bold">Name</span>
              <p className="text-gray-500 text-sm ">2 days ago</p>
            </div>

            <p className="text-gray-500 text-sm">commented on cekk ere...</p>
          </div>
        </div>
        <div className="flex items-start gap-3 mb-5">
          <Avatar img={"https://i.pravatar.cc/300"} rounded />
          <div className="">
            <div className="flex justify-between items-center">
              <span className="font-bold">Name</span>
              <p className="text-gray-500 text-sm ">2 days ago</p>
            </div>

            <p className="text-gray-500 text-sm">commented on cekk ere...</p>
          </div>
        </div>
        <div className="flex items-start gap-3 mb-5">
          <Avatar img={"https://i.pravatar.cc/300"} rounded />
          <div className="">
            <div className="flex justify-between items-center">
              <span className="font-bold">Name</span>
              <p className="text-gray-500 text-sm ">2 days ago</p>
            </div>

            <p className="text-gray-500 text-sm">commented on cekk ere...</p>
          </div>
        </div>
        <div className="flex items-start gap-3 mb-5">
          <Avatar img={"https://i.pravatar.cc/300"} rounded />
          <div className="">
            <div className="flex justify-between items-center">
              <span className="font-bold">Name</span>
              <p className="text-gray-500 text-sm ">2 days ago</p>
            </div>

            <p className="text-gray-500 text-sm">commented on cekk ere...</p>
          </div>
        </div>
        <div className="flex items-start gap-3 mb-5">
          <Avatar img={"https://i.pravatar.cc/300"} rounded />
          <div className="">
            <div className="flex justify-between items-center">
              <span className="font-bold">Name</span>
              <p className="text-gray-500 text-sm ">2 days ago</p>
            </div>

            <p className="text-gray-500 text-sm">commented on cekk ere...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
