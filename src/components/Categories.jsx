import classNames from 'classnames';
import React, { useState } from 'react';

export default React.memo(function Categories({ activeCategory, items, onClick }) {
  // const [activeItem, setActiveItem] = useState(null);

  // const onSelectItem = (index) => {
  //   setActiveItem(index);
  //   onClick(index);
  // };

  // console.log(activeCategory);

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClick(null)}
          className={classNames({
            active: activeCategory == null,
          })}>
          Все
        </li>

        {items &&
          items.map((item, index) => (
            <li
              onClick={() => onClick(index)}
              key={`${item}_${index}`}
              className={classNames({
                active: activeCategory === index,
              })}>
              {item}
            </li>
          ))}

        {/* <li>Мясные</li>
      <li>Вегетарианская</li>
      <li>Гриль</li>
      <li>Острые</li>
      <li>Закрытые</li> */}
      </ul>
    </div>
  );
});
