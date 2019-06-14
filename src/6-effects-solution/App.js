import React, { useState, useEffect } from "react";

export const App = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const setOnlineInEffect = () => setOnline(true);
    const setOfflineInEffect = () => setOnline(false);

    window.addEventListener("online", setOnlineInEffect);
    window.addEventListener("offline", setOfflineInEffect);

    return () => {
      window.removeEventListener("online", setOnlineInEffect);
      window.removeEventListener("offline", setOfflineInEffect);
    };
  }, []);

  return <h1>{online ? "You're online!" : "You're offline!"}</h1>;
};
