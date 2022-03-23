import axios from 'axios';

const API_URL = process.env.API_URL;

console.log('NODE_ENV', process.env.NODE_ENV, 'REACT_APP_API', process.env.REACT_APP_API);

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
        // `/pizzas?category=${category}&_sort=${sortBy === 'alphabet' ? 'name' : sortBy
        // }`)
        `${API_URL}/pizzas?category=${category}&_sort=${sortBy === 'alphabet' ? 'name' : sortBy
        }`)
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  } else {
    axios
      .get(`${API_URL}/pizzas?_sort=${sortBy === 'alphabet' ? 'name' : sortBy}`)
      // .get(`/pizzas?_sort=${sortBy === 'alphabet' ? 'name' : sortBy}`)
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  }
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
