import { Eye, EyeOff } from 'lucide-react';
import './PasswordField.css';
import { useState } from 'react';

export default function PasswordField({ onChange }) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='password-field'>
            <input type={isVisible ? "text" : "password"} onKeyUp={(e) => onChange(e.target.value)} placeholder="●●●●●●●●"/>
            <div onClick={() => setIsVisible(prev => !prev)}>
                {isVisible &&
                    <EyeOff />
                }
                {!isVisible &&
                    <Eye />
                }
            </div>
        </div>
    )
}