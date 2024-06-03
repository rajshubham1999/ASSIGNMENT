
// import React, { useState, useEffect } from 'react';
// import './Sampleproject.css';
// import logo from '../../assets/logo.png';
// import lama from '../../assets/LAMA..png';
// import home from '../../assets/home.png';
// import upload from '../../assets/Upload.png';
// import downarrow from '../../assets/arrow_drop_down.png';
// import EN from '../../assets/EN.png';
// import flag from '../../assets/Ellipse 2.png';
// import notify from '../../assets/notifications.png';
// import youtube from '../../assets/Youtube.png';
// import media2 from '../../assets/media2.png';
// import media3 from '../../assets/media3.png';

// function Sampleproject() {
//   const [mediaData, setMediaData] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedMedia, setSelectedMedia] = useState(null);
//   const [tableHeight, setTableHeight] = useState('100px'); // Initial height for the table
//   const [processedBoxWidth, setProcessedBoxWidth] = useState('20%'); // Initial width for the Processed Box

//   useEffect(() => {
//     const defaultMediaName = localStorage.getItem('mediaName') || '';
//     const defaultUploadDateTime = localStorage.getItem('uploadDateTime') || '';
//     const defaultMedia = [{ mediaName: defaultMediaName, uploadDateTime: defaultUploadDateTime }];
//     setMediaData(defaultMedia);
//   }, []);

//   const openModal = (media) => {
//     setSelectedMedia(media);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedMedia(null);
//   };

//   const saveMediaToLocalStorage = (media) => {
//     const existingMedia = JSON.parse(localStorage.getItem('mediaData')) || [];
//     const updatedMedia = [...existingMedia, media];
//     localStorage.setItem('mediaData', JSON.stringify(updatedMedia));
//     setMediaData(updatedMedia);
//   };

//   return (
//     <div className='main'>
//       <div className='sidebar'>
//         <div className='icon-image'>
//           <img className="logoimage" src={logo} alt="logo" />
//           <img className='logoname' src={lama} alt="logoname" />
//         </div>
//         <div className='cotainerbox'>
//           <div className='individual-box'>
//             <p>Prodcast uploads file</p>
//           </div>
//           <div className='container-value'>
//             <div className='values'>Projects</div>
//             <div className='values'>Widget Configuration</div>
//             <div className='values'>Deployment</div>
//             <div className='values'>Pricing</div>
//           </div>
//         </div>
//       </div>
//       <div className='rightside-container'>
//         <div className='header'>
//           <div className='left'>
//             <img className="hut" src={home} alt="home" />
//             <img className='upload' src={upload} alt="upload" />
//           </div>
//           <div className='right'>
//             <img className="downarrow" src={downarrow} alt="down-arrow" />
//             <img className='EN' src={EN} alt="EN" />
//             <img className='flag' src={flag} alt="flag" />
//             <img className='notify' src={notify} alt="notify" />
//           </div>
//         </div>
//         <div className='title'>Sample Project</div>
//         <div className='media-box'>
//           <div className='boxes' onClick={() => openModal({ image: youtube, name: 'Upload Youtube Video' })}>
//             <img className='mediaimage' src={youtube} alt="media" />
//             <p className='medianame'>Upload Youtube Video</p>
//           </div>
//           <div className='boxes' onClick={() => openModal({ image: media2, name: 'Upload Spotify Podcast' })}>
//             <img className='mediaimage' src={media2} alt="media" />
//             <p className='medianame'>Upload Spotify Podcast</p>
//           </div>
//           <div className='boxes' onClick={() => openModal({ image: media3, name: 'Upload from RSS Feed' })}>
//             <img className='mediaimage' src={media3} alt="media" />
//             <p className='medianame'>Upload from RSS Feed</p>
//           </div>
//         </div>
//         <div className="project-container" style={{ height: tableHeight }}>
//           <table className="custom-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Upload Date and Time</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {mediaData.map((media, index) => (
//                 <tr key={index}>
//                   <td>{media.mediaName}</td>
//                   <td>{media.uploadDateTime}</td>
//                   <td>Done</td>
//                   <td>
//                     <button className="edit-button">Edit</button>
//                     <button className="delete-button">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="processed-box" style={{ width: processedBoxWidth }}></div>
//         </div>
//       </div>
//       {modalOpen && selectedMedia && (
//         <div className='modal-backdrop' onClick={closeModal}>
//           <div className='modal' onClick={(e) => e.stopPropagation()}>
//             <button className='close-button' onClick={closeModal}>X</button>
//             <h2>{selectedMedia.name}</h2>
//             <img src={selectedMedia.image} alt="media" className='modal-image' />
//             <input type='text' placeholder='Name' className='modal-input' />
//             <input type='text' placeholder='Link' className='modal-input' />
//             <button className='upload-button' onClick={() => saveMediaToLocalStorage(selectedMedia)}>
//               Upload
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sampleproject;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sampleproject.css';
import logo from '../../assets/logo.png';
import lama from '../../assets/LAMA..png';
import home from '../../assets/home.png';
import upload from '../../assets/Upload.png';
import downarrow from '../../assets/arrow_drop_down.png';
import EN from '../../assets/EN.png';
import flag from '../../assets/Ellipse 2.png';
import notify from '../../assets/notifications.png';
import youtube from '../../assets/Youtube.png';
import media2 from '../../assets/media2.png';
import media3 from '../../assets/media3.png';

function Sampleproject() {
  const navigate = useNavigate();
  const [mediaData, setMediaData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [tableHeight, setTableHeight] = useState('100px'); // Initial height for the table
  const [processedBoxWidth, setProcessedBoxWidth] = useState('20%'); // Initial width for the Processed Box

  useEffect(() => {
    const defaultMediaName = localStorage.getItem('mediaName') || '';
    const defaultUploadDateTime = localStorage.getItem('uploadDateTime') || '';
    const defaultMedia = [{ mediaName: defaultMediaName, uploadDateTime: defaultUploadDateTime }];
    setMediaData(defaultMedia);
  }, []);

  const openModal = (media) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMedia(null);
  };

  const saveMediaToLocalStorage = (media) => {
    const existingMedia = JSON.parse(localStorage.getItem('mediaData')) || [];
    const updatedMedia = [...existingMedia, media];
    localStorage.setItem('mediaData', JSON.stringify(updatedMedia));
    setMediaData(updatedMedia);
  };

  const handleDelete = (index) => {
    const updatedMedia = [...mediaData];
    updatedMedia.splice(index, 1);
    setMediaData(updatedMedia);
  };

  const handleEdit = () => {
    navigate('/EditFlow');
  };

  return (
    <div className='main'>
      <div className='sidebar'>
        <div className='icon-image'>
          <img className="logoimage" src={logo} alt="logo" />
          <img className='logoname' src={lama} alt="logoname" />
        </div>
        <div className='cotainerbox'>
          <div className='individual-box'>
            <p>Prodcast uploads file</p>
          </div>
          <div className='container-value'>
            <div className='values'>Projects</div>
            <div className='values'>Widget Configuration</div>
            <div className='values'>Deployment</div>
            <div className='values'>Pricing</div>
          </div>
        </div>
      </div>
      <div className='rightside-container'>
        <div className='header'>
          <div className='left'>
            <img className="hut" src={home} alt="home" />
            <img className='upload' src={upload} alt="upload" />
          </div>
          <div className='right'>
            <img className="downarrow" src={downarrow} alt="down-arrow" />
            <img className='EN' src={EN} alt="EN" />
            <img className='flag' src={flag} alt="flag" />
            <img className='notify' src={notify} alt="notify" />
          </div>
        </div>
        <div className='title'>Sample Project</div>
        <div className='media-box'>
          <div className='boxes' onClick={() => openModal({ image: youtube, name: 'Upload Youtube Video' })}>
            <img className='mediaimage' src={youtube} alt="media" />
            <p className='medianame'>Upload Youtube Video</p>
          </div>
          <div className='boxes' onClick={() => openModal({ image: media2, name: 'Upload Spotify Podcast' })}>
            <img className='mediaimage' src={media2} alt="media" />
            <p className='medianame'>Upload Spotify Podcast</p>
          </div>
          <div className='boxes' onClick={() => openModal({ image: media3, name: 'Upload from RSS Feed' })}>
            <img className='mediaimage' src={media3} alt="media" />
            <p className='medianame'>Upload from RSS Feed</p>
          </div>
        </div>
        <div className="project-container" style={{ height: tableHeight }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Upload Date and Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mediaData.map((media, index) => (
                <tr key={index}>
                  <td>{media.mediaName}</td>
                  <td>{media.uploadDateTime}</td>
                  <td>Done</td>
                  <td>
                    <button className="edit-button" onClick={handleEdit}>Edit</button>
                    <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="processed-box" style={{ width: processedBoxWidth }}></div>
        </div>
      </div>
      {modalOpen && selectedMedia && (
        <div className='modal-backdrop' onClick={closeModal}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <button className='close-button' onClick={closeModal}>X</button>
            <h2>{selectedMedia.name}</h2>
            <img src={selectedMedia.image} alt="media" className='modal-image' />
            <input type='text' placeholder='Name' className='modal-input' />
            <input type='text' placeholder='Link' className='modal-input' />
            <button className='upload-button' onClick={() => saveMediaToLocalStorage(selectedMedia)}>
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sampleproject;
