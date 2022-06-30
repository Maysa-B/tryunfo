import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <form className="forms">
        <h2> Adicionar nova carta</h2>
        <label htmlFor="cardName">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            id="cardName"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            id="cardDescription"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="cardAttr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="cardAttr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="cardAttr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            id="cardImage"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            id="cardRare"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        { hasTrunfo === true
          ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
          : (
            <label className="check-label" htmlFor="cardTrunfo">
              Super Trunfo
              <input
                className="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                type="checkbox"
                id="cardTrunfo"
                data-testid="trunfo-input"
              />
            </label>)}
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
