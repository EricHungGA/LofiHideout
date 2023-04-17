import React from 'react'
import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';


export default function NavBar({user, setUser}) {

  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      {user ? <Link onClick={handleLogOut}>LogOut</Link>
      :
      <>
      <Link to="/api/users/signup">Login</Link>
      </>
  }
    </nav>
  )
}

// <AuthPage setUser={setUser} />
