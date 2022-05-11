import { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils.js';

export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [{ email: signInEmail, password: signInPassword }, setSignInFormData] = useState({
    email: '',
    password: '',
  });
  // you'll need to track the form state of the email and password

  async function handleSignIn(e) {
    e.preventDefault();

    await signIn(signInEmail, signInPassword);

    const user = getUser;

    setUser(user);

    // sign the user in using the form state

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }

  async function handleSignUp(e) {
    // sign the user up using the form state
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    e.preventDefault();

    await signUp(signUpEmail, signUpPassword);

    const user = getUser;

    setUser(user);
  }

  return (
    <div className="auth">
      <h1>
        <em>Boardzo</em>
      </h1>
      {/* on submit, sign the user in using the function defined above */}
      <form onSubmit={handleSignUp}>
        <h4>sign up</h4>
        <label>
          Email
          {/* on change, update the form state for email */}
          <input
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            required
            type="email"
            name="email"
          />
        </label>
        <label>
          Password
          {/* on change, update the form state for password */}
          <input
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            required
            type="password"
            name="password"
          />
        </label>
        {/* on clicking sign up, sign the user up using the function defined above */}
        <button>Sign Up</button>
      </form>

      <form onSubmit={handleSignIn}>
        <h4>sign in</h4>
        <label>
          email
          {/* when i add this value property, these are now "controlled" inputs */}
          {/* they are synched 100% to react state. that puts react state in charge, which is how we want it. */}
          <input
            value={signInEmail}
            onChange={(e) =>
              setSignInFormData({
                email: e.target.value,
                password: signInPassword,
              })
            }
          />
        </label>
        <label>
          password
          <input
            type="password"
            value={signInPassword}
            onChange={(e) =>
              setSignInFormData({
                email: signInEmail,
                password: e.target.value,
              })
            }
          />
        </label>
        <button onSubmit={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}
