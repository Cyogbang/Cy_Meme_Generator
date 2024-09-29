import React from "react";

export default function Header() {
  return (
    <header className="appTitle">
      <div className="headerSubject">
        <img src="./images/Meme-creator.png" alt="meme" />
        <h2>Meme Generator</h2>
      </div>
      <p className="headerTitle">Cy's meme App</p>
    </header>
  );
}
