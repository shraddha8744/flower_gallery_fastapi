import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AuthContext, { AuthProvider } from "./components/AuthContext";

const App = () => {
  const { isLogin, login } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        {/* Conditional Routing */}
        {isLogin ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
