import "./App.css";
import { useState } from "react";
import Page from "./Page";

const dummyList = [
  {
    id: 1,
    content: "리액트 공부하기1",
  },
  {
    id: 2,
    content: "리액트 공부하기2",
  },
  {
    id: 3,
    content: "리액트 공부하기3",
  },
];

function App() {
  const [data, setData] = useState([]);

  const onCreate = (state) => {
    const newItem = state;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <Page onCreate={onCreate} data={dummyList} />
    </div>
  );
}

export default App;
