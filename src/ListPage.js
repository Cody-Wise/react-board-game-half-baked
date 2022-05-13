import { getGames } from './services/fetch-utils';
import Game from './Game';
import React from 'react';

export default class ListPage extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }
  // const [games, setGames] = useState([]);
  // you'll need some state to hold onto the array of games

  async componentDidMount() {
    const data = await getGames();

    this.setState({ games: data });
  }

  // useEffect(() => {
  //   async function load() {
  //     const data = await getGames();

  //     setGames(data);
  //   }
  //   load();
  // }, []);

  // fetch the games on load and inject them into state
  render() {
    return (
      <div className="games">
        {/* map through the games in state and render Game components */}
        {this.state.games.map((game, i) => (
          <Game key={game + i} game={game} />
        ))}
      </div>
    );
  }
}
