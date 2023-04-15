import React, { useRef } from "react";

const CreateForm = ({ AddCandy }) => {
  const nameRef = useRef("");
  const desRef = useRef("");
  const priceRef = useRef("");

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      description: desRef.current.value,
      price: priceRef.current.value,
      id: Math.random().toString(),
    };
    AddCandy(data);

    e.target.reset();
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row  justify-content-center ">
            <h1 className="text-center mt-4">Candy Shop</h1>
            <p className="text-center">
              <em>
                Life is like candy. Sometimes it's sweet, and sometimes it's
                sour
              </em>
            </p>
            <div className="col-md-10 mt-5">
              <form action="" onSubmit={FormSubmitHandler}>
                <div className="col-md-10">
                  <label for="candyName" className="form-label h6">
                    Candy Name
                  </label>
                  <input
                    className="form-control"
                    id="candyName"
                    placeholder="Candy Name.."
                    ref={nameRef}
                    required
                  />
                </div>
                <div className="col-md-10">
                  <label for="candyDescription" className="form-label h6">
                    Candy Description
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    id="candyDescription"
                    placeholder="Candy Description.."
                    ref={desRef}
                    required
                  ></textarea>
                </div>
                <div className="col-md-10">
                  <label for="candyPrice" className="form-label h6">
                    Price
                  </label>
                  <input
                    className="form-control"
                    id="candyPrice"
                    type="number"
                    required
                    placeholder="Candy Price.."
                    ref={priceRef}
                  />
                </div>
                <div className="col-md-10 mt-3">
                  <button
                    className="btn"
                    type="submit"
                    style={{
                      backgroundColor: "#f58b12",
                      marginLeft: "335px",
                      fontWeight: "600",
                    }}
                  >
                    Add Candy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateForm;
