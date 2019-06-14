import React, { useState, useEffect } from "react";

export const App = () => {
  const [online, setOnline] = useState(navigator.onLine);
  return <h1>{online ? "You're online!" : "You're offline!"}</h1>;
};
