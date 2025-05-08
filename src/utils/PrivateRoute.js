// PrivateRoute.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// PrivateRoute component for protecting routes in the Quora application
// This component checks if the user is authenticated using the AuthContext.
// If the user is authenticated, it renders the children components.
// If not, it redirects the user to the login page.
// This is useful for protecting routes that require authentication, such as creating a post or viewing private content.
// The component uses the useContext hook to access the AuthContext and check the user's authentication status.
// It also uses the Navigate component from react-router-dom to perform the redirection.
// The component is exported as the default export of the module, allowing it to be imported and used in other parts of the application.