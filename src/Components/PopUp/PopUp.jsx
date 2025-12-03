import './PopUp.css';


export default function PopUp({ showPopUp, closePopUp, children }) {


    if (!showPopUp) return null;

    return (
        <div className='PopUp'>
            <div className="backdrop" onClick={closePopUp}>
                <div className="popup-body">
                    <button id="close-button" onClick={closePopUp}>X</button>
                    {children}
                </div>
            </div>
        </div>
    )
}