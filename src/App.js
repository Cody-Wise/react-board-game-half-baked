import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';

import './App.css';
import { logout } from './services/fetch-utils';

export default function App() {
  // You'll need to track the user in state

  const [user, setUser] = useState('');
  const [email, setEmail] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const user = getUser();

    console.log(user);

    // if (user) {
    //   setToken(user.access_token);
    //   setEmail(user.user.email);
    // }
  }, []);

  // add a useEffect to get the user and inject the user object into state on load

  async function handleLogout() {
    // call the logout function
    // clear the user in state
    logout();
    user('');
  }

  return (
    <Router>
      <div className="App">
        <header>
          {user ? (
            <div>
              <NavLink to="/list">Board Games List</NavLink>
              <NavLink to="/create">Create Board Game</NavLink>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          ) : (
            <Redirect to="/" />
          )}
          {/* if there is a user in state, render out a link to the board games list, the create page, and add a button to let the user logout */}
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/list" /> : <AuthPage />}
              {/* if there is a user, redirect to the board games list. Otherwise, render the auth page. Note that the AuthPage will need a function called setUser that can set the user state in App.js */}
            </Route>
            <Route exact path="/board-games">
              {/* if there is a user, render the board games list. Otherwise, redirect to the home route/auth page */}
            </Route>
            <Route exact path="/board-games/:id">
              {/* if there is a user, render the detail page. Otherwise, redirect to the home route/auth page */}
            </Route>
            <Route exact path="/create">
              {/* if there is a user, render the create page. Otherwise, redirect to the home route/auth page */}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
