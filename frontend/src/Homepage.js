import React from 'react';
import { NavLink } from 'react-router-dom'


function Homepage() {

    return (
        <div className="App" >
            <ul>
                <li><NavLink activeClassName="active" exact to="/">menu1</NavLink></li>
                <li><NavLink activeClassName="active" to="/gamePage">menu2</NavLink></li>
            </ul>
        </div>)

}
export default Homepage;
