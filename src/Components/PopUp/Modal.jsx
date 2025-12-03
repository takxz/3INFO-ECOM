import { X } from 'lucide-react';
import './Modal.css';


export default function Modal({ showPopUp, closePopUp, children }) {


    if (!showPopUp) return null;

    return (
        <div className='PopUp'>
            <div className="backdrop" >
                <div className="popup-body">
                    <button id="close-button" onClick={closePopUp}><X /></button>
                    {children}
                </div>
            </div>
        </div>
    )
}