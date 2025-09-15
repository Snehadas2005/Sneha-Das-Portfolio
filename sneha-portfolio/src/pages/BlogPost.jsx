import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { dbRealtime } from "../lib/database";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const post = blogPosts.find((p) => p.id === parseInt(postId));

  useEffect(() => {
    if (!post) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = dbRealtime.listenToComments(postId, (commentsList) => {
      setComments(commentsList);
      setLoading(false);
    });

    // only call incrementViews if available
    if (dbRealtime.incrementViews) {
      dbRealtime.incrementViews(postId);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [postId, post]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.message.trim()) return;

    setIsSubmitting(true);

    try {
      await dbRealtime.addComment(postId, {
        name: newComment.name.trim(),
        email: newComment.email.trim() || null,
        message: newComment.message.trim(),
      });
      setNewComment({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Error submitting comment:", error);
      alert("Failed to post comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatCommentDate = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-mirage text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-brogetta mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">
          The post you’re looking for doesn’t exist or was removed.
        </p>
        <button
          onClick={() => navigate("/blog")}
          className="px-6 py-3 bg-black text-white font-mirage rounded-lg hover:bg-gray-800 transition"
        >
          Go Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-4xl mx-auto">
      {/* Post Header */}
      <h1 className="text-4xl font-brogetta text-black mb-4">{post.title}</h1>
      <p className="text-gray-500 font-mirage mb-6">{formatDate(post.date)}</p>

      {/* Post Image */}
      {post.image && (
        <div className="mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      )}

      {/* Post Content */}
      <div className="prose max-w-none font-mirage text-gray-700 leading-relaxed mb-12">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* Comments Section */}
      <h2 className="text-2xl font-brogetta mb-4">
        Comments ({comments.length})
      </h2>

      <div className="space-y-6 mb-8">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-4">
              <p className="font-bold">{comment.name}</p>
              <p className="text-sm text-gray-500">
                {formatCommentDate(comment.timestamp)}
              </p>
              <p className="text-gray-700 mt-2">{comment.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 font-mirage">
            No comments yet. Be the first one!
          </p>
        )}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={newComment.name}
          onChange={(e) =>
            setNewComment({ ...newComment, name: e.target.value })
          }
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <textarea
          placeholder="Your Comment"
          value={newComment.message}
          onChange={(e) =>
            setNewComment({ ...newComment, message: e.target.value })
          }
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-black text-white rounded-lg font-mirage hover:bg-gray-800 transition disabled:opacity-50"
        >
          {isSubmitting ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
};

export default BlogPost;
