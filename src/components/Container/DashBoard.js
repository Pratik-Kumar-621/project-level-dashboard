import React from "react";
import BarDetail from "../Reusable/BarDetail";
import Heading from "../Reusable/Heading";

const DashBoard = () => {
  const dashBoardData = {
    admin: "Danny D",
    timeline: "8 Jan-28 Jan '23",
    status: "In Progress",
    teamMembers: [
      "Dinesh",
      "Ramesh",
      "Suresh",
      "Mohan",
      "Sohan",
      "Raman",
      "Jhon Doe",
    ],
    checkList: {
      notStarted: 12,
      delayed: 28,
      inProgress: 16,
      completed: 10,
    },
    task: {
      notStarted: 16,
      delayed: 18,
      inProgress: 25,
      completed: 8,
    },
    dependency: {
      notStarted: 8,
      delayed: 27,
      inProgress: 9,
      completed: 22,
    },
    observation: {
      notStarted: 29,
      delayed: 23,
      inProgress: 7,
      completed: 3,
    },
  };

  return (
    <div className="dashboard_main">
      <div className="bottom_buttons">
        <button type="button" class="btn btn-danger">
          <img src="./images/task.png" alt="chat" />
        </button>
        <button type="button" class="btn btn-primary">
          <img src="./images/chat.png" alt="chat" />
        </button>
      </div>
      <div className="dashboard_head">
        <div className="dashboard_heading">
          <Heading heading="Project Level Dashboard" />
          <div className="heading_sub">Home</div>
        </div>
        <div className="dashboard_timeline">
          <div className="timeline_value">
            Timeline : {dashBoardData.timeline}
          </div>
          <div className="timeline_status">
            Status:
            <span
              className={`${
                dashBoardData.status === "In Progress"
                  ? "in_progress"
                  : dashBoardData.status === "Not Started"
                  ? "not_started"
                  : "completed"
              }`}
            >
              {dashBoardData.status}
            </span>
          </div>
        </div>
      </div>
      <div className="dashboard_team">
        <div className="team_admin">
          <span>Project Admin: </span>
          {dashBoardData.admin}
        </div>
        <div className="team_members">
          <span>Team Members: </span>
          <div className="team_indiv">
            {dashBoardData.teamMembers.map((item, count) => (
              <>
                {count < 3 && (
                  <div
                    className="teams"
                    style={{ zIndex: dashBoardData.teamMembers.length - count }}
                  >
                    {item[0]}
                  </div>
                )}
              </>
            ))}
          </div>
          {dashBoardData.teamMembers.length > 3 && (
            <div className="team_count">
              +{dashBoardData.teamMembers.length - 3}
            </div>
          )}
        </div>
        <div className="team_add">
          <button
            type="button"
            class="btn btn-outline-primary"
            data-mdb-ripple-color="dark"
          >
            Add Team Members
          </button>
        </div>
      </div>
      <div className="seperator_dashboard"></div>
      <div className="dashboard_summary">
        <div className="summary_type">
          <div className="summary_item">
            Not Started <div className="not_started"></div>
          </div>
          <div className="summary_item">
            Delayed <div className="delayed"></div>
          </div>
          <div className="summary_item">
            In Progress <div className="in_progress"></div>
          </div>
          <div className="summary_item">
            Completed <div className="completed"></div>
          </div>
        </div>
        <div className="summary_content">
          <div className="content_item">
            <div className="content_item_name">Checklist</div>
            <BarDetail data={dashBoardData.checkList} />
          </div>
          <div className="content_item">
            <div className="content_item_name">Tasks</div>
            <BarDetail data={dashBoardData.task} />
          </div>
          <div className="content_item">
            <div className="content_item_name">Dependency</div>
            <BarDetail data={dashBoardData.dependency} />
          </div>
          <div className="content_item">
            <div className="content_item_name">Observations</div>
            <BarDetail data={dashBoardData.observation} />
          </div>
        </div>
        <div className="seperator_dashboard"></div>
      </div>
    </div>
  );
};

export default DashBoard;
