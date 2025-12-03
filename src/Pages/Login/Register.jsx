import { Link } from 'react-router';
import './Register.css';
import PasswordField from '../../Components/PasswordField/PasswordField.jsx';

export default function Register({ }) {
    return (
        <div className='register'>
            <h1>Créer un compte</h1>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@mail.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <PasswordField />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Répéter ot de passe</label>
                    <PasswordField />
                </div>
                <div className="form-group">
                    <button className='connect-btn'>Inscription</button>
                </div>
            </div>
        </div>
    )
}