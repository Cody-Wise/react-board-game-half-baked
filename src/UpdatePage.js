import { useState, useEffect } from 'react';
import { reactRouterDom } from 'react-router-dom';
import { getGameById, updateGame } from './services/fetch-utils';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function UpdatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  // here's the state you'll need:
  // title;
  // genre;
  // designer;
  // description;
  // minPlayers;
  // maxPlayers;

  const match = useRouteMatch();
  const history = useHistory();
  const [game, setGame] = useState({});

  // const [gameInTheForm, setGameInTheForm] = useState({
  //   title: '',
  //   genre: '',
  //   designer: '',
  //   description: '',
  //   min_players: '',
  //   max_players: '',
  // });

  useEffect(() => {
    async function load() {
      const game = await getGameById(match.params.id);

      setGame(game);
    }
    load();
  }, [match.params.id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await updateGame(game);

    history.push('/board-games');

    // create a game

    // use history.push to send the user to the list page
  }

  return (
    <div className="create">
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
          Title
          {/* on change, set the title in state */}
          <input
            value={game.title}
            onChange={(e) =>
              setGame({
                ...game,
                title: e.target.value,
              })
            }
            required
            name="title"
          />
        </label>
        <label>
          Genre
          {/* on change, set the genre in state */}
          <select
            value={game.genre}
            onChange={(e) =>
              setGame({
                ...game,
                genre: e.target.value,
              })
            }
            required
          >
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
          Designer
          {/* on change, set the designer in state */}
          <input
            value={game.designer}
            onChange={(e) =>
              setGame({
                ...game,
                designer: e.target.value,
              })
            }
            required
            name="designer"
          />
        </label>
        <label>
          Min Players
          {/* on change, set the min players in state */}
          <input
            value={game.min_players}
            onChange={(e) =>
              setGame({
                ...game,
                min_players: e.target.value,
              })
            }
            required
            name="min_players"
          />
        </label>
        <label>
          Max Players
          {/* on change, set the max players in state */}
          <input
            value={game.max_players}
            onChange={(e) =>
              setGame({
                ...game,
                max_players: e.target.value,
              })
            }
            required
            name="max_players"
          />
        </label>
        <label>
          Description
          {/* on change, set the description in state */}
          <textarea
            value={game.description}
            onChange={(e) =>
              setGame({
                ...game,
                description: e.target.value,
              })
            }
            required
            name="description"
          />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
