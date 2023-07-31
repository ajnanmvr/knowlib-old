import React from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import SubHeading from "../Header/SubHeading";

function App() {

  return (
    <div>
      <Header />
      <div className="responsive-wrapper">
        <SubHeading />
        <Content />
      </div>
    </div>
  );
}

export default App;
