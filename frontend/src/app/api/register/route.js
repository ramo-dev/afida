
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fullName, email, password } = await request.json();
  try {
    const response = await fetch("https://afida-backend-c9432f18675a.herokuapp.com/api/users/register", {
      method: "POST",
      body: JSON.stringify({ fullName, email, password })
    });
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
