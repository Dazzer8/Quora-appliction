import Navbar from "../components/Navbar";
import Spaces from "../components/Spaces";
import QuestionBox from "../components/QuestionBox";
import "./styles.css";
import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const spaces = ["Technology", "Science", "Health", "Business", "Art"];

  const handleAsk = (question) => {
    const newPost = {
      title: question,
      author: "Anonymous",
      date: new Date().toLocaleDateString(),
      answer: "No answers yet...",
      upvotes: 0,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Navbar />
      <Spaces spaces={spaces} />
      <QuestionBox onAsk={handleAsk} />
      <div className="posts">
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
// Home component for the Quora application
// This component serves as the main page of the application.
// It includes the Navbar, Spaces, QuestionBox, and a list of PostCards.
// The Navbar provides navigation links and user authentication options.
// The Spaces component displays a list of spaces that users can explore.
// The QuestionBox allows users to ask new questions.
// The PostCard component displays individual posts, including the question, author, date, and answers.
// The component uses the useState hook to manage the state of posts.