import React, { useState } from "react";

const LogsContent = () => {
  const logData = [
    {
      logImage: "",
      logCreator: "Admin",
      type: "assign",
      logMessage: (
        <>
          <strong>Admin</strong> assign new task to <strong>You</strong>
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Srikant",
      type: "update",
      logMessage: (
        <>
          <strong>Srikant</strong> updated SubTask 2
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Admin",
      type: "assign",
      logMessage: (
        <>
          <strong>Admin</strong> assign new task to <strong>You</strong>
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Srikant",
      type: "update",
      logMessage: (
        <>
          <strong>Srikant</strong> updated SubTask 2
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Admin",
      type: "assign",
      logMessage: (
        <>
          <strong>Admin</strong> assign new task to <strong>You</strong>
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Srikant",
      type: "update",
      logMessage: (
        <>
          <strong>Srikant</strong> updated SubTask 2
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Admin",
      type: "assign",
      logMessage: (
        <>
          <strong>Admin</strong> assign new task to <strong>You</strong>
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Srikant",
      type: "update",
      logMessage: (
        <>
          <strong>Srikant</strong> updated SubTask 2
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Admin",
      type: "assign",
      logMessage: (
        <>
          <strong>Admin</strong> assign new task to <strong>You</strong>
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Srikant",
      type: "update",
      logMessage: (
        <>
          <strong>Srikant</strong> updated SubTask 2
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Admin",
      type: "assign",
      logMessage: (
        <>
          <strong>Admin</strong> assign new task to <strong>You</strong>
        </>
      ),
      logTime: "2 hours ago",
    },
    {
      logImage: "",
      logCreator: "Srikant",
      type: "update",
      logMessage: (
        <>
          <strong>Srikant</strong> updated SubTask 2
        </>
      ),
      logTime: "2 hours ago",
    },
  ];
  const [show, setShow] = useState(4);

  return (
    <div className="logs_content">
      <div className="log_table">
        {logData.map((item, count) => {
          return (
            <>
              {show > count && (
                <div className="log_table_item">
                  <div className="log_item">
                    <div className="log_image">
                      {item.logImage ? (
                        <img src={item.logImage} alt="" />
                      ) : (
                        <div className="img">{item.logCreator[0]}</div>
                      )}
                      {item.type === "update" ? (
                        <div className="update">
                          <i class="fa-regular fa-pen-to-square"></i>
                        </div>
                      ) : (
                        <div className="assign">
                          <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                      )}
                    </div>
                    <div className="log_content">
                      <div className="log_message">{item.logMessage}</div>
                      <div className="log_time">{item.logTime}</div>
                    </div>
                  </div>
                  <div className="log_dot"></div>
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className="log_load_btn">
        {show < logData.length && (
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              setShow(show + 4);
            }}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default LogsContent;
