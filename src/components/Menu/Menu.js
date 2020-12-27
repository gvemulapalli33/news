import React from 'react';
import './Menu.css'

const categories = ['Local News', 'Technology', 'Entertainment', 'Science', 'Health'];
const icons =['📰', '⚙️', '🎬',  '🚀', '🩺'];
function Menu() {
    const menuItems = categories.map((category, index) => {
        return <li><span className="icon">{icons[index]}</span>{category}</li>
    })
    return (
        <ul className="categories">
          {menuItems}
        </ul>
    );
}

export default Menu;