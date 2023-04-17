import { useState} from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'



export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>}
      <div>
        <h3>{showLogin ? <button onClick={() => setShowLogin(!showLogin)}>SIGN UP</button>: <button onClick={() => setShowLogin(!showLogin)}>LOG IN</button>}</h3>
      </div>
    </main>
  );
}
