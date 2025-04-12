import React, { useRef, useState, useMemo } from "react";
import "./textEditor.css";
import PageImg from "../../../assest/Rectangle.png";
import JoditEditor from "jodit-react";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  //   const config = useMemo(() => ({
  //     readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //     placeholder: placeholder || 'Start typings...'
  //   }),
  //   [placeholder]
  // );

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

      <div className="textEditorMiddle">
        <div className="textEditorleftImg">
          <div className="middleLeft">
            <div className="textEditorLeftFilter">
              <h4>Filter</h4>
              <i class="fa-solid fa-filter"></i>
            </div>
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
          </div>

          <div className="middleRight">
            <div className="scrollWrapper">
              {" "}
              {/* NEW wrapper */}
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
          </div>
        </div>
      </div>

      <div className="image-and-textEditor">
        
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

            <JoditEditor
              ref={editor}
              value={content}
              // config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
              width='50%'

            />



            {/* Image Upload Section */}
            <div className="editorImageUpload">
              <p>
                <strong>Drag & drop files</strong> or{" "}
                <span className="browse">Browse</span>
              </p>
              <p className="formats">Supported formats: JPEG, PNG</p>
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
