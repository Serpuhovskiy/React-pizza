import React from 'react';
import { Categories, PizzaBlock, SortPopup, PizzaLoadingBlock } from '../components';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';

import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas}) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas}) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  React.useEffect(() => {
    //Проверка на наличие пицц в items для предотвращения повторного запроса при смене страниц
    dispatch(fetchPizzas(category, sortBy));
  }, [sortBy, category, dispatch]);

  const addPizzaFunc = (obj) => {
    dispatch(addPizzaToCart(obj));
    console.log('PIZZA ADDED TO CART');
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} items={categoryNames} onClick={onSelectCategory} />
        <SortPopup
          activeSortType={sortBy}
          onClickSortType={(index) => dispatch(setSortBy(sortItems[index].type))}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
              <PizzaBlock
                onClickAddPizza={addPizzaFunc}
                addedPizzas={cartItems[item.id]}
                key={item.id}
                {...item}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
