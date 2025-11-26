import { NavLink, Outlet } from 'react-router';
import './AdminLayout.css';


export default function AdminLayout({}) {


    return (
        <div className="layout">
            <div className='navbar'>
                <NavLink to="/admin">Dashboard</NavLink>
                <NavLink to="/admin/products">Produits</NavLink>
                <NavLink to ="/orders">Commandes</NavLink>
            </div>
        <Outlet />
        </div>
    )
}