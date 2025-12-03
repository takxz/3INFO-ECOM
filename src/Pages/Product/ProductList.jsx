import { useEffect, useState } from 'react';
import { useAuth } from '../../Context/auth.context';
import './ProductList.css';
import Product from './Product';
import AutoComplete from '../../Components/AutoComplete/AutoComplete';


export default function ProductList({}) {

    const {user} = useAuth();

    const [users, setUsers] = useState([]);

        useEffect(() => {
        fetch(`http://localhost:3000/user/1`, {
            method: "POST"
        })
            .then(result => result.json())
            .then(data => {
                setUsers(data.data);
            });
    }, [setUsers])



    return (
        <div className='user-page'>
            <div className="search-bar">
                <AutoComplete />
            </div>
        </div>
    )
}