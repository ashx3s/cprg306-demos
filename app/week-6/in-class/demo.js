"use client";
import { useState } from "react";
const names = ["abraham delacy", "giusuppe casey"];
export default function Page() {
  const userName = "Thomas O'Malley";
  const [isOnline, setIsOnline] = useState(true);
  const [currentUser, setCurrentUser] = useState(userName);
  const [names, setNames] = function updateUserName() {
    if (currentUser === "Thomas O'Malley") {
      setCurrentUser("Duchess");
    }
    if (currentUser === "Duchess") {
      setCurrentUser("Thomas O'Malley");
    }
  };
  const userMessage = () => {
    if (isOnline) {
      return { msg: currentUser, styles: "bg-green-800" };
    } else {
      return { msg: "Not Online", styles: "bg-red-800" };
    }
  };
  return (
    <main>
      <h1>We are on a nested route now!!</h1>
      <p>Static Variable: {userName}</p>
      <p>State Variable: {currentUser}</p>
      <button onClick={updateUserName}>Swap User</button>
      <button onClick={() => setCurrentUser("Duchess")}>Set to Duchess</button>
      <button onClick={() => setIsOnline(!isOnline)}>Toggle Online</button>
      {/* if user is online set color to green otherwise set to red use boolean toggle for value */}
      <div
        className={`p-8 text-2xl ${isOnline ? "bg-green-800" : "bg-red-800"}`}
      >
        {/* if user is online return the current user name, else return the not online message */}
        {isOnline ? currentUser : "Not Online"}
      </div>
    </main>
  );
}
