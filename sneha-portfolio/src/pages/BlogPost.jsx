import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { dbRealtime } from "../lib/database";

const BlogPost = ({ postId, post }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;

    const unsubscribe = dbRealtime.listenToComments(postId, (data) => {
      setComments(data);
      setLoading(false);
    });

    dbRealtime.incrementViews(postId);

    return () => unsubscribe();
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      text: newComment,
      user: "Anonymous",
    };

    try {
      await dbRealtime.addComment(postId, comment);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Post Content */}
      <h1 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
        {post.title}
      </h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-6">
        {post.content}
      </p>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
          Comments
        </h2>

        {loading ? (
          <p className="text-neutral-500">Loading comments...</p>
        ) : comments.length > 0 ? (
          <ul className="space-y-3">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg"
              >
                <p className="text-neutral-900 dark:text-neutral-100">
                  {comment.text}
                </p>
                <span className="text-sm text-neutral-500">
                  — {comment.user}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-500">No comments yet.</p>
        )}

        {/* Add Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Post
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default BlogPost;
