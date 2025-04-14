import React from "react";
import "./pdfpages.css";
import logo from "../../../assest/pnglogo.png";
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const PdfPages = () => {
    const navigate = useNavigate();

const handleCardClick = () => {
  navigate('/pdf-check');
};

  return (
    <>
      <div className="pdfContainer">
        <div className="textEditorTop">
          <div className="textEditorTopLeft">
            {/* <i class="fa-solid fa-angle-left"></i> */}
            <i
          className="fa-solid fa-angle-left"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(-1)} // Goes to the previous page
        ></i>

            <h3>Client_Proposal_April2025.pdf</h3>
          </div>
          <div className="editorTopRightBtn"></div>
        </div>

        <hr />

        <div className="useTableSearch">
          <div className="search-box">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <div className="userListFilter">
            <div className="filter">
              <div className="filterheading">
                <h3>Filter</h3>
              </div>
              <div className="filterLogo">
                <i class="fa-solid fa-filter"></i>
              </div>
            </div>

            <div className="sortby">
              <div className="shortbyHeading">
                <h3>Short By</h3>
              </div>

              <div className="shortByLogo">
                <h3>Relevance</h3>
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="pdfMainGrid">
            
            <div className="pdfcard" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>30 pages</h4></div>
                    <div className="pdfTime"><h4>30 Min</h4></div>
                </div>
            </div>
            <div className="pdfcard" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>30 pages</h4></div>
                    <div className="pdfTime"><h4>57 Min</h4></div>
                </div>
            </div>
            
            {/* <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div> */}
            {/* <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div>
            <div className="pdfcard">
                <div className="pdfLogo">
                    <img src={logo} alt="" />
                </div>
                <div className="pdfName">
                    <h2>Client_Proposal_April2025.pdf</h2>
                </div>
                <div className="pdfDetails">
                    <div className="pdfPages"><h4>120 pages</h4></div>
                    <div className="pdfTime"><h4>01:20:00</h4></div>
                </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default PdfPages;
