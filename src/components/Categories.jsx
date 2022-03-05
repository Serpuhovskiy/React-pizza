import classNames from 'classnames';
import React from 'react';

export default React.memo(function Categories({ activeCategory, items, onClick }) {
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
      </ul>
    </div>
  );
});
