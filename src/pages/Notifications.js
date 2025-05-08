import Navbar from "../components/Navbar";

const Notifications = () => {
  const filters = ["Questions for you", "Upvotes", "New Answers", "Mentions", "Follows"];
  const notifications = [
    "Someone answered your question.",
    "Your post got 3 upvotes!",
    "You were mentioned in a comment.",
    "Someone followed you.",
  ];

  return (
    <div>
      <Navbar />
      <div className="notifications-page">
        <aside>
          <h3>Filters</h3>
          <ul>
            {filters.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </aside>
        <main>
          <h2>Notifications</h2>
          <ul>
            {notifications.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Notifications;
// Notifications component for displaying user notifications in the Quora application
// This component includes a sidebar with filters and a main section displaying the notifications.