import React from 'react';
import Card from './components/Card';
import Filters from './components/Filters';
import Form from './components/Form';
import cards from './components/Data';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: cards,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
  }

  clearState = () => {
    this.setState({ cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true });
  }

  verificaAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = parseFloat(cardAttr1);
    const attr2 = parseFloat(cardAttr2);
    const attr3 = parseFloat(cardAttr3);
    const soma = attr1 + attr2 + attr3;
    const maxSoma = 210;
    const max = 90;
    const min = 0.0;
    if (attr1 > max || attr2 > max
      || attr3 > max) {
      return true;
    }
    if (soma > maxSoma) return true;
    if (attr1 < min || attr2 < min
      || attr3 < min) {
      return true;
    }
    if (cardAttr1.length === 0 || cardAttr2.length === 0
      || cardAttr3.length === 0) {
      return true;
    }
    return false;
  }

  verificaTxt = () => {
    const { cardName, cardDescription, cardImage } = this.state;
    if (cardName.length === 0 || cardDescription.length === 0
      || cardImage.length === 0) {
      return true;
    }
    return false;
  }

  verificaAll = () => {
    const retorno1 = this.verificaAttr();
    const retorno2 = this.verificaTxt();
    if (retorno1 === false && retorno2 === false) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  handleDelete = (name) => {
    const { savedCards } = this.state;
    const armazenadas = savedCards;
    const result = armazenadas.filter((el) => el.cardName !== name);
    const trunfo = result.map((el) => el.cardTrunfo);
    const isThereTrunfo = trunfo.find((el) => el === true);
    if (isThereTrunfo !== true) this.setState({ hasTrunfo: false });
    this.setState({ savedCards: result });
  }

  handleChange = ({ target }) => {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [id]: value }, () => this.verificaAll());
  }

  handleSave = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, savedCards } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    const obj = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    const array = [];
    savedCards.forEach(((curr) => array.push(curr)));
    array.push(obj);
    this.setState({ savedCards: array });
    this.clearState();
  }

  render() {
    const { cardName, cardDescription, cardAttr1, rareFilter,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, trunfoFilter,
      hasTrunfo, isSaveButtonDisabled, savedCards, nameFilter } = this.state;

    return (
      <div>
        <section className="first-section">
          <div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.handleSave }
            />
          </div>
          <div className="previewCard-box">
            <Card
              handleDelete={ this.handleDelete }
              hasButton={ false }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
        <h2 id="h2-divisor">Cartas</h2>
        <section className="carta-filtros">
          <div>
            <Filters
              trunfoFilter={ trunfoFilter }
              rareFilter={ rareFilter }
              nameFilter={ nameFilter }
              callback={ this.handleChange }
            />
          </div>
          <div className="cartas-salvas-container">
            {savedCards
              .filter((e) => e.cardName.toLowerCase().includes(nameFilter.toLowerCase()))
              .filter((e) => {
                if (rareFilter === 'todas') return e;
                if (e.cardRare === rareFilter) return e;
                return null;
              })
              .filter((e) => {
                if (trunfoFilter === true && e.cardTrunfo === true) {
                  return e;
                } if (trunfoFilter === true) {
                  return null;
                }
                return e;
              })
              .map((el) => (
                <Card
                  handleDelete={ this.handleDelete }
                  key={ el.cardName }
                  hasButton
                  cardName={ el.cardName }
                  cardDescription={ el.cardDescription }
                  cardAttr1={ el.cardAttr1 }
                  cardAttr2={ el.cardAttr2 }
                  cardAttr3={ el.cardAttr3 }
                  cardImage={ el.cardImage }
                  cardRare={ el.cardRare }
                  cardTrunfo={ el.cardTrunfo }
                />
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
