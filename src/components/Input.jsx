import { useState, useRef } from "react";
import "./general.css";
function Input({ handleOnClick }) {
  // let [todowork, state] = useState();
  // let date;
  let todowork = useRef();
  let date = useRef();

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            ref={todowork}
            className="form-control"
            type="text"
            placeholder="enter text"
            aria-label="default input example"
          />
        </div>
        <div className="col-4">
          <input
            ref={date}
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
              let arr = [
                { name: todowork.current.value, date: date.current.value },
              ];
              console.log(date);
              handleOnClick(arr);
              todowork.current.value = "";
              date.current.value = "";
              // state("clear");
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
