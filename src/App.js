import React from "react";
import { Header } from "./components/Header";
import { CardContainer } from "./components/CardContainer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer
        left_card_content="content 1"
        right_card_content="content 2"
      />
    </div>
  );
}

export default App;
