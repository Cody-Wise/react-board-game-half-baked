import React from 'react';
import { createGame } from './services/fetch-utils';

import { withRouter } from 'react-router-dom';

export default withRouter(
  class CreatePage extends React.Component {
    // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

    // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;

    // const history = useHistory();

    constructor() {
      super();
      this.state = {
        title: '',
        genre: 'Tile-laying',
        designer: '',
        description: '',
        min_players: 0,
        max_players: 0,
      };
    }

    // const [gameInTheForm, setGameInTheForm] = useState({
    //   title: '',
    //   genre: 'Tile-laying',
    //   designer: '',
    //   description: '',
    //   min_players: '',
    //   max_players: '',
    // });

    handleSubmit = async (e) => {
      console.log('hello');
      const { title, genre, designer, description, min_players, max_players } = this.state;
      e.preventDefault();
      console.log(title);

      await createGame({ title, genre, designer, description, min_players, max_players });

      this.props.history.push('/board-games');

      // create a game

      // use history.push to send the user to the list page
    };

    render() {
      return (
        <div className="create">
          {/* on submit, call your handleSubmit function */}
          <form onSubmit={this.handleSubmit}>
            <h2>Add board game</h2>
            <label>
              Title
              {/* on change, set the title in state */}
              <input
                value={this.state.title}
                onChange={(e) =>
                  this.setState({
                    title: e.target.value,
                  })
                }
                required
                name="title"
              />
            </label>
            <p>{this.state.title}</p>
            <label>
              Genre
              {/* on change, set the genre in state */}
              <select
                value={this.state.genre}
                onChange={(e) =>
                  this.setState({
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
                value={this.state.designer}
                onChange={(e) =>
                  this.setState({
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
                value={this.state.min_players}
                onChange={(e) =>
                  this.setState({
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
                value={this.state.max_players}
                onChange={(e) =>
                  this.setState({
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
                value={this.state.description}
                onChange={(e) =>
                  this.setState({
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
  }
);
