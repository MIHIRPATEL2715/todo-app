import "./general.css";
function Item({ itemlist, handledelete }) {
  return (
    <div className="container text-center">
      <div className="col-12">
        {itemlist.map((i) => (
          <div className="row">
            <div className="col-6">{i.name}</div>
            <div className="col-4">{i.date}</div>
            <div className="col-2">
              <button
                onClick={(i) => handledelete(i)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Item;
