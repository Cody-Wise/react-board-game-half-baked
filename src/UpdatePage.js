import { useState, useEffect } from 'react';
import reactRouterDom from 'react-router-dom';
import { createGame, getGameById, updateGame } from './services/fetch-utils';
import { useHistory, useParams } from 'react-router-dom';

export default function UpdatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  // here's the state you'll need:
  // title;
  // genre;
  // designer;
  // description;
  // minPlayers;
  // maxPlayers;

  const history = useHistory();
  const id = useParams();

  const [gameInTheForm, setGameInTheForm] = useState({
    title: '',
    genre: '',
    designer: '',
    description: '',
    min_players: '',
    max_players: '',
  });

  useEffect(() => {
    async function load() {
      const game = await getGameById(id);

      setGameInTheForm(game);
    }
    load();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await updateGame(id, gameInTheForm);

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
            value={gameInTheForm.title}
            onChange={(e) =>
              setGameInTheForm({
                ...gameInTheForm,
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
            value={gameInTheForm.genre}
            onChange={(e) =>
              setGameInTheForm({
                ...gameInTheForm,
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
            value={gameInTheForm.designer}
            onChange={(e) =>
              setGameInTheForm({
                ...gameInTheForm,
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
            value={gameInTheForm.min_players}
            onChange={(e) =>
              setGameInTheForm({
                ...gameInTheForm,
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
            value={gameInTheForm.max_players}
            onChange={(e) =>
              setGameInTheForm({
                ...gameInTheForm,
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
            value={gameInTheForm.description}
            onChange={(e) =>
              setGameInTheForm({
                ...gameInTheForm,
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
