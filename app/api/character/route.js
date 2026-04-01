import { NextResponse } from "next/server";
import { store } from "@/app/lib/characterStore";

// Collection Route

// GET /api/character - return all characters
export function GET() {
  return NextResponse.json(store.getAll());
}
// POST /api/character - add a new character
export async function POST(request) {
  const body = await request.json();
  // validation logic goes before the add line
  const character = store.add(body);
  return NextResponse.json(character, { status: 201 });
}
