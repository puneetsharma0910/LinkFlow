import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const client = await clientPromise;
  const db = client.db("LinkFlow");
  const collection = db.collection("Links");
  const data = await collection.insertOne(body);
  return Response.json({ success:true, error:false,  message: "Added", result:data });
}
