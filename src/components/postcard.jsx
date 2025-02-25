import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.profilePic} alt={post.username} />
        <strong>{post.username}</strong>
      </div>
      <p className="post-content">{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
