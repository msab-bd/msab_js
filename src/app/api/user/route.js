import dbConnect from "@/lib/db";
import User from "@/lib/models/User";

export async function POST(req) {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Ensure request has a body
    const rawBody = await req.text();
    if (!rawBody) {
      return new Response(JSON.stringify({ error: "Empty request body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Parse JSON safely
    let body;
    try {
      body = JSON.parse(rawBody);
    } catch (err) {
      return new Response(JSON.stringify({ error: "Invalid JSON format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!body.name || !body.email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await dbConnect();

    const existingUser = await User.findOne({ email: body.email });

    if (existingUser) {
      return new Response(JSON.stringify({
        success: false,
        message: "User already exists",
      }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newUser = new User({ name: body.name, email: body.email });
    await newUser.save();

    return new Response(JSON.stringify({ success: true, user: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error in POST /users:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
