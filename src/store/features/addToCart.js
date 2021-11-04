/* eslint-disable eqeqeq */
const initialState = {
  total: "",
  products: [],
};

function calculateTotal(products) {
  let total = 0;
  products.forEach((product) => {
    total += +product.price * +product.quantity;
  });
  return total;
}

export default function cartSlice(state = initialState, action) {
  switch (action.type) {
    case "cart/addProduct": {
      const products = state.products.filter(
        (product) => product.productId != action.payload.productId
      );
      products.push(action.payload);
      return { total: calculateTotal(products), products };
    }
    case "cart/removeProduct": {
      const products = state.products.filter(
        (prod) => prod.productId != action.payload
      );
      return { total: calculateTotal(products), products };
    }

    default:
      return state;
  }
}
