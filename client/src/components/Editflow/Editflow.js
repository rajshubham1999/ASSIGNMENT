


// import React, { useState, useRef,useEffect } from 'react';
// import logo from '../../assets/logo.png';
// import lama from '../../assets/LAMA..png';
// import home from '../../assets/home.png';
// import upload from '../../assets/Transcript.png';
// import downarrow from '../../assets/arrow_drop_down.png';
// import EN from '../../assets/EN.png';
// import flag from '../../assets/Ellipse 2.png';
// import notify from '../../assets/notifications.png';
// import pencil from '../../assets/mode.png';
// import search from '../../assets/search.png';
// import './Editflow.css';

// function Editflow() {
//     // const [isEditMode, setIsEditMode] = useState(false);
//     // const editableContentRef = useRef(null);

//     // const handleEditModeClick = () => {
//     //     setIsEditMode(true);
//     //     setTimeout(() => {
//     //         const content = editableContentRef.current;
//     //         const range = document.createRange();
//     //         const selection = window.getSelection();

//     //         range.selectNodeContents(content);
//     //         range.collapse(false);

//     //         selection.removeAllRanges();
//     //         selection.addRange(range);

//     //         content.focus();
//     //     }, 0);
//     // };
//     const [isEditMode, setIsEditMode] = useState(false);
//     const [editedText, setEditedText] = useState('');
//     const editableContentRef = useRef(null);

//     useEffect(() => {
//         const savedText = localStorage.getItem('editedText');
//         if (savedText) {
//             setEditedText(savedText);
//         }
//     }, []);

//     const handleEditModeClick = () => {
//         setIsEditMode(true);
//         setTimeout(() => {
//             const content = editableContentRef.current;
//             const range = document.createRange();
//             const selection = window.getSelection();

//             range.selectNodeContents(content);
//             range.collapse(false);

//             selection.removeAllRanges();
//             selection.addRange(range);

//             content.focus();
//         }, 0);
//     };

//     const handleSaveClick = () => {
//         setIsEditMode(false);
//         localStorage.setItem('editedText', editedText);
//     };

//     const handleDiscardClick = () => {
//         setIsEditMode(false);
//         const savedText = localStorage.getItem('editedText');
//         if (savedText) {
//             setEditedText(savedText);
//             localStorage.removeItem('editedText');
//         }
//     };

//     return (
//         <div className='main'>
//             <div className='sidebar'>
//                 <div className='icon-image'>
//                     <img className="logoimage" src={logo} alt="logo" />
//                     <img className='logoname' src={lama} alt="logoname" />
//                 </div>
//                 <div className='cotainerbox'>
//                     <div className='individual-box'>
//                         <p>Prodcast uploads file</p>
//                     </div>
//                     <div className='container-value'>
//                         <div className='values'>Projects</div>
//                         <div className='values'>Widget Configuration</div>
//                         <div className='values'>Deployment</div>
//                         <div className='values'>Pricing</div>
//                     </div>
//                 </div>
//             </div>
//             <div className='rightside-container'>
//                 <div className='header'>
//                     <div className='left'>
//                         <img className="hut" src={home} alt="home" />
//                         <img className='upload' src={upload} alt="upload" />
//                     </div>
//                     <div className='right'>
//                         <img className="downarrow" src={downarrow} alt="down-arrow" />
//                         <img className='EN' src={EN} alt="EN" />
//                         <img className='flag' src={flag} alt="flag" />
//                         <img className='notify' src={notify} alt="notify" />
//                     </div>
//                 </div>
//                 <div className='heading-edit'>
//                 <div className='title-edit'>Edit Transcript</div>
//                     {isEditMode && (
//                         <div className='buttons-edit'>
//                             <button className='discard' onClick={handleDiscardClick}>Discard</button>
//                             <button className='save' onClick={handleSaveClick}>Save</button>
//                         </div>
//                     )}
//                 </div>
                
//                 <div className='edit-box'>
//                     <div className='editheader'>
//                         <button className="editbutton" onClick={handleEditModeClick}>
//                             <img className="pencil" src={pencil} alt="edit" />
//                             <p>Edit Mode</p>
//                         </button>
//                         <img className="search" src={search} alt="search" />
//                     </div>
//                     <div className='editcontent-box'>
//                         <div className='speaker'>
//                             <p>Speaker</p>
//                         </div>
//                         <div
//                             className='editablecontent'
//                             contentEditable={isEditMode}
//                             ref={editableContentRef}
//                             suppressContentEditableWarning={true}
//                             onBlur={(e) => setEditedText(e.target.innerText)}
//                         >
//                             <p>
//                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.

//                                 In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains
//                                 Speaker
//                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.

//                                 In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains
//                                 Speaker
//                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.

//                                 In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Editflow;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import lama from '../../assets/LAMA..png';
import home from '../../assets/home.png';
import upload from '../../assets/Transcript.png';
import downarrow from '../../assets/arrow_drop_down.png';
import EN from '../../assets/EN.png';
import flag from '../../assets/Ellipse 2.png';
import notify from '../../assets/notifications.png';
import pencil from '../../assets/mode.png';
import search from '../../assets/search.png';
import './Editflow.css';

function Editflow() {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedText, setEditedText] = useState('');
    const [originalText, setOriginalText] = useState('');
    const editableContentRef = useRef(null);

    useEffect(() => {
        const savedText = localStorage.getItem('editedText');
        if (savedText) {
            setEditedText(savedText);
            setOriginalText(savedText);
        }
    }, []);

    const handleEditModeClick = () => {
        setIsEditMode(true);
        setTimeout(() => {
            const content = editableContentRef.current;
            const range = document.createRange();
            const selection = window.getSelection();

            range.selectNodeContents(content);
            range.collapse(false);

            selection.removeAllRanges();
            selection.addRange(range);

            content.focus();
        }, 0);
    };

    const handleSaveClick = () => {
        setIsEditMode(false);
        localStorage.setItem('editedText', editedText);
        setOriginalText(editedText);
    };

    const handleDiscardClick = () => {
        setIsEditMode(false);
        setEditedText(originalText);
    };

    const handleTextChange = (e) => {
        setEditedText(e.target.innerText);
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
                        {/* <div className='values'>Widget Configuration</div> */}
                        <Link to="/Configurationflow" className='values'>Widget Configuration</Link>
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
                <div className='heading-edit'>
                    <div className='title-edit'>Edit Transcript</div>
                    {isEditMode && (
                        <div className='buttons-edit'>
                            <button className='discard' onClick={handleDiscardClick}>Discard</button>
                            <button className='save' onClick={handleSaveClick}>Save</button>
                        </div>
                    )}
                </div>

                <div className='edit-box'>
                    <div className='editheader'>
                        <button className="editbutton" onClick={handleEditModeClick}>
                            <img className="pencil" src={pencil} alt="edit" />
                            <p>Edit Mode</p>
                        </button>
                        <img className="search" src={search} alt="search" />
                    </div>
                    <div className='editcontent-box'>
                        <div className='speaker'>
                            <p>Speaker</p>
                        </div>
                        <div
                            className='editablecontent'
                            contentEditable={isEditMode}
                            ref={editableContentRef}
                            suppressContentEditableWarning={true}
                            onBlur={handleTextChange}
                        >
                            {editedText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editflow;
