import React from 'react';
import IconFilter from '../../../shared-assets/filters/icon-filter';

const CardsTopbarFilters = ({query}) => {
  return (
      <div className="topbar">
        <IconFilter header={false} filter="cost"        query={query} tooltip={false} wrapper_class="topbar-left" />
        <IconFilter header={false} filter="playerClass" query={query} tooltip={true}  wrapper_class="topbar-right" />
      </div>
  );
};

CardsTopbarFilters.propTypes = {
  query: React.PropTypes.object
};

export default CardsTopbarFilters;