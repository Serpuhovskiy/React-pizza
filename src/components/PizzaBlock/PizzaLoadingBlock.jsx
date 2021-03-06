import React from 'react'
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
    return (
        <ContentLoader
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <circle cx="140" cy="140" r="140" />
          <rect x="0" y="310" rx="5" ry="5" width="280" height="64" />
        </ContentLoader>
      );
}

export default PizzaLoadingBlock