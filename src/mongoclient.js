import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGO_HOST;
export const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

export async function getRooms() {
  await client.connect();

  try {
    await client.db("empire_db").createCollection("empire_rooms", {
      capped: true,
      size: 1e6,
    });
  } catch (e) {
    // collection already exists
  }

  return client.db("empire_db").collection("empire_rooms");
}
