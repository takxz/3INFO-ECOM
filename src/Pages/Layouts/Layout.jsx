import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import './Layout.css';
import { Home, LogOut, ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../../Context/auth.context';



export default function Layout({}) {

    const {user, logOut} = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
        navigate('/login');
    }

    return (
        <div className="layout">
            <div className='navbar'>
                <div className="left-bar bar">
                    <NavLink to="/"><Home /></NavLink>
                    <NavLink to="/products">Produits</NavLink>
                </div>
                <div className="right-bar bar">
                    <NavLink to="/cart"><ShoppingCart /></NavLink>
                    {user &&
                    <LogOut onClick={() => handleLogOut()} className='navlink'/>
                    }
                    {!user &&
                    <NavLink to="/login"><User /></NavLink>
                    }
                </div>
            </div>
            <Outlet />
        </div>
    )
}