import React from "react";

import MyNavbar from "./component/navbar";
import MyFooter from "./component/footer";
import Main from "./component/main";
import TodoItem from "./component/todoItem";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyNavbar />
      <Main />

      <MyFooter />
    </>
  );
}

export default App;
