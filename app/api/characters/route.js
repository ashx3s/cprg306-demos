// collection route
import { NextResponse } from "next/server";
import { store } from "@/app/lib/characterStore";

// GET
export function GET() {
  return NextResponse.json(store.getAll());
}
// POST
export async function POST(request) {
  const body = await request.json();
  const character = store.add(body);
  return NextResponse.json(character, { status: 201 });
}
