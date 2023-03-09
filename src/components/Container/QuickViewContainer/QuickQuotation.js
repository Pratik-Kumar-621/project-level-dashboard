import React, { useState } from "react";

const QuickQuotation = () => {
  const quotationData = [
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Draft",
      newUpdates: 2,
    },
    {
      name: "OnSite",
      id: "001",
      BOQamount: "1000000",
      WOappValue: "400000",
      BOQappValue: "300000",
      pendingValue: "300000",
      status: "Sent",
      newUpdates: 0,
    },
  ];
  const [show, setShow] = useState(4);
  return (
    <div className="quick_quotation">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">BOQ Name</th>
            <th scope="col">BOQ ID</th>
            <th scope="col">BOQ Amount</th>
            <th scope="col">WO App. Val.</th>
            <th scope="col">BOQ App. Val.</th>
            <th scope="col">BOQ Item Pending Val.</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {quotationData.map((item, ind) => (
            <>
              {ind < show && (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.BOQamount}</td>
                  <td>{item.WOappValue}</td>
                  <td>{item.BOQappValue}</td>
                  <td>{item.pendingValue}</td>
                  <td>
                    {item.status}{" "}
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
      {quotationData.length > 4 && (
        <>
          {quotationData.length === show ? (
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
                setShow(quotationData.length);
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

export default QuickQuotation;
