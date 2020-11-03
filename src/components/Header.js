import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense Page</NavLink>
        <NavLink to="/Help" activeClassName="is-active">Help Page</NavLink>
    </header>
  )

  export default Header