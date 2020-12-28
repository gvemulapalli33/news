import React, {useState, useContext, useEffect, useRef} from 'react';
import './SearchForm.css';
import {newsContext} from "../../context/newsContext";

function SearchForm() {
    const [search, setSearch] = useState('');
    const {menuElements} = useContext(newsContext);
    const menu = useRef(null);
    const menuItems = menu.current;
    const handleMouseOver = (event) => {
        if (event.target.classList.contains('menu')) {
            menuElements.style.display = 'block';
        }
    };

    const handleClick = (event) => {
        if (event.target.classList.contains('close')) {
            menuElements.style.display = 'none';
        }
    };

    useEffect(
        () => {
            if (menuElements){
                menuItems.addEventListener('mouseover', handleMouseOver);
                menuElements.addEventListener('click', handleClick);
                return () => {
                    menuItems.removeEventListener('mouseover', handleMouseOver);
                    menuElements.removeEventListener('click', handleClick);
                };
            }
        },
        [menuElements] 
      );

    return (
        <nav className="heading">
            <h2 className="title">What's <span className="textColor">New?</span></h2>
            <form className="searchForm">
              <a ref={menu} href=" " className="menu">&#9776;</a>
              <label htmlFor="search"/>
              <input placeholder="Search for news article here..." name="search" id="search" value={search} type="text" onChange={(event) => {setSearch(event.target.value)}}/>
              <button className="searchBtn">Search Now</button>
            </form>
        </nav>
    );
}
export default SearchForm;