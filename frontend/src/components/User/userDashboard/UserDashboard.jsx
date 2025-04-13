import React, { useState, useEffect } from "react";
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
  const [userStats, setUserStats] = useState({});
  const [pdfList, setPdfList] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  

  const toggleDetails = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      const access_token = localStorage.getItem("access_token");
      try {
        const [statsRes, pdfRes, leaderboardRes] = await Promise.all([
          fetch("http://51.20.246.38:5000/api/userdashboard", {
            method: "GET",
           // mode: 'no-cors',
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }),
          fetch('http://51.20.246.38:5000/api/documentlist',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${access_token}`
            }
          }),
          fetch("http://51.20.246.38:5000/api/top_users", {
            method: "GET",
          //  mode: 'no-cors',
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }),
        ]);
  
        const [stats,pdf, leaderboard] = await Promise.all([
          statsRes.json(),
          pdfRes.json(),
          leaderboardRes.json(),
        ]);
  
        setUserStats(stats);
        setPdfList(pdf);
        setLeaderboard(leaderboard);
      } catch (err) {
        console.error("Dashboard data fetch failed", err);
      }
    };
    fetchDashboardData();
  }, []);

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
              <h3>Total Pages Completed</h3>
              <h1>{userStats.pages_completed}</h1>
            </div>

            <div className="adminDetailsRight">
              <img src={completePage} alt="" />
            </div>
          </div>
          <div className="userDetailsTopCard">
            <div className="adminDetailsLeft">
              <h3>Total Pages Assigned</h3>
              <h1>{userStats.total_pages}</h1>
            </div>

            <div className="adminDetailsRight">
              <img src={assignedPage} alt="" />
            </div>
          </div>
          <div className="userDetailsTopCard">
            <div className="adminDetailsLeft">
              <h3>Total Pages Left</h3>
              <h1>{userStats.pages_left}</h1>
            </div>

            <div className="adminDetailsRight">
              <img src={assignedPage} alt="" />
            </div>
          </div>
          <div className="userDetailsTopCard">
            <div className="adminDetailsLeft">
              <h3>Total Time Taken</h3>
              <h1>{userStats.total_transcription_time}</h1>
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
              <h1>{`RECENT PDF LISTING(${pdfList[0]?.pdf_info.length})`}</h1>
            </div>
            <div className="pdfHeadingBtn">
              <button>View All</button>
            </div>
          </div>

          <div>
            {Array.isArray(pdfList[0]?.pdf_info) && pdfList[0]?.pdf_info?.map((pdf, index) => (
              
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
                    <img src={PngLogo} alt="" />
                  </div>
                  <div className="pdfClientProposal">
                    <div className="clientProposalHeading">
                      <h1>{pdf.document_name}</h1>
                    </div>
                    <div className="pdfListingPages">
                      <div className="pdfPageCount">
                        <h4>{`${pdf.pages_info?.length} pages assigned`}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="userDashProgessBar">
                    <CircularProgressbar
                      value={(pdf.pages_completed/ pdf.pages_left)/100}
                      text={`${(pdf.pages_completed/ pdf.pages_left)/100}%`}
                    />
                  </div>
                </div>

                {openIndex === index && (
                  <div className="userpdfListCompleteDetails">
                    {[...Array(2)].map((_, i) => (
                      <div className="userPdfupperPages" key={i}>
                        <div className="upperPagesLeft">
                          <div className="numberpageComplete">
                            <h3>{i === 0 ? pdf?.pages_info?.filter(page => page.page_s3_url !== null).length : pdf?.pages_info?.filter(page => page.transcripted_pdf_s3 !== null).length}</h3>
                          </div>
                          <div className="pagesCompletedText">
                            <h3>{i === 0 ? 'Completed Pages' : 'Pending Pages'}</h3>
                          </div>
                        </div>
                        <div className="pagesCompletedImage">
                          {i === 0 ? pdf?.pages_info?.map((_, j) => (
                            <div className="comImg" key={j}>
                              <img src={_.page_s3_url} alt="" />
                            </div>
                          )) : pdf?.pages_info?.map((_, j) => (
                            <div className="comImg" key={j}>
                              <img src={_.transcripted_pdf_s3} alt="" />
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
                    {leaderboard.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{user.rank}</th>
                        <td>{user.username}</td>
                        <td>{user.total_pages - user.pending_pages}</td>
                        <td>{user.total_time}</td>
                        <td>{user.completed_pages}</td>
                      </tr>
                    ))}
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
