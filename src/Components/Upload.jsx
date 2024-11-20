// import React, { useEffect, useState } from 'react';
// import './upload.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePdf, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { pdfjs } from 'react-pdf';
// import PdfComp from './PdfComp';

// // Use CDN for the worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// const Upload = () => {
//     const [title, setTitle] = useState('');
//     const [file, setFile] = useState(null);
//     const [allFiles, setAllFiles] = useState([]);
//     const [pdfFiles, setPdfFiles] = useState(null);
//     const [showModal, setShowModal] = useState(false); // State to control the modal visibility

//     useEffect(() => {
//         getFiles();
//     }, []);

//     const getFiles = async () => {
//         try {
//             const result = await axios.get("http://localhost:5000/get-files");
//             setAllFiles(result.data.data);
//         } catch (error) {
//             console.error('Error fetching files:', error);
//         }
//     };

//     const submitFile = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('file', file);

//         try {
//             await axios.post('http://localhost:5000/upload-files', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             getFiles(); // Refresh the file list after upload
//         } catch (error) {
//             console.error('Error uploading file:', error);
//         }
//     };

//     const showPdf = (pdf) => {
//         setPdfFiles(`http://localhost:5000/files/${pdf}`);
//         setShowModal(true); // Open the modal
//     };

//     const closeModal = () => {
//         setShowModal(false); // Close the modal
//         setPdfFiles(null); // Clear the PDF file
//     };

//     const deletePdf = async (id) => {
//         try {
//             await axios.delete(`http://localhost:5000/delete-file/${id}`);
//             getFiles(); // Refresh the file list after deletion
//         } catch (error) {
//             console.error('Error deleting file:', error);
//         }
//     };

//     return (
//         <div className='upload'>
//             <form className='formStyle' onSubmit={submitFile}>
//                 <h4 className='mb-2 font-medium'>Upload your documents here</h4>
//                 <hr />
//                 <input
//                     className='form-control mt-4 text-sm'
//                     type='text'
//                     placeholder='File / Document Name'
//                     required
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <input
//                     className='form-control my-4 text-sm'
//                     type='file'
//                     id='formFile'
//                     accept='application/pdf'
//                     required
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />
//                 <hr />
//                 <button
//                     className='btn btn-secondary text-xs mt-2 rounded-full px-4 py-2'
//                     type='submit'
//                 >
//                     Upload
//                 </button>
//             </form>

//             <div className='uploaded mt-2'>
//                 <h4 className='text-center mb-2 '>Documents</h4>
//                 <hr />
//                 <div className='output-div flex gap-10'>
//                     {allFiles.length === 0
//                         ? "No files uploaded yet"
//                         : allFiles.map((data) => (
//                             <div className='inner-div flex gap-2 justify-center items-center mt-3' key={data._id}>
//                                 <button className='btn view' onClick={() => showPdf(data.pdf)}>
//                                     <FontAwesomeIcon icon={faFilePdf} className='iconView' />
//                                 </button>
//                                 <div className='flex flex-col items-center'>
//                                     <h6 className='capitalize text-sm '>{data.title}</h6>
//                                     <button className='btn delete' onClick={() => deletePdf(data._id)}>
//                                         <FontAwesomeIcon icon={faTrash} className='iconDelete text-red-700' />
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//             </div>

//             {/* Modal for PDF View */}
//             {showModal && (
//                 <div className='modal-overlay'>
//                     <div className='modal-content'>
//                         <button className='close-button' onClick={closeModal}>
//                             <FontAwesomeIcon icon={faTimes} />
//                         </button>
//                         <PdfComp pdfFiles={pdfFiles} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Upload;
