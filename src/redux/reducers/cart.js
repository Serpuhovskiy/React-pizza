const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

// const getTotalSum = (obj, objKey) =>
//   Object.keys(obj).reduce((sum, key) => obj[key].objKey + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0,
      );

      // const totalCount = getTotalSum(newItems, 'items.length');
      // const totalPrice = getTotalSum(newItems, 'totalPrice');

      const allPizzas = [].concat.apply([], items);
      // const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        // totalCount: allPizzas.length,
        totalCount,
        totalPrice,
      };

    case 'DELETE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case 'CLEAR_CART':
      return { items: {}, totalPrice: 0, totalCount: 0 };

    case 'REMOVE_PIZZA_CART': {
      // const currentItems = {
      //   ...state.items
      // }
      const newItems = {
        ...state.items,
        // [action.payload] : {

        // }
      };
      const currentPizzaPrice = newItems[action.payload].items[0].price;
      if (newItems[action.payload].items.length === 1) {
        delete newItems[action.payload];
      } else {
        newItems[action.payload].items.pop();
        newItems[action.payload].totalPrice -= currentPizzaPrice;
      }
      // const currentTotalPrice = newItems[action.pyaload].totalPrice
      // const currentTotalCount = newItems[action.payload].items.length;
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentPizzaPrice,
        totalCount: state.totalCount - 1,
      };
    }
    //   const currentPizzaItems = !state.items[action.payload.id]
    //   ? [action.payload]
    //   : [...state.items[action.payload.id].items, action.payload];

    // const newItems = {
    //   ...state.items,
    //   [action.payload.id]: {
    //     items: currentPizzaItems,
    //     totalPrice: getTotalPrice(currentPizzaItems),
    //   },
    // };
    // const items = Object.values(newItems).map((obj) => obj.items);

    // const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
    // const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

    default:
      return state;
  }
};

export default cart;
