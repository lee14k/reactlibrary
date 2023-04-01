import React from "react";
import styles from './Modal.module.css'

function Modal ({isOpen, onClose, children}) {
    if (!isOpen) {
        return null;
    }

    return (
        
        <div className="modal">
            <div className="modal-content">
                <h1>Add new book</h1>
                <form action="">
            <input>name of book</input>
            <input>author</input>
            <input>page count</input>
            <input>finished?</input>

                </form>
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
                
            </div>
        </div>
    )
}

export default Modal