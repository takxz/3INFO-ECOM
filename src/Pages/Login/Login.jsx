import { Link } from 'react-router';
import './Login.css';
import PasswordField from '../../Components/PasswordField/PasswordField.jsx';
import Card from '../../Components/Card/Card.jsx';
import PopUp from '../../Components/PopUp/Modal.jsx';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Modal from '../../Components/PopUp/Modal.jsx';

export default function Login({ }) {

    const [showPopUp, setShowPopUp] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const sendLoginRequest = async () => {
        try {
            const res = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (!res.ok) {
                console.log('Login failed', data, res.status);
                setIsValidEmail(false);
                setShowPopUp(true);
                return;
            }
            console.log('Login success', data);
            setIsValidEmail(true);
            setShowPopUp(true);
        } catch (erreur) {
            console.error('erreur', erreur);
            setIsValidEmail(false);
            setShowPopUp(true);
        }
    }

    return (
        <div className='login'>
            <h1>Connexion</h1>
            <p className='subtitle'>Entrez vos identifiants pour accéder à votre compte</p>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@mail.com" onKeyUp={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <div className="password-header">
                        <label htmlFor="password">Mot de passe</label>
                        <Link to="/forgot-password">Mot de passe oublié?</Link>
                    </div>
                    <PasswordField />
                </div>
                <div className="form-group">
                    <button className='connect-btn' onClick={() => sendLoginRequest()}>Connexion</button>
                    {isValidEmail &&
                    <Modal showPopUp={showPopUp} closePopUp={() => setShowPopUp(false)}>
                        Connexion réussie!
                    </Modal>
                    }
                    {!isValidEmail &&
                    <Modal showPopUp={showPopUp} closePopUp={() => setShowPopUp(false)}>
                        Email ou mot de passe incorrect.
                    </Modal>
                    }
                    <div className='button-footer'>
                        Pas encore de compte?
                        <Link to="/register">S'inscrire</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}