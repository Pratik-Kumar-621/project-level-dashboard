import React, { useState } from "react";
import QuickClient from "./QuickViewContainer/QuickClient";
import QuickFileManager from "./QuickViewContainer/QuickFileManager";
import QuickFinancial from "./QuickViewContainer/QuickFinancial";
import QuickMOM from "./QuickViewContainer/QuickMOM";
import QuickPO from "./QuickViewContainer/QuickPO";
import QuickQuotation from "./QuickViewContainer/QuickQuotation";
import QuickTaskManager from "./QuickViewContainer/QuickTaskManager";

const QuickViewContent = () => {
  const tabData = [
    {
      tabName: "Financial",
      tabPage: <QuickFinancial />,
    },
    {
      tabName: "Client",
      tabPage: <QuickClient />,
    },
    {
      tabName: "Task Manager",
      tabPage: <QuickTaskManager />,
    },
    {
      tabName: "File Manager",
      tabPage: <QuickFileManager />,
    },
    {
      tabName: "Quotation",
      tabPage: <QuickQuotation />,
    },
    {
      tabName: "MOM",
      tabPage: <QuickMOM />,
    },
    {
      tabName: "PO",
      tabPage: <QuickPO />,
    },
  ];
  const [tab, setTab] = useState("Task Manager");
  return (
    <div className="quick_view_content">
      <div className="quick_tab">
        {tabData.map((item) => (
          <button
            type="button"
            class={`btn ${
              tab === item.tabName ? "btn-primary" : "btn-outline-primary"
            }`}
            data-mdb-ripple-color={`${tab === item.tabName ? "dark" : ""}`}
            onClick={() => {
              setTab(item.tabName);
            }}
          >
            {item.tabName}
          </button>
        ))}
      </div>
      <div className="quick_tables">
        {tabData
          .filter((it) => it.tabName === tab)
          .map((item) => {
            return <>{item.tabPage}</>;
          })}
      </div>
    </div>
  );
};

export default QuickViewContent;
