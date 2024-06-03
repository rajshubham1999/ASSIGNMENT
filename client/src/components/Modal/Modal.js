

// import React from 'react';
// import './Modal.css';

// function Modal({ showModal, onClose, onCreate }) {
//   if (!showModal) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <div className="modal-header">
//           <p>Create Project</p>
//         </div>
//         <div className="modal-body">
//           <p>Enter Project Name :</p>
//           <input className="input-field" type="text" placeholder='Type Here'/>
//         </div>
//         <div className="modal-footer">
//           <button className="btn cancel" onClick={onClose}>Cancel</button>
//           <button className="btn create" onClick={onCreate}>Create</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

// import React, { useState } from 'react';
// import './Modal.css';

// function Modal({ showModal, onClose, onCreate }) {
//   const [projectName, setProjectName] = useState('');

//   const handleCreate = () => {
//     onCreate(projectName);
//   };

//   if (!showModal) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <div className="modal-header">
//           <p>Create Project</p>
//         </div>
//         <div className="modal-body">
//           <p>Enter Project Name :</p>
//           <input
//             className="input-field"
//             type="text"
//             placeholder="Type Here"
//             value={projectName}
//             onChange={(e) => setProjectName(e.target.value)}
//           />
//         </div>
//         <div className="modal-footer">
//           <button className="btn cancel" onClick={onClose}>Cancel</button>
//           <button className="btn create" onClick={handleCreate}>Create</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
// Modal.js
import React, { useState } from 'react';
import './Modal.css';

function Modal({ showModal, onClose, onCreate }) {
  const [projectName, setProjectName] = useState('');

  const handleCreate = () => {
    onCreate(projectName);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <p>Create Project</p>
        </div>
        <div className="modal-body">
          <p>Enter Project Name:</p>
          <input
            className="input-field"
            type="text"
            placeholder="Type Here"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="btn cancel" onClick={onClose}>Cancel</button>
          <button className="btn create" onClick={handleCreate}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
