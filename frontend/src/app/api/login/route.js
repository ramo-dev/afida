import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const response = await fetch("https://afida-backend-c9432f18675a.herokuapp.com/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
