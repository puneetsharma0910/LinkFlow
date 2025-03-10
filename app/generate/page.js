"use client";

import React from "react";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

const Generate = () => {
  const [link, setlink] = useState("");
  const [linktext, setlinktext] = useState("");
  const [handle, sethandle] = useState("");
  const [pic, setpic] = useState("")
  const addLink = async (text, link, handle) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      link: text,
      linktext: link,
      handle: handle,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    toast(result.message);
  };
  return (
    <div className="generate grid grid-cols-2 bg-[#f1f1ea] ">
      <div className="col1 flex flex-col justify-center items-center text-left  ">
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-3xl mb-6 pr-41">
            Create your LinkFlow
          </h1>
          <div className="item ">
            <h2 className="font-semibold">Step 1: Claim your Handle</h2>
            <div className="mx-4">
              <input
                value={handle}
                onChange={(e) => sethandle(e.target.value)}
                className="bg-neutral-200 rounded-full px-3 py-2"
                type="text"
                placeholder="Enter your handle"
              />
            </div>
          </div>

          <div className="item ">
            <h2 className="font-semibold">Step 2: Add Links</h2>
            <div className="mx-4 flex gap-2">
              <input
                 value={linktext}
                 onChange={(e) => setlinktext(e.target.value)}
                className="bg-neutral-200 rounded-full px-3 py-2 "
                type="text"
                placeholder="Enter Link text"
              />
              <input
                 value={link}
                 onChange={(e) => setlink(e.target.value)}
                className="bg-neutral-200 rounded-full px-3 py-2"
                type="text"
                placeholder="Enter Link"
              />
              <button 
              onClick={()=>addLink(linktext,link,handle)}
              className="bg-[#225abf] hover:bg-blue-700 text-white font-bold rounded-4xl p-2">
                Add Link
              </button>
            </div>
          </div>

          <div className="item ">
            <h2 className="font-semibold">Step 3: Add picture and finalise</h2>
            <div className="mx-4">
              <input
                 value={pic}
                 onChange={(e) => setpic(e.target.value)}
                className="bg-neutral-200 rounded-full w-3/4 px-3  py-2 "
                type="text"
                placeholder="Enter Link to your picture"
              />
            </div>
          </div>
          <button className="bg-[#225abf] w-1/3 hover:bg-blue-700 text-white font-bold rounded-4xl p-2 mt-5">
            Create your FlowLink
          </button>
        </div>
      </div>
      <div className="col2 w-full h-[120vh]">
        <img className="h-full w-full object-cover" src="/login.png" alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Generate;
