import React from "react";

function ListComponent({ lists, spinner }) {
  return !spinner ? (
    <React.Fragment>
      <div className="divTable">
        <div className="divTableBody">
          <div className="divTableRow Heading">
            <div className="divTableCell">First Name</div>
            <div className="divTableCell">Last Name</div>
            <div className="divTableCell">Date</div>
          </div>

          {!spinner && lists && lists.length > 0 ? (
            lists.map((list, index) => (
              <React.Fragment key={list.id}>
                <div className="divTableRow" >
                  <div className="divTableCell">{list.first_name}</div>
                  <div className="divTableCell">{list.last_name}</div>
                  <div className="divTableCell">{list.date}</div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <React.Fragment>
                <div className="divTableRow" >
                <div className=" no-data">Sorry No Matches found</div>

              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>Loading Data...</React.Fragment>
  );
}

export default ListComponent;
