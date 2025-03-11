import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const client = await clientPromise;
  const db = client.db("LinkFlow");
  const collection = db.collection("Links");
  const doc = await collection.findOne({ handle: body.handle });
  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "This LinkFlow already exists!",
      result: null,
    });
  }
  const data = await collection.insertOne(body);
  return Response.json({
    success: true,
    error: false,
    message: "Your LinkFlow has been generated✌️",
    result: data,
  });
}
