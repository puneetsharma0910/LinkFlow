import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("LinkFlow");
  const collection = db.collection("Links");

  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-500 to-purple-800 justify-center items-start py-10 text-white">
      {item && (
        <div className="photo flex flex-col items-center gap-6 bg-white/20 p-6 rounded-xl shadow-2xl backdrop-blur-md">
          <img width={150} className="rounded-full border-4 border-white shadow-lg" src={item.pic} alt={item.handle} />
          <span className="font-bold text-2xl">@{item.handle}</span>
          <span className="desc w-80 text-center text-lg text-gray-200">{item.desc}</span>
          <div className="links w-full flex flex-col items-center">
            {item.links.map((linkItem, index) => (
              <Link key={index} href={linkItem.link} target="_blank">
                <div className="bg-white/30 text-lg font-semibold text-white py-4 px-6 w-72 flex justify-center rounded-lg my-3 shadow-md transition-all duration-300 hover:bg-white/50 hover:text-purple-900">
                  {linkItem.linktext}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


