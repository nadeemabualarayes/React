import React, { useState } from "react";
import "./App.css";
import MyFirstForm from "./Components/MyFirstForm";
import UseMemoExample from "./Components/UseMemoExample";
import NewFetch from "./Components/newFetch";
const App = () => {
  return (
    <div>
      {/*     <MyFirstForm /> */}
      {/* <UseMemoExample /> */}
      <NewFetch/>
    </div>
  );
};

// Passed the originalcomponent
// export default EnhancedComponent(App);
export default App;
