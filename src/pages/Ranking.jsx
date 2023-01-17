import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Ranking extends Component {
  state = {
    sortedRanking: [],
  };

  componentDidMount() {
    if (!localStorage.ranking) {
      const { history } = this.props;
      history.push('/');
    }
    this.setState({
      sortedRanking: this.getRanking(),
    });
  }

  getRanking = () => {
    const orderSortedArray = -1;
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const sortedRanking = ranking.sort(
      (a, b) => (b.score < a.score ? orderSortedArray : 1),
    );
    return sortedRanking;
  };

  handleGoHomeBtn = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/');
  };

  handlePicture = (picture) => {
    const hash = md5(picture).toString();
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return url;
  };

  render() {
    const { sortedRanking } = this.state;
    return (
      <section>
        <h1 data-testid="ranking-title">Ranking Geral</h1>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Avatar</th>
              <th>Nome</th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tboby>
            {
              sortedRanking.map((player, index) => (
                <tr key={ index }>
                  <td data-testid={ `ranking${index}` }>{ `${index + 1}º` }</td>
                  <td>
                    <img src={ this.handlePicture(player.picture) } alt={ player.name } />
                  </td>
                  <td data-testid={ `player-name-${index}` }>{ player.name }</td>
                  <td data-testid={ `player-score-${index}` }>{ player.score }</td>
                </tr>
              ))
            }
          </tboby>
        </table>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleGoHomeBtn }
        >
          Home
        </button>
      </section>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Ranking;
