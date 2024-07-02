import Hedding from "./components/Hedding";
import Input from "./components/Input";
import Item from "./components/Item";
import "./App.css";

function App() {
  return (
    <div class="main">
      <center class="todo-container">
        <Hedding />
        <Input />
        <Item />
      </center>
    </div>
  );
}

export default App;
