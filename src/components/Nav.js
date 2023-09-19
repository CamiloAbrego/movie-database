import { NavLink } from 'react-router-dom';

const Nav = () => {
    function blur(e){
        e.target.blur();
    }

    return (
        <nav onClick={blur}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/details">Details</NavLink></li>
                <li><NavLink to="/favourites">Favourites</NavLink></li>
            </ul>
        </nav>
    )
};

export default Nav;