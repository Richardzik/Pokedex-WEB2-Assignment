import { NavLink } from 'react-router-dom';
import '../App.css';

export default function NavigationBar(){
    return(
        <>
        <div className="navigation-bar-container">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Pokedex
            </NavLink>
            <NavLink to="/ABOUT" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About us
            </NavLink>
        </div>
        </>
    );
}