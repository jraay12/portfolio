import React from "react";

const PdfViewer = ({ fileUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-black text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-100 transition z-10 border-2 border-gray-200"
        >
          ×
        </button>

        {/* PDF Iframe */}
        <div className="w-full h-full p-2">
          <iframe 
            src={fileUrl} 
            width="100%" 
            height="100%" 
            title="PDF Viewer"
            className="rounded-lg"
          >
            This browser does not support inline PDFs. Please download the PDF to
            view it: <a href={fileUrl} className="text-blue-600 underline">Download PDF</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;