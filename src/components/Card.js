import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, hasButton,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, handleDelete,
    } = this.props;

    return (
      <section className="card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <div>
          <img alt={ cardName } src={ cardImage } data-testid="image-card" />
          {cardTrunfo === true && (
            <div className="to-absolute">
              <h4 className="super-trunfo" data-testid="trunfo-card">
                Super Trunfo
              </h4>
            </div>)}

        </div>
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">{`Attr01: ${cardAttr1}`}</li>
          <li data-testid="attr2-card">{`Attr02: ${cardAttr2}`}</li>
          <li data-testid="attr3-card">{`Attr03: ${cardAttr3}`}</li>
        </ul>
        <h4 className={ cardRare } data-testid="rare-card">{ cardRare }</h4>
        {hasButton === true
        && (
          <button
            type="button"
            onClick={ () => handleDelete(cardName) }
            data-testid="delete-button"
          >
            Excluir
          </button>)}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasButton: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Card;
