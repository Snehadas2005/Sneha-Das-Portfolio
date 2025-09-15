import { initializeApp, getApps } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  onValue,
  serverTimestamp,
  off,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// ✅ Prevent multiple Firebase instances
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const database = getDatabase(app);

export const dbRealtime = {
  /**
   * Add a new comment to the database.
   */
  addComment: async (postId, commentData) => {
    try {
      const commentsRef = ref(database, `comments/${postId}`);
      const newComment = {
        ...commentData,
        timestamp: serverTimestamp(), // Firebase special server value
      };
      const result = await push(commentsRef, newComment);
      return result.key;
    } catch (error) {
      console.error("🔥 Error adding comment:", error);
      throw error;
    }
  },

  /**
   * Listen to comment updates in real-time.
   */
  listenToComments: (postId, callback) => {
    try {
      const commentsRef = ref(database, `comments/${postId}`);
      const unsubscribe = onValue(commentsRef, (snapshot) => {
        const data = snapshot.val();
        let commentsList = data
          ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
          : [];

        // ✅ Safely handle timestamps
        commentsList = commentsList.sort((a, b) => {
          const aTime =
            typeof a.timestamp === "number"
              ? a.timestamp
              : a.timestamp?.seconds * 1000 || 0;
          const bTime =
            typeof b.timestamp === "number"
              ? b.timestamp
              : b.timestamp?.seconds * 1000 || 0;
          return bTime - aTime;
        });

        callback(commentsList);
      });

      return () => off(commentsRef, "value", unsubscribe);
    } catch (error) {
      console.error("🔥 Error listening to comments:", error);
      return () => {}; // return noop so cleanup never crashes
    }
  },

  /**
   * Track views for analytics.
   */
  incrementViews: async (postId) => {
    try {
      const viewsRef = ref(database, `analytics/views/${postId}`);
      await push(viewsRef, {
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
      });
    } catch (error) {
      console.error("🔥 Error incrementing views:", error);
    }
  },
};

// ✅ Named + Default Exports
export const db = dbRealtime;
export default database;
