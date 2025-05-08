const Spaces = ({ spaces }) => {
    return (
      <div className="spaces">
        <button>Create Space</button>
        <ul>
          {spaces.map((space, i) => (
            <li key={i}>{space}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Spaces;
// Spaces component for displaying a list of spaces in the Quora application  