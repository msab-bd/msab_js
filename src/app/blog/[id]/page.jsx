
"use client";

import { useState, useEffect } from "react";
import blogData from "@/utils/blogData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch blog data
    const fetchData = async () => {
      const { id } = await params; // Await params to ensure it's resolved
      const blog = blogData.find((item) => item?.id == id);
      if (!blog) {
        router.push("/404"); // Redirect to 404 if not found
      } else {
        setData(blog);
      }
    };

    fetchData();
  }, [params, router]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!data) {
    return <p>Loading...</p>; // Show a loading state while fetching data
  }

  const { subTitle, category, description, image } = data;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero Image with Overlay Title */}
      <div className="relative w-full h-80 md:h-96 lg:h-[450px]">
        <Image
          src={image || "/default-image.jpg"}
          alt={category || "Blog Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{category || "Blog Title"}</h1>
          {subTitle && <p className="text-lg text-gray-300 mt-2">{subTitle}</p>}
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">{description || "No description available."}</p>
      </div>

      {/* Comment Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">মন্তব্যসমূহ</h2>
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="আপনার মন্তব্য লিখুন..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-green-700 hover:bg-green-900 cursor-pointer text-white px-5 py-2 rounded-lg transition duration-300"
          >
            মন্তব্য পাঠান
          </button>
        </form>
        <div className="mt-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
              >
                <p className="text-gray-800">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">এখনো কোনো মন্তব্য নেই। সবার আগে মন্তব্য করুন!</p>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md"
        >
          ← ব্লগে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default Page;

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const Page = ({ params }) => {
//   const router = useRouter();
//   const [blog, setBlog] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const blogId = params.id; // Get blog ID from URL params

//   useEffect(() => {
//     // Fetch blog details
//     const fetchBlog = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/blogs/${blogId}`);
//         if (!res.ok) throw new Error("Blog not found");
//         const data = await res.json();
//         setBlog(data);
//       } catch (error) {
//         router.push("/404"); // Redirect if blog not found
//       }
//     };

//     // Fetch comments
//     const fetchComments = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/comments/${blogId}`);
//         const data = await res.json();
//         setComments(data.comments);
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };

//     fetchBlog();
//     fetchComments();
//   }, [blogId, router]);

//   // Submit a new comment
//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     try {
//       const res = await fetch("http://localhost:5000/api/comments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ comment: newComment, blogId }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setComments([...comments, data.comment]); // Update comment list
//         setNewComment("");
//       }
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   if (!blog) return <p>লোড হচ্ছে...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Hero Image */}
//       <div className="relative w-full h-80 md:h-96 lg:h-[450px]">
//         <Image
//           src={blog.image || "/default-image.jpg"}
//           alt={blog.title}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg shadow-lg"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
//           <h1 className="text-3xl md:text-4xl font-bold text-white">{blog.title}</h1>
//           {blog.subTitle && <p className="text-lg text-gray-300 mt-2">{blog.subTitle}</p>}
//         </div>
//       </div>

//       {/* Blog Content */}
//       <div className="mt-10">
//         <p className="text-lg text-gray-700 leading-relaxed">{blog.description}</p>
//       </div>

//       {/* Comment Section */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold text-gray-800">মন্তব্যসমূহ</h2>
//         <form onSubmit={handleCommentSubmit} className="mt-4">
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="আপনার মন্তব্য লিখুন..."
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             rows="4"
//           ></textarea>
//           <button
//             type="submit"
//             className="mt-2 bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300"
//           >
//             মন্তব্য পাঠান
//           </button>
//         </form>
//         <div className="mt-6">
//           {comments.length > 0 ? (
//             comments.map((comment, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
//               >
//                 <p className="text-gray-800">{comment.comment}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">এখনো কোনো মন্তব্য নেই। সবার আগে মন্তব্য করুন!</p>
//           )}
//         </div>
//       </div>

//       {/* Back Button */}
//       <div className="mt-8">
//         <Link
//           href="/blog"
//           className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md"
//         >
//           ← ব্লগে ফিরে যান
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Page;
