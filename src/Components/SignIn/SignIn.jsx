import { Link } from 'react-router';
import './SignIn.css';
import PasswordField from '../../PasswordField/PasswordField.jsx';

export default function SignIn({ }) {
    return (
        <div className='sign-in'>
            <h1>Inscription</h1>
            <p className='subtitle'>Créer un compte</p>
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