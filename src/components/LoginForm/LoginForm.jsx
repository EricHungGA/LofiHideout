import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div class="rounded-xl border border-neutral-500/50 w-128 h-28">
      <div className="form-container text-md text-neutral-500 mt-10">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label class="mr-4 ml-4">Email</label>
          <input class="text-neutral-300 rounded-md bg-neutral-500/50" type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label class="mr-4 ml-4">Password</label>
          <input class="text-neutral-300 rounded-md bg-neutral-500/50" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button class="rounded-xl border border-neutral-500/50 mr-4 ml-4 w-24 h-8 animate-fade-in-and-out shadow-lg shadow-blue-500/50" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
