import React, {useRef, useContext} from 'react';
import './Menu.css';
import {Link} from "react-router-dom";
import {newsContext} from "../../context/newsContext";

const categories = ['Local News', 'Technology', 'Entertainment', 'Science', 'Health'];
const icons = ['📰', '⚙️', '🎬',  '🚀', '🩺'];
function Menu() {
    const menu = useRef(null);
    const {setMenuElements} = useContext(newsContext);
    setMenuElements(menu.current);
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
        <ul ref={menu} className="categories">
          <li className="close">×</li>
          {menuItems}
        </ul>
    );
}

export default Menu;