import React, { FC, useState, useEffect } from "react";

export const App: FC = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const setOnlineInEffect: VoidFunction = () => setOnline(true);
    const setOfflineInEffect: VoidFunction = () => setOnline(false);

    window.addEventListener("online", setOnlineInEffect);
    window.addEventListener("offline", setOfflineInEffect);

    return () => {
      window.removeEventListener("online", setOnlineInEffect);
      window.removeEventListener("offline", setOfflineInEffect);
    };
  }, []);

  return <h1>{online ? "You're online!" : "You're offline!"}</h1>;
};
