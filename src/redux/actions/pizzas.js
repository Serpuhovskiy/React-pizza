import axios from 'axios';

const API_URL = 'https://react-pizza-json-server.herokuapp.com';


export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  if (category !== null) {
    axios
      .get(
        `${API_URL}/pizzas?category=${category}&_sort=${sortBy === 'alphabet' ? 'name' : sortBy
        }`)
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  } else {
    axios
      .get(`${API_URL}/pizzas?_sort=${sortBy === 'alphabet' ? 'name' : sortBy}`)
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  }
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
