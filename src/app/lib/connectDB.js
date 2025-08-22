import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let db;

export const connectDB = async () => {
  if (db) return db;

  const uri = 'mongodb+srv://shanto:shanto123@product.xdoijgl.mongodb.net/?retryWrites=true&w=majority&appName=product';

  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  db = client.db("products"); // Your database name
  return db;
};
