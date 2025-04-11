import React from "react";
import "./textEditor.css";
import PageImg from "../../../assest/Rectangle.png";

const TextEditor = () => {
  return (
    <div className="textEditorContainer">
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

      <div className="image-and-textEditor">
        <div className="textEditorleftImg">
          <div className="leftEditorTop">
            <div className="edtiorTotalPage">
              <h4>Total Page</h4>
              <h4>50</h4>
            </div>
            <div className="editorPages">
              <h4>Pending Page</h4>
              <h4 className="front">25</h4>
            </div>
            <div className="editorPages">
              <h4>Completed Page</h4>
              <h4 className="front2">25</h4>
            </div>
          </div>

          <div className="textEditorLeftFilter">
            <h4>Filter</h4>
            <i class="fa-solid fa-filter"></i>
          </div>

          <div className="textEditorLeftPageListing">
            <div className="imgListing">
              <img src={PageImg} alt="" />
              <h4>Page 1</h4>
            </div>
            <div className="imgListing">
              <img src={PageImg} alt="" />
              <h4>Page 1</h4>
            </div>
            <div className="imgListing">
              <img src={PageImg} alt="" />
              <h4>Page 1</h4>
            </div>
          </div>
        </div>

        <div className="textEditorImgMiddle">
          <div className="middleTextEditorImg">
            <img src={PageImg} alt="" />
          </div>
          <div className="middleTextPageNO">
            <i class="fa-solid fa-angle-left"></i>
            <h4>Page 4</h4>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>

        <div className="textEditorContentRight">
          <div className="editorContainer">
            <h4>Typography</h4>
            {/* First Row: Typography controls */}
            <div className="editorTopControls">
              <div className="editorTypography">
                    <select className="fullWidth">
                        <option>Crimson Text</option>
                        <option>Roboto</option>
                        <option>Arial</option>
                    </select>
                    <select className="fullWidth">
                        <option>Regular</option>
                        <option>Bold</option>
                        <option>Italic</option>
                    </select>
              </div>

              {/* Second Row: Text formatting controls */}
              <div className="editorFormattingRow">
                <select className="fontSizeSelect">
                  <option>14</option>
                  <option>16</option>
                  <option>18</option>
                </select>

                <div className="editorFormatting">
                  <select className="fontSizeSelect">
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                  </select>
                </div>
                <div className="editorFormatting2">
                  <div className="bullet">
                    <i class="fa-solid fa-list-ul"></i>
                  </div>
                  <div className="list">
                    <i class="fa-solid fa-list-ol"></i>
                  </div>
                </div>
                <div className="editorFormatting2">
                    <div className="textStyle">
                        <i class="fa-solid fa-bold"></i>
                    </div>
                    <div className="textStyle">
                        <i class="fa-solid fa-italic"></i>
                    </div>
                    <div className="textStyle">
                        <i class="fa-solid fa-underline"></i>
                    </div>
                    <div className="textStyle">
                        <i class="fa-solid fa-strikethrough"></i>
                    </div>
                </div>

                <div className="editorFormatting2">
                  <div className="textclor">
                    <i class="fa-solid fa-t"></i>
                  </div>
                  <div className="textColorBox">
                    {/* <i class="fa-solid fa-list-ol"></i> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="editorImageUpload">
              <p>
                <strong>Drag & drop files</strong> or{" "}
                <span className="browse">Browse</span>
              </p>
              <p className="formats">Supported formats: JPEG, PNG</p>
            </div>

            {/* Text Area */}
            <div className="editorTextArea">
              <textarea placeholder="Start Typing or Speaking..."></textarea>
            </div>
          </div>
          <div className="textEditorBtn">
            <button>Start Recording</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
