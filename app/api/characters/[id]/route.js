import { NextResponse } from "next/server";
import { store } from "@/app/lib/characterStore";

// declare async GET function, take the request and parameters for evaluation
export async function GET(request, { params }) {
  // pull the id out of the request
  const { id } = await params;

  // evaluate if the character is there using the controller function
  const character = store.getById(Number(id));
  // error message
  if (!character) {
    return NextResponse.json({ error: "Character not found" }, { status: 404 });
  }
  // return character
  return NextResponse.json(character);
}

// PUT

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const character = store.update(Number(id), body);
  if (!character) {
    return NextResponse.json({ error: "Character not found" }, { status: 404 });
  }
  return NextResponse.json(character);
}

// DELETE
export async function DELETE(request, { params }) {
  // pull the id out of the request
  const { id } = await params;

  // evaluate if the character is there using the controller function
  const character = store.remove(Number(id));
  // error message
  if (!character) {
    return NextResponse.json({ error: "Character not found" }, { status: 404 });
  }
  // return character
  return NextResponse.json(character);
}
