import React from 'react';

const Header = (props) => (
  <div id="header">
    <h1 id="logo">Question Aura</h1>
    <ul className="dropdown">
        <img className="profile-dropdown" src={window.profilePic} />
        <li className="dropdown-content">

        <p onClick={() => props.logout()}>Logout</p>
        </li>
    </ul>
    <button type="submit" className="header-question-click" onClick={() => props.openModal({'question': -1})}>Ask Question</button>
  </div>

);

export default Header;
