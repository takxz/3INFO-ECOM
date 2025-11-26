import { Link, NavLink, Outlet } from 'react-router';
import './Layout.css';
import { Home, ShoppingCart, User } from 'lucide-react';



export default function Layout({}) {


    return (
        <div className="layout">
            <div className='navbar'>
                <div className="left-bar bar">
                    <NavLink to="/"><Home /></NavLink>
                    <NavLink to="/products">Produits</NavLink>
                </div>
                <div className="right-bar bar">
                    <NavLink to="/login"><User /></NavLink>
                    <NavLink to="/cart"><ShoppingCart /></NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}