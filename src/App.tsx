import React, { useCallback } from "react";
import Heading from "./components/Heading";
import List from "./components/List";
import Box from "./components/Box";

import "./App.css";

const ITEMS = ["one", "two", "three"];

function App() {
  const handleClick = useCallback((item: string) => {
    alert(item);
  }, []);
  return (
    <div>
      <Heading title="Introduction" />
      <Box> Hello There </Box>
      <List items={ITEMS} onHandleClick={handleClick} />
    </div>
  );
}

export default App;
