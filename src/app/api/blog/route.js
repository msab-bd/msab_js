
// export async function POST(req) {
//   const { comment, blogId } = await req.json();
//   const blog = await Blog.findById(blogId);

//   if (!blog) {
//     return Response.json({ error: "Blog not found" }, { status: 404 });
//   }

//   const newComment = new Comment({ comment, blog: blogId, user: req.user._id });
//   await newComment.save();

//   blog.comments.push(newComment);
//   await blog.save();

//   return Response.json({ success: true, comment: newComment }, { status: 201 });
// }

// backend api for blog comments
export async function POST(req) {
    const { comment, blogId } = await req.json();
    const blog = await Blog.findById(blogId);
  
    if (!blog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }
  
    const newComment = new Comment({ comment, blog: blogId, user: req.user._id });
    await newComment.save();
  
    blog.comments.push(newComment);
    await blog.save();
  
    return Response.json({ success: true, comment: newComment }, { status: 201 });
  }
  