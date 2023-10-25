import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppContent } from "./containers/AppContent/AppContent";
import { AppFooter } from "./containers/AppFooter/AppFooter";
import { AppHeader } from "./containers/AppHeader/AppHeader";
import { LoginPage } from "./containers/LoginPage/LoginPage";

import { LOGIN_TOKEN } from "./constants";

import "./App.less";

function App() {
  const [token, setToken] = useState<String>("");

  useEffect(() => {
    const loginToken = localStorage.getItem(LOGIN_TOKEN);

    if (loginToken) {
      setToken(loginToken);
    }
  }, [token]);

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <Router>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Router>
  );
}

export default App;
