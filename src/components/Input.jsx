import { useState } from "react";
import "./general.css";
function Input({ handleOnClick }) {
  let [todowork, state] = useState();
  let date;
  const resetform = () => {
    todowork = "";
    state("");
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            onChange={(event) => {
              todowork = event.target.value;
            }}
            className="form-control"
            type="text"
            placeholder="enter text"
            aria-label="default input example"
          />
        </div>
        <div className="col-4">
          <input
            onChange={(event) => {
              date = event.target.value;
              console.log(date);
            }}
            className="form-control"
            type="date"
            placeholder="date"
            aria-label="default input example"
          />
        </div>
        <div className="col-2">
          <button
            type="Reset"
            onClick={() => {
              let arr = [{ name: todowork, date: date }];
              console.log(arr);
              handleOnClick(arr);
              resetform();
            }}
            className="btn btn-success"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Input;
