import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  console.log(category, sortBy);
  dispatch(setLoaded(false));
  if (category !== null) {
    axios
      .get(
        `http://localhost:3001/pizzas?category=${category}&_sort=${
          sortBy === 'alphabet' ? 'name' : sortBy
        }`,
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  } else {
    axios
      .get(`http://localhost:3001/pizzas?_sort=${sortBy === 'alphabet' ? 'name' : sortBy}`)
      .then(({ data }) => {
        //   dispatch(setPizzas(data));
        dispatch(setPizzas(data));
      });
  }
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
