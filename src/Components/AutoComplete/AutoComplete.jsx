import { useState } from 'react';
import './AutoComplete.css';
import Product from '../../Pages/Product/Product';


export default function AutoComplete({}) {

    const [usersSearch, setUsersSearch] = useState([]);

        const searchUsers = (query) => {
            fetch('http://localhost:3000/user/1', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ terms: [query] })
            })
                .then(result => result.json())
                .then(data => {
                    console.log(query);
                    setUsersSearch(data.data);
                });
        }

    return (
    <>
        <div className='search-bar'>
            <input type="text" placeholder='Rechercher un utilisateur...' onKeyUp={(e) => searchUsers(e.target.value)}/>
        </div>
        <div className="user-list">
            {usersSearch.map(usersSearch => <Product user={usersSearch} />)}
        </div>
    </>
    )
}