import React from 'react'
import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';
import './NavBar.css'


export default function NavBar({user, setUser}) {

  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <>
    {/* <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      {user ? <Link onClick={handleLogOut}>LogOut</Link>
      :
      <>
      <Link to="/api/users/signup">Login</Link>
      </>
  }
     </nav> */}


<div>
	<div class="bg-transparent animate-fade-in-and-out">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div class="w-10 h-10 opacity-70">
          <img src="https://i.pinimg.com/564x/2a/3a/da/2a3adacf3ac01f5248ffd352dcece5a2.jpg"></img>
        </div>
        <div class="hidden sm:flex sm:items-center text-center">
          <Link to="/" class="text-orange-200/40 text-2xl italic tracking-wide hover:text-neutral-700/90">Lofi Hideout</Link>
        </div>

        <div class="hidden sm:flex sm:items-center">
        {user ? <a onClick={handleLogOut} class="text-slate-400/90 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-indigo-600/70 hover:border-indigo-600/70">Logout</a>
            :
            <Link to="/api/users/signup" class="text-slate-400/90 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-indigo-600/70 hover:border-indigo-600/70">Sign up</Link>
        }
        </div>
      </div>
      <div class="block sm:hidden bg-white border-t-2 py-2">
        <div class="flex flex-col">
          <a class="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Lofi Hideout</a>
          <div class="flex justify-between items-center border-t-2 pt-2">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )}