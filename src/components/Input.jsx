import { useState } from "react";
import "./general.css";
function Input({ handleOnClick }) {
  let [todowork, state] = useState();
  let date;

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            onChange={(event) => {
              todowork = event.target.value;
            }}
            onFocus={(event) => {
              if (todowork === "clear") event.target.value = "";
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
              console.log(event);
            }}
            onFocus={(event) => {
              if (date === undefined) event.target.value = "";
            }}
            className="form-control"
            type="date"
            placeholder="date"
            aria-label="default input example"
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            onClick={() => {
              let arr = [{ name: todowork, date: date }];
              console.log(date);
              handleOnClick(arr);
              state("clear");
              // console.log(todowork);
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
