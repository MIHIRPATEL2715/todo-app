import "./general.css";
function Input() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input
            class="form-control"
            type="text"
            placeholder="enter text"
            aria-label="default input example"
          />
        </div>
        <div class="col-4">
          <input
            class="form-control"
            type="date"
            placeholder="date"
            aria-label="default input example"
          />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Input;
