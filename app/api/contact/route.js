export async function POST(req) {
  const body = await req.json();
  console.log("New Contact Message:", body);

  return Response.json(
    { success: true, message: "Message received successfully!" },
    { status: 200 }
  );
}
