import React, { useState } from "react";

const QuickFileManager = () => {
  const fileManagerData = [
    {
      icon: "pdf",
      name: "Drawing 1",
      lastUpdate: "1 July 2022",
      status: "Approved",
      newUpdates: 0,
    },
    {
      icon: "img",
      name: "Drawing 2",
      lastUpdate: "1 July 2022",
      status: "Pending",
      newUpdates: 2,
    },
    {
      icon: "pdf",
      name: "Drawing 1",
      lastUpdate: "1 July 2022",
      status: "Approved",
      newUpdates: 0,
    },
    {
      icon: "img",
      name: "Drawing 2",
      lastUpdate: "1 July 2022",
      status: "Pending",
      newUpdates: 2,
    },
    {
      icon: "pdf",
      name: "Drawing 1",
      lastUpdate: "1 July 2022",
      status: "Approved",
      newUpdates: 0,
    },
    {
      icon: "img",
      name: "Drawing 2",
      lastUpdate: "1 July 2022",
      status: "Pending",
      newUpdates: 2,
    },
    {
      icon: "pdf",
      name: "Drawing 1",
      lastUpdate: "1 July 2022",
      status: "Approved",
      newUpdates: 0,
    },
    {
      icon: "img",
      name: "Drawing 2",
      lastUpdate: "1 July 2022",
      status: "Pending",
      newUpdates: 2,
    },
    {
      icon: "pdf",
      name: "Drawing 1",
      lastUpdate: "1 July 2022",
      status: "Approved",
      newUpdates: 0,
    },
    {
      icon: "img",
      name: "Drawing 2",
      lastUpdate: "1 July 2022",
      status: "Pending",
      newUpdates: 2,
    },
    {
      icon: "pdf",
      name: "Drawing 1",
      lastUpdate: "1 July 2022",
      status: "Approved",
      newUpdates: 0,
    },
    {
      icon: "img",
      name: "Drawing 2",
      lastUpdate: "1 July 2022",
      status: "Pending",
      newUpdates: 2,
    },
    {
      icon: "pdf",
      name: "Drawing 1",
      lastUpdate: "1 July 2022",
      status: "Approved",
      newUpdates: 0,
    },
    {
      icon: "img",
      name: "Drawing 2",
      lastUpdate: "1 July 2022",
      status: "Pending",
      newUpdates: 2,
    },
  ];
  const [show, setShow] = useState(4);

  return (
    <div className="quick_file_manager">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style={{ width: "33%" }}>
              File Name
            </th>
            <th scope="col" style={{ width: "33%" }}>
              Last Update
            </th>
            <th scope="col" style={{ width: "33%" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {fileManagerData.map((item, ind) => (
            <>
              {ind < show && (
                <tr>
                  <td>
                    {item.icon === "img" ? (
                      <i
                        class="fa-solid fa-image"
                        style={{ color: "#26AD74" }}
                      ></i>
                    ) : (
                      <i
                        class="fa-solid fa-file-pdf"
                        style={{ color: "#43A6DD" }}
                      ></i>
                    )}
                    &nbsp; &nbsp; &nbsp;{item.name}
                  </td>
                  <td>{item.lastUpdate}</td>

                  <td>
                    {item.status}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {item.newUpdates !== 0 && (
                      <span className="item_updates">
                        {item.newUpdates} New Updates
                      </span>
                    )}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
      {fileManagerData.length > 4 && (
        <>
          {fileManagerData.length === show ? (
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
                setShow(fileManagerData.length);
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

export default QuickFileManager;
