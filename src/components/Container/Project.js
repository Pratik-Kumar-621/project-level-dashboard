import React, { useState } from "react";
import PlaceholderTab from "./PlaceholderTab";
import ProjectDashBoard from "./ProjectDashBoard";

const Project = () => {
  const tabData = [
    {
      tabIcon: "updates",
      tabName: "Dashboard",
      tabContent: <ProjectDashBoard />,
    },
    {
      tabIcon: "updates",
      tabName: "Updates",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "files",
      tabName: "Files",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "mom",
      tabName: "MOM",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "quotation",
      tabName: "Quotation",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "timeline",
      tabName: "Timelines",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "taskmanager",
      tabName: "TaskManager",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "accounts",
      tabName: "Accounts",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "moodboard",
      tabName: "Moodboard",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "vendors_po",
      tabName: "Vendor & PO's",
      tabContent: <PlaceholderTab />,
    },
    {
      tabIcon: "reports",
      tabName: "Reports",
      tabContent: <PlaceholderTab />,
    },
  ];
  const [tab, setTab] = useState("Dashboard");
  const handleGoBack = () => {};
  return (
    <div className="project_main">
      <div className="project_tabs">
        <button
          class="btn btn-tertiary go_back"
          data-mdb-ripple-color="light"
          onClick={handleGoBack}
        >
          <i class="fa-sharp fa-solid fa-angle-left"></i>
          &nbsp;&nbsp;&nbsp;Sharma Project
        </button>
        <div className="bottom_dash_line"></div>{" "}
        {tabData.map((item) => (
          <div
            className={`tab_item ${tab === item.tabName && "active_tab"}`}
            onClick={() => setTab(item.tabName)}
          >
            <img src={`./tabIcons/${item.tabIcon}.png`} alt="" />
            {item.tabName}
          </div>
        ))}
      </div>
      <div className="project_content">
        {tabData
          .filter((item) => item.tabName === tab)
          .map((item) => (
            <>{item.tabContent}</>
          ))}
      </div>
    </div>
  );
};

export default Project;
