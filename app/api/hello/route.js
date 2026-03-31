export async function GET() {
  return Response.json({ msg: "Hello world", randomNumber: Math.random() });
}
