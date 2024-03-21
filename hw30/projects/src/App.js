import React from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Context from "./Context/Context";

function App() {
  return (
      <Context>
          <div className='app-container'>
              <Header/>
              <Content/>
          </div>
      </Context>
  );
}

export default App;
