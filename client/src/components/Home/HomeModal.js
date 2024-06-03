import React from 'react';
import './HomeModal.css';

const HomeModal = ({ onClose, children }) => {
  return (
    <div className="homemodal-backdrop">
      <div className="homemodal">
        <button className="homemodal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default HomeModal;
