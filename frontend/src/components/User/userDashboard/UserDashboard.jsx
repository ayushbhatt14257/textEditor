import React, { useState } from "react";
import "./userDash.css";
import completePage from "../../../assest/completedpage.png";
import assignedPage from "../../../assest/assignedpage.png";
import timeTaken from "../../../assest/timetaken.png";
import PngLogo from "../../../assest/pnglogo.png";
import completeImg from "../../../assest/comimg.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserDashboard = () => {
  const percentage = 66;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const pdfs = [
    {
      title: "Client_Proposal_April2025.pdf",
      pageInfo: "120 Pages | 01:20:00",
      percentage: 70,
      logo: PngLogo,
      completeImg: completeImg,
    },
    {
      title: "Client_Proposal_April2025.pdf",
      pageInfo: "120 Pages | 01:20:00",
      percentage: 70,
      logo: PngLogo,
      completeImg: completeImg,
    },
    {
      title: "Client_Proposal_April2025.pdf",
      pageInfo: "120 Pages | 01:20:00",
      percentage: 90,
      logo: PngLogo,
      completeImg: completeImg,
    },
    {
      title: "Client_Proposal_April2025.pdf",
      pageInfo: "120 Pages | 01:20:00",
      percentage: 40,
      logo: PngLogo,
      completeImg: completeImg,
    },
    {
      title: "Client_Proposal_April2025.pdf",
      pageInfo: "120 Pages | 01:20:00",
      percentage: 20,
      logo: PngLogo,
      completeImg: completeImg,
    },
    // more items
  ];

  const data = [
    { day: "Mon", value: 5 },
    { day: "Tues", value: 10 },
    { day: "Wed", value: 7 },
    { day: "Thurs", value: 12 },
    { day: "Fri", value: 8 },
    { day: "Sat", value: 15 },
    { day: "Sun", value: 10 },
  ];

  return (
    <div>
      <div className="userDashboard">
        <div className="topUserCards">
          <div className="userDetailsTopCard">
            <div className="adminDetailsLeft">
              <h3>Total Users</h3>
              <h1>1213</h1>
            </div>

            <div className="adminDetailsRight">
              <img src={completePage} alt="" />
            </div>
          </div>
          <div className="userDetailsTopCard">
            <div className="adminDetailsLeft">
              <h3>Total Users</h3>
              <h1>1213</h1>
            </div>

            <div className="adminDetailsRight">
              <img src={assignedPage} alt="" />
            </div>
          </div>
          <div className="userDetailsTopCard">
            <div className="adminDetailsLeft">
              <h3>Total Users</h3>
              <h1>1213</h1>
            </div>

            <div className="adminDetailsRight">
              <img src={assignedPage} alt="" />
            </div>
          </div>
          <div className="userDetailsTopCard">
            <div className="adminDetailsLeft">
              <h3>Total Users</h3>
              <h1>1213</h1>
            </div>

            <div className="adminDetailsRight">
              <img src={timeTaken} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="userDashBottom">
        <div className="recentPdfListing">
          <div className="recentPdfHeading">
            <div className="pdfHeadingText">
              <h1>RECENT PDF LISTING(10)</h1>
            </div>
            <div className="pdfHeadingBtn">
              <button>View All</button>
            </div>
          </div>

          {/* <div className="pdfListingMain">
            <div className="pdfListingCard">
              <div className="pdfListingLeftarrow">
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div className="pdfLogo">
                <img src={PngLogo} alt="" />
              </div>
              <div className="pdfClientProposal">
                <div className="clientProposalHeading">
                  <h1>Client_Proposal_April2025.pdf</h1>
                </div>
                <div className="pdfListingPages">
                  <div className="pdfPageCount">
                    <h4>120 Pages | 01:20:00</h4>
                  </div>
                </div>
              </div>
              <div className="userDashProgessBar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>

            <div className="userpdfListCompleteDetails">

              <div className="userPdfupperPages">
                <div className="upperPagesLeft">
                  <div className="numberpageComplete">
                    <h3>25</h3>
                  </div>
                  <div className="pagesCompletedText">
                    <h3>Completed Pages</h3>
                  </div>
                </div>

                <div className="pagesCompletedImage">
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="userPdfupperPages">
                <div className="upperPagesLeft">
                  <div className="numberpageComplete">
                    <h3>25</h3>
                  </div>
                  <div className="pagesCompletedText">
                    <h3>Completed Pages</h3>
                  </div>
                </div>

                <div className="pagesCompletedImage">
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pdfListingMain">
            <div className="pdfListingCard">
              <div className="pdfListingLeftarrow">
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div className="pdfLogo">
                <img src={PngLogo} alt="" />
              </div>
              <div className="pdfClientProposal">
                <div className="clientProposalHeading">
                  <h1>Client_Proposal_April2025.pdf</h1>
                </div>
                <div className="pdfListingPages">
                  <div className="pdfPageCount">
                    <h4>120 Pages | 01:20:00</h4>
                  </div>
                </div>
              </div>
              <div className="userDashProgessBar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>

            <div className="userpdfListCompleteDetails">

              <div className="userPdfupperPages">
                <div className="upperPagesLeft">
                  <div className="numberpageComplete">
                    <h3>25</h3>
                  </div>
                  <div className="pagesCompletedText">
                    <h3>Completed Pages</h3>
                  </div>
                </div>

                <div className="pagesCompletedImage">
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="userPdfupperPages">
                <div className="upperPagesLeft">
                  <div className="numberpageComplete">
                    <h3>25</h3>
                  </div>
                  <div className="pagesCompletedText">
                    <h3>Completed Pages</h3>
                  </div>
                </div>

                <div className="pagesCompletedImage">
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                  <div className="comImg">
                    <img src={completeImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div>
            {pdfs.map((pdf, index) => (
              <div className="pdfListingMain" key={index}>
                <div
                  className="pdfListingCard"
                  onClick={() => toggleDetails(index)}
                >
                  <div className="pdfListingLeftarrow">
                    <i
                      className={`fa-solid ${
                        openIndex === index ? "fa-angle-up" : "fa-angle-down"
                      }`}
                    ></i>
                  </div>
                  <div className="pdfLogo">
                    <img src={pdf.logo} alt="" />
                  </div>
                  <div className="pdfClientProposal">
                    <div className="clientProposalHeading">
                      <h1>{pdf.title}</h1>
                    </div>
                    <div className="pdfListingPages">
                      <div className="pdfPageCount">
                        <h4>{pdf.pageInfo}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="userDashProgessBar">
                    <CircularProgressbar
                      value={pdf.percentage}
                      text={`${pdf.percentage}%`}
                    />
                  </div>
                </div>

                {openIndex === index && (
                  <div className="userpdfListCompleteDetails">
                    {[...Array(2)].map((_, i) => (
                      <div className="userPdfupperPages" key={i}>
                        <div className="upperPagesLeft">
                          <div className="numberpageComplete">
                            <h3>25</h3>
                          </div>
                          <div className="pagesCompletedText">
                            <h3>Completed Pages</h3>
                          </div>
                        </div>
                        <div className="pagesCompletedImage">
                          {[...Array(4)].map((_, j) => (
                            <div className="comImg" key={j}>
                              <img src={pdf.completeImg} alt="" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="leaderBoard-and-graph">
          <div className="userDashLeaderBoard">
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
                    <tr className="highlight-row">
                      <th scope="row">25</th>
                      <td>You</td>
                      <td>25</td>
                      <td>120hr 35min</td>
                      <td>1224</td>
                    </tr>
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

          <div className="userDashAvgTimeGraph">
            <div className="graphHeading">
              <h4>Average Time/Page</h4>
              <h1>4 hour</h1>
            </div>

            <div className="graph">
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis ticks={[0, 5, 10, 15, 20]} domain={[0, 20]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#00c49f"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
