import { Link } from 'react-router-dom';
import React from 'react';

export default class Game extends React.Component {
  render() {
    const { game } = this.props;
    return (
      // be sure this component is wrapped in a react-router link that takes the user to the correct detail page

      <div className="game">
        <Link to={`/board-games/${game.id}`}>
          <h3>{game.title}</h3>
          <p>
            An {game.genre} game by designer {game.designer}
          </p>
          <p>
            for {game.min_players} - {game.max_players} players
          </p>
          <p>{game.description}</p>
        </Link>
      </div>
    );
  }
}
