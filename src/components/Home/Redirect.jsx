// src/App.js (or any other component file)

import React, { useEffect } from 'react';

// Component for the page to redirect from
const RedirectPage = () => {
  // Replace 'target-page-url' with the URL of the page you want to redirect to
  const targetPageUrl = 'https://ajnanmvr.github.io/Know-Library-Launching-Page/';

  useEffect(() => {
    window.location.href = targetPageUrl;
  }, []);

  return null; // Since this component is not rendering anything
};

const App = () => {
  return <RedirectPage />;
};

export default App;
