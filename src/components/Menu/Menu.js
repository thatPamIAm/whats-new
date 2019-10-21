import React from 'react';
import './Menu.css';

const Menu = (props) => {

  const handleClick = (e) => {
    props.updateNews(e.target.id)   
  }

  return (
    <nav onClick={e => handleClick(e)}>
      <li><button id="local">Local News</button></li>
      <li><button id="technology">Technology</button></li>
      <li><button id="entertainment">Entertainment</button></li>
      <li><button id="science">Science</button></li>
      <li><button id="health">Health</button></li>
    </nav>
  )
}

export default Menu;