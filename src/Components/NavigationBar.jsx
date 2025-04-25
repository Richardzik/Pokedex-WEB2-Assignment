import { NavLink } from 'react-router-dom';
import '../App.css';

export default function NavigationBar(){
    return(
        <>
        <div className="navigation-bar-container">
            <NavLink to="/" className="nav-link">Pokedex</NavLink>
            <NavLink to="/ABOUT" className="nav-link">About us</NavLink>

        </div>
        </>
    );
}