import React from 'react'

const PdfUploadModal = ({ isOpen, onClose }) => {
  return (
    <>
        <div className="modalOverlay">
            <div className="modalContent">
            <div className="createUserModalHeadingandBtn">
                    <div className="createUserModalHeading">
                        <h4>Pdf Upload</h4>
                    </div>
                    <div className="createUserModalButton">
                        <button onClick={onClose}>

                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                </div>

                <div className="createUserUploadBulk">
                    

                    <div className="bulk">
                        <div className="bulkicon">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                        </div>

                        <h1>Upload Media</h1>
                        <h2>Drag and Drop or Add Some Files</h2>

                        <button>Upload File from your Device</button>

                        <p>Support Format CSV</p>
                    </div>
                </div>

                <div className="closeDoneBtn">
                    <button onClick={onClose} className="closeBtn">Close</button>
                    <button className='doneBTn'>Done</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PdfUploadModal