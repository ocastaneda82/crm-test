import React from "react";
import Leads from "./components/Leads";
import Prospects from "./components/Prospects";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>CRM</h1>
      <Leads />
      <Prospects />
    </div>
  );
}
