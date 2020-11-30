import React from "react";
import Leads from "./components/Leads";
import Prospects from "./components/Prospects";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">CRM</h1>
      </header>
      <main className="main">
        <Leads />
        <Prospects />
      </main>
    </div>
  );
}
