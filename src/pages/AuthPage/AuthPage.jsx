import { useState} from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <style>{`body { background-image: url('https://res.cloudinary.com/di8ugfihk/image/upload/v1681921382/ezgif.com-crop_ocvy7g.gif'); }`}</style>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>}
      <div>
        <h3>{showLogin ? <button class="rounded-xl text-md text-neutral-500 border border-neutral-500/50 w-44 h-12 mt-8 shadow-lg shadow-amber-500/50" onClick={() => setShowLogin(!showLogin)}>SIGN UP</button>: <button class="rounded-xl text-md text-neutral-500 border border-neutral-500/50 w-44 h-12 mt-6 shadow-lg shadow-amber-500/50" onClick={() => setShowLogin(!showLogin)}>LOG IN</button>}</h3>
      </div>
    </main>
  );
}
