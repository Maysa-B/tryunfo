import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { nameFilter, callback, rareFilter, trunfoFilter } = this.props;

    return (
      <div className="filtros-division">
        <h3>Filtros de busca</h3>
        <input
          disabled={ trunfoFilter }
          onChange={ callback }
          value={ nameFilter }
          placeholder="Nome da carta"
          id="nameFilter"
          type="text"
          data-testid="name-filter"
        />
        <select
          disabled={ trunfoFilter }
          id="rareFilter"
          value={ rareFilter }
          onChange={ callback }
          data-testid="rare-filter"
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label className="trunfocheck" htmlFor="trunfoFilter">
          Super Trunfo
          <input
            id="trunfoFilter"
            type="checkbox"
            checked={ trunfoFilter }
            onChange={ callback }
            data-testid="trunfo-filter"
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filters;
