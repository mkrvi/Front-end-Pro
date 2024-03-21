import React from "react";
import Context from "./context/Context";
import FormWrapper from "./components/FormWrapper";

function App() {
  return (
      <Context>
        <FormWrapper/>
      </Context>
  );
}

export default App;
