import { useContext } from "react";
import CartContext from "../Context/CartContext";

const DetailForm = ({ candy }) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
            {candy.map((candy) => (
              <li
                key={candy.id}
                className="candy list-group-item col-md-10 py-3"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="col-md-12 d-flex mx-2">
                      <h3 className="text-center">{candy.name}</h3>
                      <p className="text-center mx-4 mt-2">
                        {candy.description}
                      </p>
                      <p className="text-center mt-2">
                        {candy.price}
                        <strong className="ml-3">Rs/-</strong>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="col-md-12" style={{ textAlign: "end" }}>
                      <button
                        className="btn"
                        onClick={() => {
                          cartCtx.addItem({ ...candy, quantity: 1 });
                        }}
                        style={{ backgroundColor: "#f58b12" }}
                      >
                        Add 1
                      </button>
                      <button
                        className="btn mx-3"
                        onClick={() => {
                          cartCtx.addItem({ ...candy, quantity: 2 });
                        }}
                        style={{ backgroundColor: "#f58b12" }}
                      >
                        Add 2
                      </button>
                      <button
                        className="btn"
                        onClick={() => {
                          cartCtx.addItem({ ...candy, quantity: 3 });
                        }}
                        style={{ backgroundColor: "#f58b12" }}
                      >
                        Add 3
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailForm;
