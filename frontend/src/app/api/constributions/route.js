import { NextResponse } from "next/server";

export async function POST(request) {
  const { user, amount } = await request.json();
  try {
    const response = await fetch("https://afida-backend-c9432f18675a.herokuapp.com/api/contributions", {
      method: "POST",
      headers: {
        //
      },
      body: JSON.stringify({ user, amount })
    });
    const data = await response.json();
    console.log(data);
    console.log(email, password)
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request) {
  try {
    const response = await fetch("https://afida-backend-c9432f18675a.herokuapp.com/api/contributions", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

