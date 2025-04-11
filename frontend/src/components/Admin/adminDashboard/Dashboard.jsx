import React, { useState } from "react";
import "./adminDash.css";
import PeopleGroup from "../../../assest/group.png";
import assignedPage from "../../../assest/assignedpage.png";
import completePage from "../../../assest/completedpage.png";
import timeTaken from "../../../assest/timetaken.png";
import totalRecording from "../../../assest/totalrecording.png";
import pendingPage from "../../../assest/pendingpage.png";
import CreateUserModal from "../../modal/createUserModal/CreateUserModal";

const Dashboard = () => {
  const [rotatedRow, setRotatedRow] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);


  const [showModal, setShowModal] = useState(false);

const handleOpenModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);


  // const handleToggle = (index) => {
  //   setRotatedRow(rotatedRow === index ? null : index);
  // };

  const tableData = [
    {
      name: "Mark",
      assigned: 120,
      completed: 100,
      time: "110hr",
      avg: "1.1 min",
      pending: 20,
      pdf: "Yes",
    },
    {
      name: "Jacob",
      assigned: 90,
      completed: 75,
      time: "80hr",
      avg: "1.2 min",
      pending: 15,
      pdf: "No",
    },
    {
      name: "John",
      assigned: 100,
      completed: 95,
      time: "95hr",
      avg: "1.0 min",
      pending: 5,
      pdf: "Yes",
    },
  ];

  const sampleDetails = [
    {
      pdf: "client_proposal_april2025.pdf",
      page: "12",
      start: "10:00AM",
      end: "11:00AM",
      taken: "1 hr",
      recording: "View",
    },
    {
      pdf: "client_proposal_april2025.pdf",
      page: "13",
      start: "11:00AM",
      end: "12:00PM",
      taken: "1 hr",
      recording: "View",
    },
    {
      pdf: "client_proposal_april2025.pdf",
      page: "13",
      start: "11:00AM",
      end: "12:00PM",
      taken: "1 hr",
      recording: "View",
    },
    {
      pdf: "client_proposal_april2025.pdf",
      page: "13",
      start: "11:00AM",
      end: "12:00PM",
      taken: "1 hr",
      recording: "View",
    },
  ];

  const handleToggleTalbe = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <>
      {/* <div className="container"> */}
      <div className="adminDashboardContainer">
        <div className="adminDashboardTop">
          <div className="adminTopLeft">
            <div className="adminDetailsTopCard">
              <div className="adminDetailsCard">
                <div className="adminDetailsLeft">
                  <h3>Total Users</h3>
                  <h1>1213</h1>
                </div>

                <div className="adminDetailsRight">
                  <img src={PeopleGroup} alt="" />
                </div>
              </div>

              <div className="adminProgessBar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75"></div>
                </div>

                <div className="progessDetails">
                  <h2>30%</h2>
                </div>
              </div>
            </div>

            <div className="adminDetailsTopCard">
              <div className="adminDetailsCard">
                <div className="adminDetailsLeft">
                  <h3>Total Pages Assigned</h3>
                  <h1>1213</h1>
                </div>

                <div className="adminDetailsRight">
                  <img src={assignedPage} alt="" />
                </div>
              </div>
              <div className="adminProgessBar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75"></div>
                </div>

                <div className="progessDetails">
                  <h2>30%</h2>
                </div>
              </div>
            </div>

            <div className="adminDetailsTopCard">
              <div className="adminDetailsCard">
                <div className="adminDetailsLeft">
                  <h3>Total Pages Completed</h3>
                  <h1>1213</h1>
                </div>

                <div className="adminDetailsRight">
                  <img src={completePage} alt="" />
                </div>
              </div>
              <div className="adminProgessBar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75"></div>
                </div>

                <div className="progessDetails">
                  <h2>30%</h2>
                </div>
              </div>
            </div>

            <div className="adminDetailsTopCard">
              <div className="adminDetailsCard">
                <div className="adminDetailsLeft">
                  <h3>Total Time Taken</h3>
                  <h1>1213</h1>
                </div>

                <div className="adminDetailsRight">
                  <img src={timeTaken} alt="" />
                </div>
              </div>
              <div className="adminProgessBar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75"></div>
                </div>

                <div className="progessDetails">
                  <h2>30%</h2>
                </div>
              </div>
            </div>

            <div className="adminDetailsTopCard">
              <div className="adminDetailsCard">
                <div className="adminDetailsLeft">
                  <h3>Total Recordings</h3>
                  <h1>1213</h1>
                </div>

                <div className="adminDetailsRight">
                  <img src={totalRecording} alt="" />
                </div>
              </div>
              <div className="adminProgessBar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75"></div>
                </div>

                <div className="progessDetails">
                  <h2>30%</h2>
                </div>
              </div>
            </div>

            <div className="adminDetailsTopCard">
              <div className="adminDetailsCard">
                <div className="adminDetailsLeft">
                  <h3>Pending Pages</h3>
                  <h1>1213</h1>
                </div>

                <div className="adminDetailsRight">
                  <img src={pendingPage} alt="" />
                </div>
              </div>
              <div className="adminProgessBar">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-75"></div>
                </div>

                <div className="progessDetails">
                  <h2>30%</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="adminTopRight">
            <div className="leaderBoard">
              <div className="leaderBoardHeading">
                <h3>LEADERBOARD</h3>
              </div>

              <div className="leaderBoardHeading">
                <button>View All</button>
              </div>
            </div>

            <div className="adminLeaderTable">
              <table class="table custom-table">
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Pdf Complete</th>
                    <th scope="col">Spend Time</th>
                    <th scope="col">Pages Completed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>25</td>
                    <td>120hr 35min</td>
                    <td>1224</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>25</td>
                    <td>120hr 35min</td>
                    <td>1224</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>John</td>
                    <td>25</td>
                    <td>120hr 35min</td>
                    <td>1224</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* BOTTOM TABLE  */}

        <div className="adminDashBottomTable">
          <div className="adminUserListHeading">
            <h1>USERS LIST</h1>
            <button onClick={handleOpenModal}>Create New User</button>
          </div>

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

          <div className="userProgressTable">
            <table className="table text-center custom-user-table">
              <thead className="table-primary">
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Pages Assigned</th>
                  <th scope="col">Pages Completed</th>
                  <th scope="col">Time Taken</th>
                  <th scope="col">Avg Time/Page</th>
                  <th scope="col">Pending Pages</th>
                  <th scope="col">PDF Completed</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((user, index) => (
                  <React.Fragment key={index}>
                    <tr
                      onClick={() => handleToggleTalbe(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <th scope="row">
                        <div className="d-flex align-items-center justify-content-center gap-2 position-relative">
                          <input type="checkbox" />
                          <i
                            className={`fa-solid fa-caret-down arrow-icon ${
                              expandedRow === index ? "rotate" : ""
                            }`}
                          ></i>
                          <span>{user.name}</span>
                        </div>
                      </th>
                      <td>{user.assigned}</td>
                      <td>{user.completed}</td>
                      <td>{user.time}</td>
                      <td>{user.avg}</td>
                      <td>{user.pending}</td>
                      <td>{user.pdf}</td>
                    </tr>

                    {expandedRow === index && (
  <tr className="expanded-row inner-table">
    <td colSpan="7">
      <div className="inner-table-wrapper">
        <table className="table table-bordered inner-table mb-0">
          <thead className="table-secondary">
            <tr>
              <th>PDF</th>
              <th>Page Name</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Time Taken</th>
              <th>Recording</th>
            </tr>
          </thead>
          <tbody>
            {sampleDetails.map((detail, idx) => (
              <tr key={idx}>
                <td>{detail.pdf}</td>
                <td>{detail.page}</td>
                <td>{detail.start}</td>
                <td>{detail.end}</td>
                <td>{detail.taken}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </td>
  </tr>
)}

                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="adminDashUserTablePage">
            <div className="adminDashUserTableLeft">
              <h3>
                Showing<span> 1-20</span> of<span> 124</span> Result
              </h3>
            </div>

            <div className="admiDashUserTableRight">
              <nav aria-label="Page navigation example">
                <ul class="pagination custom-pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>

                  <li class="page-item">
                    <a class="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      4
                    </a>
                  </li>

                  <li class="page-item disabled">
                    <a class="page-link" href="#">
                      ...
                    </a>
                  </li>

                  <li class="page-item">
                    <a class="page-link" href="#">
                      40
                    </a>
                  </li>

                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <CreateUserModal isOpen={showModal} onClose={handleCloseModal} /> */}
      {showModal && <CreateUserModal onClose={handleCloseModal} />}


    </>
  );
};

export default Dashboard;
