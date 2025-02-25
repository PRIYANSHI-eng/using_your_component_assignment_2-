// src/App.jsx
import PostCard from "./components/PostCard";
import "./App.css";

const posts = [
  {
    id: 1,
    username: "JohnDoe",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Hello world! This is my first post!",
  },
  {
    id: 2,
    username: "JaneSmith",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "Loving the new social media app! 🚀",
  },
  {
    id: 3,
    username: "AlexBrown",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "Just had an amazing coffee ☕!",
  },
];

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <h2>Social Media Feed</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
