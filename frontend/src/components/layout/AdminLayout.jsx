import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import './adminLayout.css';
import logo from "../../assest/Logo.png";
import active from "../../assest/active.png";
import bag from "../../assest/bag.png";
import person from "../../assest/person.png";
import setting from "../../assest/setting.png";
import notification from "../../assest/Notification.png";
import profile from "../../assest/profile.png";
import PdfUploadModal from '../modal/pdfUploadModal/PdfUploadModal';

const AdminLayout = () => {

  const [showModal, setShowModal] = useState(false);
  
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* <div className="container"> */}
        <div className="adminLayoutContainer">
          {/* Sidebar */}
          <div className="sideBar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="sideNavigation">
              <div className="navItem">
                <img src={active} alt="" />
              </div>
              <div className="navItem">
                <img src={bag} alt="" />
              </div>
              <div className="navItem">
                <button onClick={handleOpenModal}>

                  <img src={person} alt="" />
                </button>
              </div>
              <div className="navItem">
                <img src={setting} alt="" />
              </div>
            </div>
          </div>

          {/* Right section: Topbar + Page content */}
          <div className="rightSection">
            <div className="topBar">
              <div className="topNavBar">
                <div className="topNavLeft">
                  <h3>Dashboard</h3>
                </div>
                <div className="topNavRight">
                  <div className="bell">
                    <img src={notification} alt="" />
                  </div>
                  <div className="userPhoto">
                    <img src={profile} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* This is where child routes like Dashboard, AddUser, etc will be rendered */}
            <div className="mainContent">
              <Outlet />
            </div>
          </div>
        </div>
        {/* {showModal && <PdfUploadModal onClose={handleCloseModal} />} */}
      <PdfUploadModal isOpen={showModal} onClose={handleCloseModal} />

      {/* </div> */}
    </>
  );
};

export default AdminLayout;
