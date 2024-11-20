// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// function PdfComp(props) {
//     const [numPages, setNumPages] = useState();
//     const [pageNumber, setPageNumber] = useState();

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (
//         <div>
//             <Document file={props.pdfFiles} onLoadSuccess={onDocumentLoadSuccess}>
//                 {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page) => (
//                     <Page
//                         key={`page_${page}`} // Unique key added here
//                         pageNumber={page}
//                         renderTextLayer={false}
//                         renderAnnotationLayer={false}
//                     />
//                 ))}
//             </Document>
//             <p>
//                 Page {pageNumber} of {numPages}
//             </p>
//         </div>
//     );
// }

// export default PdfComp;
