// "use client";

// import React from "react";
// import { useState } from "react";
// import { useSearchParams } from "next/navigation";

// import { ToastContainer, toast } from "react-toastify";

// const Generate = () => {
//   // const [link, setlink] = useState("");
//   // const [linktext, setlinktext] = useState("");
//   const searchParams = useSearchParams();
//   const [links, setLinks] = useState([{ link: "", linktext: "" }]);
//   const [handle, setHandle] = useState(searchParams.get('handle'));
//   const [pic, setpic] = useState("");
//   const [desc, setdesc] = useState("")
//   const handleChange = (index, link, linktext) => {
//     setLinks((prevLinks) =>
//       prevLinks.map((item, i) => (i === index ? { link, linktext } : item))
//     );
//   };
//   const addLink = () => {
//     setLinks(links.concat([{ link: "", linktext: "" }]));
//   };

//   const submitlinks = async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       "links": links, 
//       "handle": handle,
//       "pic": pic,
//       "desc":desc
//     });

//     console.log(raw)

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };

//    const r = await fetch("http://localhost:3000/api/add", requestOptions)
//    const result = await r.json()
//    if(result.success){ 
//      toast.success(result.message)
//      setLinks([])
//      setpic("")
//      setHandle("")
//      setdesc("")
//     }
//     else{
//       toast.error(result.message)
//     }
 
//   };
//   return (
//     <div className="generate grid grid-cols-2 bg-[#f1f1ea] ">
//       <div className="col1 flex flex-col justify-center items-center text-left  ">
//         <div className="flex flex-col gap-4">
//           <h1 className="font-extrabold text-3xl mb-6 pr-41">
//             Create your LinkFlow
//           </h1>
//           <div className="item ">
//             <h2 className="font-semibold">Step 1: Claim your Handle</h2>
//             <div className="mx-4">
//               <input
//                 value={handle || ""}
//                 onChange={(e) => setHandle(e.target.value)}
//                 className="bg-neutral-200 rounded-full px-3 py-2"
//                 type="text"
//                 placeholder="Enter your handle"
//               />
//             </div>
//           </div>

//           <div className="item ">
//             <h2 className="font-semibold">Step 2: Add Links</h2>
//             {links &&
//               links.map((item, index) => {
//                 return (
//                   <div key={index} className="mx-4 flex gap-2">
//                     <input
//                       value={item.linktext || ""}
//                       onChange={(e) =>
//                         handleChange(index, item.link, e.target.value)
//                       }
//                       className="bg-neutral-200 rounded-full px-3 py-2 mt-1"
//                       type="text"
//                       placeholder="Enter Link text"
//                     />
//                     <input
//                       value={item.link || ""}
//                       onChange={(e) =>
//                         handleChange(index, e.target.value, item.linktext)
//                       }
//                       className="bg-neutral-200 rounded-full px-3 py-2 mt-1"
//                       type="text"
//                       placeholder="Enter Link"
//                     />
//                   </div>
//                 );
//               })}
//             <button
//               onClick={() => addLink()}
//               className="bg-[#225abf] hover:bg-blue-700 text-white font-bold mt-1 rounded-4xl p-2"
//             >
//               + Add Link
//             </button>
//           </div>

//           <div className="item ">
//             <h2 className="font-semibold">Step 3: Add picture and description</h2>
//             <div className="mx-4">
//               <input
//                 value={pic}
//                 onChange={(e) => setpic(e.target.value)}
//                 className="bg-neutral-200 rounded-full w-3/4 px-3  py-2 "
//                 type="text"
//                 placeholder="Enter Link to your picture"
//               />
//             </div>
//             <div className="mx-4 mt-2">
//               <input
//                 value={desc}
//                 onChange={(e) => setdesc(e.target.value)}
//                 className="bg-neutral-200 rounded-full w-3/4 px-3  py-2 "
//                 type="text"
//                 placeholder="Enter description"
//               />
//             </div>
//           </div>
//           <button
//             disabled={pic == "" || handle == "" || desc =="" || links[0].linktext == ""}
//             onClick={() => {
//               submitlinks();
//             }}
//             className="bg-[#225abf] w-1/3 disabled:bg-[#6590e0] hover:bg-blue-700 text-white font-bold rounded-4xl p-2 mt-5"
//           >
//             Create your FlowLink
//           </button>
//         </div>
//       </div>
//       <div className="col2 w-full h-[120vh]">
//         <img className="h-full w-full object-cover" src="/login.png" alt="" />
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Generate;




"use client";

import React from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";

const Generate = () => {
  // const [link, setlink] = useState("");
  // const [linktext, setlinktext] = useState("");
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get('handle'));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("")
  const handleChange = (index, link, linktext) => {
    setLinks((prevLinks) =>
      prevLinks.map((item, i) => (i === index ? { link, linktext } : item))
    );
  };
  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitlinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links, 
      "handle": handle,
      "pic": pic,
      "desc":desc
    });

    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

   const r = await fetch("http://localhost:3000/api/add", requestOptions)
   const result = await r.json()
   if(result.success){ 
     toast.success(result.message)
     setLinks([])
     setpic("")
     setHandle("")
     setdesc("")
    }
    else{
      toast.error(result.message)
    }
 
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
                value={handle || ""}
                onChange={(e) => setHandle(e.target.value)}
                className="bg-neutral-200 rounded-full px-3 py-2"
                type="text"
                placeholder="Enter your handle"
              />
            </div>
          </div>

          <div className="item ">
            <h2 className="font-semibold">Step 2: Add Links</h2>
            {links &&
              links.map((item, index) => {
                return (
                  <div key={index} className="mx-4 flex gap-2">
                    <input
                      value={item.linktext || ""}
                      onChange={(e) =>
                        handleChange(index, item.link, e.target.value)
                      }
                      className="bg-neutral-200 rounded-full px-3 py-2 mt-1"
                      type="text"
                      placeholder="Enter Link text"
                    />
                    <input
                      value={item.link || ""}
                      onChange={(e) =>
                        handleChange(index, e.target.value, item.linktext)
                      }
                      className="bg-neutral-200 rounded-full px-3 py-2 mt-1"
                      type="text"
                      placeholder="Enter Link"
                    />
                  </div>
                );
              })}
            <button
              onClick={() => addLink()}
              className="bg-[#225abf] hover:bg-blue-700 text-white font-bold mt-1 rounded-4xl p-2"
            >
              + Add Link
            </button>
          </div>

          <div className="item ">
            <h2 className="font-semibold">Step 3: Add picture and description</h2>
            <div className="mx-4">
              <input
                value={pic}
                onChange={(e) => setpic(e.target.value)}
                className="bg-neutral-200 rounded-full w-3/4 px-3  py-2 "
                type="text"
                placeholder="Enter Link to your picture"
              />
            </div>
            <div className="mx-4 mt-2">
              <input
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                className="bg-neutral-200 rounded-full w-3/4 px-3  py-2 "
                type="text"
                placeholder="Enter description"
              />
            </div>
          </div>
          <button
            disabled={pic == "" || handle == "" || desc =="" || links[0].linktext == ""}
            onClick={() => {
              submitlinks();
            }}
            className="bg-[#225abf] w-1/3 disabled:bg-[#6590e0] hover:bg-blue-700 text-white font-bold rounded-4xl p-2 mt-5"
          >
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
