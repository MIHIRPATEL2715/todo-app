import Hedding from "./components/Hedding";
import Input from "./components/Input";
import Item from "./components/Item";
import "./App.css";

function App() {
  let list = [
    { name: "birthday", date: "27/01/2005" },
    { name: "visit temple", date: "25/01/2005" },
    { name: "go for walk", date: "23/06/2025" },
  ];

  return (
    <div class="main">
      <center class="todo-container">
        <Hedding />
        <Input />
        <Item itemlist={list} />
      </center>
    </div>
  );
}

export default App;
