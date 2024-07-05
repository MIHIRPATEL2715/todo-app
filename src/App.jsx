import Hedding from "./components/Hedding";
import Input from "./components/Input";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [list, cstate] = useState([
    { name: "birthday", date: "2024-01-27" },
    { name: "visit temple", date: "2024-02-05" },
    { name: "go for walk", date: "2024-05-17" },
  ]);

  const handelonchange = (event) => {
    console.log(event);
    if (event[0].date !== undefined && event[0].name !== undefined) {
      let newlist = [...list, event[0]];
      cstate(newlist);
    }
    if (event[0].date === undefined) {
      alert("please enter date and todo work");
    } else if (event[0].name === undefined) {
      alert("please enter date and todo work");
    }
  };
  let handledelete = (i) => {
    list.pop(i);
    let newlist = [...list];
    cstate(newlist);
  };

  return (
    <center>
      <div className="todo-container">
        <Hedding />
        <Input handleOnClick={handelonchange} />
        <Item itemlist={list} handledelete={handledelete} />
      </div>
    </center>
  );
}

export default App;
