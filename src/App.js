import { useEffect, useState } from "react";
import { CartContextProvider } from "./Components/Context/CartContext";
import CreateForm from "./Components/Form/CreateForm";
import HeaderButton from "./Components/Header/HeaderButton";
import DetailForm from "./Components/Form/DetailForm";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  const [datacandy, setDatacandy] = useState([]);
  const [cartIsShow, setcartIsShow] = useState(false);
  const AddcandyHAndler = (candy) => {
    setDatacandy((prev) => {
      return [...prev, candy];
    });
    if (candy) {
      fetch(
        `https://crudcrud.com/api/5eedb4c077af44ceb735c3d7e7efdc98/candyName`,
        {
          method: "POST",
          body: JSON.stringify(candy),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //newCandy: data;
        });
    }
  };

  const showCartHandler = () => {
    setcartIsShow(true);
  };
  const hideCartHandler = () => {
    setcartIsShow(false);
  };

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/5eedb4c077af44ceb735c3d7e7efdc98/candyName`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDatacandy(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <CartContextProvider>
        {cartIsShow && <Cart onClosebtn={hideCartHandler} />}
        <HeaderButton onShowCart={showCartHandler} />
        <CreateForm AddCandy={AddcandyHAndler} />
        <DetailForm candy={datacandy} />
        <Footer />
      </CartContextProvider>
    </>
  );
}
export default App;
