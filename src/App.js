// import logo from './logo.svg';
import './App.css';

// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notifications from "./pages/Notifications";
import PrivateRoute from "./utils/PrivateRoute";
import NotFound from "./pages/NotFound";
// import PrivateRoute from "./utils/PrivateRoute";
// import Notifications from "./pages/Notifications";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// This is the main entry point of the Quora application.
// It sets up the routing for the application using react-router-dom.
