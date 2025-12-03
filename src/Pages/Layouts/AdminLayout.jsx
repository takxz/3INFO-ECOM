import { NavLink, Outlet } from 'react-router';
import './AdminLayout.css';


export default function AdminLayout({}) {


    return (
        <div className="layout">
            <div className='navbar'>
                <NavLink to="/admin" end>Dashboard</NavLink>
                <NavLink to="/admin/products" end>Produits</NavLink>
                <NavLink to ="/admin/orders" end>Commandes</NavLink>
            </div>
        <Outlet />
        </div>
    )
}