import "./general.css";
function Input() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="enter text"
            aria-label="default input example"
          />
        </div>
        <div className="col-4">
          <input
            className="form-control"
            type="date"
            placeholder="date"
            aria-label="default input example"
          />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Input;
