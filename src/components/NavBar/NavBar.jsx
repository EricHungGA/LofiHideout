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
	<div class="bg-black shadow">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div class="w-10 h-10">
          <img src="https://i.pinimg.com/564x/2a/3a/da/2a3adacf3ac01f5248ffd352dcece5a2.jpg"></img>
        </div>

        <div class="hidden sm:flex sm:items-center">
          <a href="/" class="text-slate-400 text-sm font-semibold hover:text-blue-700 mr-4">Lofi Hideout</a>
        </div>

        <div class="hidden sm:flex sm:items-center">
        {user ? <a onClick={handleLogOut} class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-blue-700 hover:border-blue-700">Logout</a>
            :
            <Link to="/api/users/signup" class="text-slate-400 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-blue-700 hover:border-blue-700">Sign up</Link>
        }
        </div>
      </div>
      
      <div class="block sm:hidden bg-white border-t-2 py-2">
        <div class="flex flex-col">
          <a class="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Lofi Hideout</a>
          <div class="flex justify-between items-center border-t-2 pt-2">
            <a href="#" class="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-blue-700 hover:border-blue-700">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )}