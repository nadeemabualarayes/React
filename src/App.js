import React, { createContext, useState } from "react";
import "./App.css"
import MyFirstForm from "./Components/MyFirstForm";
import WrapperComp from "./Components/WrapperComp";

//: Create Context .

export const AppContext = createContext();


const App = () => {

  const [name, setName] = useState("Nadeem")
  const [points, setPoints] = useState([1, 2, 3, 4, 5, 6, 7]);

  return <AppContext.Provider value={
    { name, setName, points, setPoints }
  }>
    <WrapperComp />

  </AppContext.Provider>



  /*   return <div>
      <MyFirstForm />
    </div> */
}

// Passed the originalcomponent 
// export default EnhancedComponent(App);
export default App;