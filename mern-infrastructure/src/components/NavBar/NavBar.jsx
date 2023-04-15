import React from 'react'
import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';


export default function NavBar({setUser}) {

  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut}>LogOut</Link>
    </nav>
  )
}

