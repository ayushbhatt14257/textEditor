import React from 'react'
import './modal.css'

const CreateUserModal = ({ isOpen, onClose }) => {
  return (
    <>
        <div className="modalOverlay">
            <div className="modalContent">
                <div className="createUserModalHeadingandBtn">
                    <div className="createUserModalHeading">
                        <h4>Create New User</h4>
                    </div>
                    <div className="createUserModalButton">
                        <button onClick={onClose}>

                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                </div>
                <hr />
                <div className="createUserForm">
                    <form action="">
                        <div className="createUserFromInput">
                            <label htmlFor="">Username</label>
                            <input type="text" name="" id="" placeholder='Enter Name'/>
                        </div>
                        <div className="createUserFromInput">
                            <label htmlFor="">Username</label>
                            <input type="password" name="" id="" placeholder='Enter Password'/>
                        </div>
                    </form>
                </div>

                <div className="createUserOr">
                    <h1>OR</h1>
                </div>

                <div className="createUserUploadBulk">
                    <div className="createUserUploadBulkHeading">
                        <h4>Upload Bulk User</h4>
                    </div>

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

export default CreateUserModal