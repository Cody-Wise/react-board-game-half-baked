import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  const [games, setGames] = useState([]);
  // you'll need some state to hold onto the array of games

  useEffect(() => {
    async function load() {
      const data = await getGames();

      setGames(data);
    }
    load();
  }, []);

  // fetch the games on load and inject them into state
  return (
    <div className="games">
      {/* map through the games in state and render Game components */}
      {games.map((game, i) => (
        <Game key={game + i} game={game} />
      ))}
    </div>
  );
}
