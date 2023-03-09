import React, { useState } from "react";

const QuickTaskManager = () => {
  const taskData = [
    {
      taskName: "Flooring",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: "80%",
        completed: false,
        delayed: false,
      },
    },
    {
      taskName: "Lighting",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: false,
        completed: "100%",
        delayed: false,
      },
    },
    {
      taskName: "False Cieling",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: "80%",
        completed: false,
        delayed: false,
      },
    },
    {
      taskName: "Flooring",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: false,
        completed: false,
        delayed: "7",
      },
    },
    {
      taskName: "Lighting",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: false,
        completed: "100%",
        delayed: false,
      },
    },
    {
      taskName: "False Cieling",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: false,
        completed: false,
        delayed: "7",
      },
    },
    {
      taskName: "Flooring",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: "80%",
        completed: false,
        delayed: false,
      },
    },
    {
      taskName: "Lighting",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: "80%",
        completed: false,
        delayed: false,
      },
    },
    {
      taskName: "False Cieling",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: false,
        completed: false,
        delayed: "7",
      },
    },
    {
      taskName: "Flooring",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: "80%",
        completed: false,
        delayed: false,
      },
    },
    {
      taskName: "Lighting",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: false,
        completed: false,
        delayed: "7",
      },
    },
    {
      taskName: "False Cieling",
      assignedTo: "You",
      assignedBy: "Admin",
      startDate: "5/01/2023",
      endDate: "15/02/2023",
      status: {
        progress: false,
        completed: "100%",
        delayed: false,
      },
    },
  ];
  const [show, setShow] = useState(4);
  return (
    <div className="quick_task_manager">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" colspan="2">
              Task Name
            </th>
            <th scope="col">Assig. To</th>
            <th scope="col">Assig. By</th>
            <th scope="col">Start date</th>
            <th scope="col">End date</th>
            <th scope="col" colspan="2">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((item, ind) => (
            <>
              {ind < show && (
                <tr>
                  <td>{item.taskName}</td>
                  <td>
                    <div className="num_add">+1</div>
                    <div className="num_add">+1</div>
                    <i class="fa-solid fa-clipboard-list"></i>
                  </td>
                  <td>{item.assignedTo}</td>
                  <td>{item.assignedBy}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td className="status_value_row">
                    <select
                      disabled
                      value={`${
                        item.status.delayed ? "notStarted" : "started"
                      }`}
                      style={{ color: item.status.delayed ? "" : "#108500" }}
                    >
                      <option value="started">Started</option>
                      <option value="notStarted">Not Started</option>
                    </select>
                    <div
                      className={`status_value ${
                        item.status.delayed && "status_delay"
                      }`}
                    >
                      {item.status.completed && <>{item.status.completed}</>}
                      {item.status.progress && <>{item.status.progress}</>}
                      {item.status.delayed && <>0%</>}
                    </div>
                  </td>
                  <td>
                    {item.status.completed && (
                      <div className="status_type status_complete">
                        Completed
                      </div>
                    )}
                    {item.status.progress && (
                      <div className="status_type status_progress">
                        In Progress
                      </div>
                    )}
                    {item.status.delayed && (
                      <div className="status_type status_delay">
                        Delayed +{item.status.delayed}
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
      {taskData.length > 4 && (
        <>
          {taskData.length === show ? (
            <button
              type="button"
              class="btn btn-tertiary"
              data-mdb-ripple-color="light"
              onClick={() => {
                setShow(4);
              }}
            >
              <span>Show Less</span>
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-tertiary"
              data-mdb-ripple-color="light"
              onClick={() => {
                setShow(taskData.length);
              }}
            >
              <span>Show More</span>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default QuickTaskManager;
