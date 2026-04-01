import { NextResponse } from "next/server";
import { store } from "@/app/lib/characterStore";

// GET: return a single character || 404
export async function GET(request, { params }) {
  // extract id from the request
  const { id } = await params;
  // find the character who has that id by the controller logic
  const character = store.getById(Number(id));
  // if no character return a 404
  if (!character) {
    return NextResponse.json(
      {
        error: "Character Not Found",
      },
      { status: 404 },
    );
  }
  // otherwise return the character
  return NextResponse.json(character);
}
// PUT: select a character by id and replace information

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const character = store.update(Number(id), body);
  if (!character) {
    return NextResponse.json(
      {
        error: "Character Not Found",
      },
      { status: 404 },
    );
  }
  return NextResponse.json(character);
}

// DELETE: select a character by it's id and remove it from the db
export async function DELETE(request, { params }) {
  // identify if the entity is in the dataset and give that a value
  const { id } = await params;
  const character = store.remove(Number(id));
  // if it's not there 404
  if (!character) {
    return NextResponse.json(
      {
        error: "Character Not Found",
      },
      { status: 404 },
    );
  }
  // return the deleted character || return the number of entries without the data that has been removed
  return NextResponse.json(character);
}
