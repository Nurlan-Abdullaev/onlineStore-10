import "./App.css";
import TableProduct from "./component/table/TableProduct";
import Product from "./component/table/Product";
import { productData } from "./utils/constans";
import { useEffect, useReducer } from "react";
import { TodosContext } from "./component/TodoContext";

const initialState = {
  product: JSON.parse(localStorage.getItem("products")) || productData,
};

const onlineReduse = (state, action) => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };
    case "incrementProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 0) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };
    case "decrementProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.staticPrice,
            };
          }
          return item;
        }),
      };
    case "removeProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 0) {
            return {
              ...item,
              quantity: (item.quantity = 0),
              price: item.staticPrice,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
function App() {
  const [store, dispatch] = useReducer(onlineReduse, initialState);

  function incrementProductHandler(id) {
    dispatch({ type: "incrementProduct", payload: id });
  }

  function decrementProductHandler(id) {
    dispatch({ type: "decrementProduct", payload: id });
  }

  function addProductHandler(id) {
    dispatch({ type: "addProduct", payload: id });
  }

  function removeItem(id) {
    dispatch({ type: "removeProduct", payload: id });
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(store.product));
  }, [store.product]);

  const value = {
    addTodoFunction: addProductHandler,
    removeTodoFunction: removeItem,
    incrementFunction: incrementProductHandler,
    decrementFunction: decrementProductHandler,
    storeProduct: store.product,
  };

  return (
    <TodosContext.Provider value={value}>
      <div className="App">
        <Product />
        <TableProduct />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
