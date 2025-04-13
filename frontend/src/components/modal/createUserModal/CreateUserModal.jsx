import React, { useState } from "react";
import "./modal.css";

const CreateUserModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [csvFile, setCsvFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
  };

  const handleButtonClick = () => {
    document.getElementById("csvUpload").click(); // Trigger file input click
  };

  const handleCreateUser = async () => {
    setLoading(true);
    const access_token = localStorage.getItem("access_token");

    try {
      // If CSV file is selected, upload bulk users
      if (csvFile) {
        const formData = new FormData();
        formData.append("file", csvFile);

        const res = await fetch("http://51.20.246.38:5000/api/add_users_bulk", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          body: formData,
        });

        const data = await res.json();

        if (res.ok) {
          alert("Bulk users uploaded successfully!");
          setCsvFile(null);
          setUsername("");
          setPassword("");
          onClose();
        } else {
          alert(data?.message || "Failed to upload CSV");
        }

        return;
      }

      // No CSV? Proceed with manual user creation
      if (!username || !password) {
        alert("Please fill both fields");
        return;
      }

      const res = await fetch("http://51.20.246.38:5000/api/add_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("User created successfully!");
        setUsername("");
        setPassword("");
        onClose();
      } else {
        alert(data?.message || "Failed to create user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setCsvFile(null); // Clear uploaded file
    onClose();        // Call parent onClose
  };


  if (!isOpen) return null;

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
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
          </div>
          <hr />
          <div className="createUserForm">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="createUserFromInput">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={!!csvFile} // Disable if CSV selected
                />
              </div>
              <div className="createUserFromInput">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={!!csvFile} // Disable if CSV selected
                />
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
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>

              <h1>Upload Media</h1>
              <h2>Drag and Drop or Add Some Files</h2>

              <input
                id="csvUpload"
                type="file"
                accept=".csv"
                style={{ display: "none" }} // Hide the file input
                onChange={handleFileChange}
              />

              {/* Button to trigger file input */}
              <label htmlFor="csvUpload">
                <button
                  onClick={handleButtonClick}
                  disabled={loading}
                  type="button"
                >
                  {loading ? "Uploading..." : "Upload File from your Device"}
                </button>
              </label>

              {csvFile && <p className="selectedFileName">{csvFile.name}</p>}
              <p>Support Format: CSV</p>
            </div>
          </div>

          <div className="closeDoneBtn">
            <button onClick={handleClose} className="closeBtn">
              Close
            </button>
            <button
              onClick={handleCreateUser}
              className="doneBTn"
              disabled={loading}
            >
              {loading ? "Processing..." : "Done"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUserModal;
