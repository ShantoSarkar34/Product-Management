import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const productsCollection = db.collection("products");

    const products = await productsCollection.find().toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        statusText: "Something went wrong",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

//  POST: Add a new product
export const POST = async (request) => {
  try {
    const db = await connectDB();
    const productsCollection = db.collection("products");

    const body = await request.json();

    // Insert the product into MongoDB
    const result = await productsCollection.insertOne(body);

    return NextResponse.json(
      { message: "Product added successfully", productId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        statusText: "Something went wrong",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
