import { ref, push, set } from "firebase/database";
import { rtdb } from "../config/firebase";

export async function incrementViews(pageId) {
  try {
    const viewsRef = ref(rtdb, `analytics/views/${pageId}`);
    const newViewRef = push(viewsRef);
    await set(newViewRef, {
      timestamp: Date.now(),
    });
    console.log("✅ View added");
  } catch (err) {
    console.error("🔥 Error incrementing views:", err);
  }
}
