const PostCard = ({ post }) => {
    return (
      <div className="post-card">
        <h3>{post.title}</h3>
        <p><strong>{post.author}</strong> • {post.date}</p>
        <p>{post.answer}</p>
        <div className="actions">
          <button>👍 {post.upvotes}</button>
          <button>👎</button>
          <button>💬</button>
          <button>🔗</button>
        </div>
      </div>
    );
  };
  
  export default PostCard;
// PostCard component for displaying individual posts in the Quora application
// This component is responsible for rendering the post's title, author, date, content, and action buttons.
// It receives a post object as a prop and displays its details.
// The component also includes buttons for upvoting, downvoting, commenting, and sharing the post.