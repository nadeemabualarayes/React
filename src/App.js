import React, { useState } from "react";
import "./App.css";
import MyFirstForm from "./Components/MyFirstForm";
import UseMemoExample from "./Components/UseMemoExample";

const App = () => {
  return (
    <div>
      {/*     <MyFirstForm /> */}
      <UseMemoExample />
    </div>
  );
};

// Passed the originalcomponent
// export default EnhancedComponent(App);
export default App;
