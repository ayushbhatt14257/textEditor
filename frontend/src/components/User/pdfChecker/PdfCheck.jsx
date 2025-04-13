import React from "react";
import "./pdfcheck.css";
import pdfImg from "../../../assest/Rectangle.png";

const PdfCheck = () => {
  return (
    <>
      <div className="pdfCheckContainer">
        <div className="textEditorTop">
          <div className="textEditorTopLeft">
            <i class="fa-solid fa-angle-left"></i>
            <h3>Client_Proposal_April2025.pdf</h3>
          </div>
          <div className="editorTopRightBtn">
            <button className="save">Save</button>
            <button className="done">Done</button>
          </div>
        </div>

        <hr />

        <div className="pdfCheckPagesDetails">
          <div className="pdfCheckPagesDetailsLeft">
            <div className="pdfCheckTotalPage">
              <h3>Total Page :</h3>
              <h2>210</h2>
            </div>
            <div className="pdfCheckTotalPage">
              <h3>Unchecked Pages :</h3>
              <h2>150</h2>
            </div>
            <div className="pdfCheckTotalPage">
              <h3>Checked Pages :</h3>
              <h2>60</h2>
            </div>
          </div>
          <div className="pdfCheckPagesDetailsRight">
            <div className="search-box">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <div className="mainCheckContainer">
          <div className="status">

            <div className="ceckerCheckbox">
              <div className="openo">
                <span className="online"></span>
              </div>
              <h2>Completed</h2>
            </div>
            <div className="ceckerCheckbox">
              <div className="offlineo">
                <span className="offline"></span>
              </div>
                  <h2>Pending</h2>
            </div>
          </div>
          <div className="checkContainer">
            <div className="checkContainerCard">
              <div className="ceckerCheckbox">
                <div className="open">
                  <span className="online"></span>
                </div>
              </div>

              <div className="checkerPdfImg">
                <img src={pdfImg} alt="" />
              </div>

              <div className="checkerpagetext">
                <h4>Page1</h4>
              </div>
            </div>
            <div className="checkContainerCard">
              <div className="ceckerCheckbox">
                <div className="ceckerCheckbox">
                  <div className="offline">
                    <span className="offline"></span>
                  </div>
                </div>
              </div>

              <div className="checkerPdfImg">
                <img src={pdfImg} alt="" />
              </div>

              <div className="checkerpagetext">
                <h4>Page1</h4>
              </div>
            </div>
            <div className="checkContainerCard">
              <div className="ceckerCheckbox">
                <div className="ceckerCheckbox">
                  <div className="open">
                    <span className="online"></span>
                  </div>
                </div>
              </div>

              <div className="checkerPdfImg">
                <img src={pdfImg} alt="" />
              </div>

              <div className="checkerpagetext">
                <h4>Page1</h4>
              </div>
            </div>
            <div className="checkContainerCard">
              <div className="ceckerCheckbox">
                <div className="ceckerCheckbox">
                  <div className="offline">
                    <span className="online"></span>
                  </div>
                </div>
              </div>

              <div className="checkerPdfImg">
                <img src={pdfImg} alt="" />
              </div>

              <div className="checkerpagetext">
                <h4>Page1</h4>
              </div>
            </div>
            <div className="checkContainerCard">
              <div className="ceckerCheckbox">
                <div className="ceckerCheckbox">
                  <div className="offline">
                    <span className="offline"></span>
                  </div>
                </div>
              </div>

              <div className="checkerPdfImg">
                <img src={pdfImg} alt="" />
              </div>

              <div className="checkerpagetext">
                <h4>Page1</h4>
              </div>
            </div>
            <div className="checkContainerCard">
              <div className="ceckerCheckbox">
                <div className="ceckerCheckbox">
                  <div className="offline">
                    <span className="online"></span>
                  </div>
                </div>
              </div>

              <div className="checkerPdfImg">
                <img src={pdfImg} alt="" />
              </div>

              <div className="checkerpagetext">
                <h4>Page1</h4>
              </div>
            </div>
            <div className="checkContainerCard">
              <div className="ceckerCheckbox">
                <div className="ceckerCheckbox">
                  <div className="open">
                    <span className="online"></span>
                  </div>
                </div>
              </div>

              <div className="checkerPdfImg">
                <img src={pdfImg} alt="" />
              </div>

              <div className="checkerpagetext">
                <h4>Page1</h4>
              </div>
            </div>
            <div className="checkContainerCard">
              <div className="ceckerCheckbox">
                <div className="ceckerCheckbox">
                  <div className="offline">
                    <span className="offline"></span>
                  </div>
                </div>
              </div>

              <div className="checkerPdfImg">
                <img src={pdfImg} alt="" />
              </div>

              <div className="checkerpagetext">
                <h4>Page1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfCheck;
