import React from 'react';
import './Menu.css';
import {Link} from "react-router-dom";

const categories = ['Local News', 'Technology', 'Entertainment', 'Science', 'Health'];
const icons = ['📰', '⚙️', '🎬',  '🚀', '🩺'];
function Menu() {
    const menuItems = categories.map((category, index) => {
        let link = category;
        if (link.split(' ').length > 0) {
            link = link.split(' ')[0];
        }
        link = `${link.toLowerCase()}News`;
        return <li key={category}>
            <Link to={`/${link}`}>
                <span className="icon">{icons[index]}</span>
                {category}
            </Link>
        </li>
    })
    return (
        <ul className="categories">
          {menuItems}
        </ul>
    );
}

export default Menu;