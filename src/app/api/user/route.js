import dbConnect from "@/lib/db";
import User from "@/lib/models/User";

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    await dbConnect();

    const findUser = await User.findOne({ email });

    if (findUser) {
      return Response.json({
        success: false,
        message: "User already exists",
        user: findUser,
      });
    } else {
      const user = new User({ name, email });
      await user.save();

      return Response.json({ success: true, user }, { status: 201 });
    }
  } catch (error) {
    console.error("Error in POST /users:", error);
    return Response.json({ error: "Error saving user" }, { status: 400 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return Response.json({ success: true, users }, { status: 200 });
  } catch (error) {
    console.error("Error in GET /users:", error);
    return Response.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
