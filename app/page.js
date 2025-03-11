"use client"

import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")
  const createTree=()=>{
   
    router.push(`/generate?handle=${text}`)
  }
  return (
  
       <main  className="bg-[#254f1a]">
        <section className="  grid grid-cols-2 min-h-[120vh] ">
          <div className="flex flex-col justify-center  ml-[9vw]">
            <p className="text-yellow-300 text-6xl font-extrabold">Everything you are. In one, simple link in bio</p>

            <p className="text-yellow-300 text-[15px]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="buttons flex gap-2 mt-5">
              <input 
              value={text}
              onChange={(e)=>settext(e.target.value)}
              className="bg-white px-1 py-1 rounded-lg text-xs text-left pl-2 focus:outline-green-800"
              type="text"
              placeholder="Claim your Handle" 
               />
              <button 
              onClick={()=>createTree()}
              className="bg-pink-200 rounded-full text-xs py-4 px-4 text-black font-semibold ">
                Claim you LinkFlow
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="./homr.png" alt="" />

          </div>

  
        </section>
        {/* <section className="border-red-400 min-h-[80vh]">

        </section> */}
       </main>
       
  );
}
