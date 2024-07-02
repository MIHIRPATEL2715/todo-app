import "./general.css";
function Item() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <p>Birthday Celebration</p>
        </div>
        <div class="col-4">
          <p>27/01/2025</p>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <p>Visit Tample</p>
        </div>
        <div class="col-4">
          <p>27/10/2024</p>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
