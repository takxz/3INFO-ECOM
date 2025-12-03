import { Link } from 'react-router';
import './Login.css';
import PasswordField from '../../Components/PasswordField/PasswordField';

export default function Login({ }) {
    return (
        <div className='login'>
            <h1>Connexion</h1>
            <p className='subtitle'>Entrez vos identifiants pour accéder à votre compte</p>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@mail.com" />
                </div>
                <div className="form-group">
                    <div className="password-header">
                        <label htmlFor="password">Mot de passe</label>
                        <Link to="/forgot-password">Mot de passe oublié?</Link>
                    </div>
                    <PasswordField />
                </div>
                <div className="form-group">
                    <button className='connect-btn'>Connexion</button>
                    <div className='button-footer'>
                        Pas encore de compte?
                        <Link to="/register">S'inscrire</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}