import React, { useState, useEffect } from "react";
import Navb from "./Navb";
import clock from "./images/clock.png";
import Done from "./images/Done.png";
import todo from "./images/to-do.png";
import Backlog from "./images/circle-loading.png";
import graydot from "./images/circle.png";
import Cancel from "./images/cancel.png";
import high from "./images/high.png";
import medium from "./images/medium.png";
import low from "./images/low.png";
import nonet from "./images/nonet.png";
import urgent from "./images/urgent.png";

// import localeCompare from "locale-compare";

const statusArray = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
const priorityArray = ["No Priority", "Low", "Medium", "High", "Urgent"];

const KanbanBoard = () => {
  const [data, setData] = useState([]);
  const [groupingOption, setGroupingOption] = useState("user");
  const [newd, setnewd] = useState([]);

  const [flagy, setflagy] = useState("yes");

  const getData = async () => {
    let result = await fetch(
      "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
    );
    result = await result.json();
    // console.log(result);
    setData(result);

    setnewd(result.tickets.sort((a, b) => b.priority - a.priority));
    // console.log(newd);
    // console.warn(data);
    // console.warn(data,"data");
  };

  const sortorder = () => {
    
    const sortedUsers = [...newd].sort((a, b) => (a.title > b.title ? 1 : -1));
    setnewd(sortedUsers);
  };
  const sortprior = () => {
    // console.log(newd);
    const sortedprio = [...newd].sort((a, b) => b.priority - a.priority);
    setnewd(sortedprio);
    // console.log("priority called");
  };

  
  
  useEffect(() => {
    getData();
    // sortorder();
    sortprior();
    console.log(newd);
  }, []);

  useEffect(() => {
    if (flagy === "yes") {
      sortprior();
    } else {
      sortorder();
    }
  }, [flagy]);

  return (
    <>
      <Navb pass={setGroupingOption} flag={setflagy} />

      
{/* status page */}
      {groupingOption === "status" && (
        <div className="flex-row" style={{ margin: "9px" }}>
          {statusArray.map((status) => (
            <div key={status} className="flex-col" style={{ margin: "9px" }}>
              <div className="flex-row">
                {status === "In progress" && (
                  <img
                    style={{ height: "16px", "margin-top": "12px" }}
                    src={clock}
                    alt=""
                  />
                )}
                {status === "Todo" && (
                  <img
                    style={{ height: "16px", "margin-top": "12px" }}
                    src={todo}
                    alt=""
                  />
                )}
                {status === "Backlog" && (
                  <img
                    style={{ height: "16px", "margin-top": "12px" }}
                    src={Backlog}
                    alt=""
                  />
                )}
                {status === "Done" && (
                  <img
                    style={{ height: "16px", "margin-top": "12px" }}
                    src={Done}
                    alt=""
                  />
                )}
                {status === "Cancelled" && (
                  <img
                    style={{ height: "16px", "margin-top": "12px" }}
                    src={Cancel}
                    alt=""
                  />
                )}
                <h3 style={{ "text-align": "left" }}>{status}</h3>
                <h5 style={{ "margin-left": "125px", color: "gray" }}>+</h5>
              </div>

              <div>
                {newd?.map((item) => {
                  if (item.status === status) {
                    return (
                      <div class="card" style={{ width: "18rem" }}>
                        <div class="card-body" style={{ "text-align": "left" }}>
                          <h7 className="cam">{item.id}</h7>
                          <h5 class="card-title">{item.title}</h5>
                          {item.priority === 0 && (
                            <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={nonet}
                              alt=""
                            /></span>
                          )}
                          {item.priority === 1 && (
                            <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={low}
                              alt=""
                            /></span>
                          )}
                          {item.priority === 2 && (
                            <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={medium}
                              alt=""
                            /></span>
                          )}
                          {item.priority === 3 && (
                            <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={high}
                              alt=""
                            /></span>
                          )}
                          {item.priority === 4 && (
                            <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={urgent}
                              alt=""
                            /></span>
                          )}
                          <span class="tag">
                            <img
                              style={{ height: "14px", "margin-top": "-2px" }}
                              src={graydot}
                              alt=""
                            />
                            <span>{item.tag}</span>
                          </span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      )}


      {/* Priority page */}

      {groupingOption === "priority" && (
        <div className="flex-row">
          {priorityArray.map((priority, index) => (
            <div className="flex-col" style={{ margin: "9px" }}>
              <div className="flex-row">
                {priority === "No Priority" && (
                  <img
                    style={{ height: "16px", "margin-top": "5px" }}
                    src={nonet}
                    alt=""
                  />
                )}
                {priority === "Low" && (
                  <img
                    style={{ height: "16px", "margin-top": "5px" }}
                    src={low}
                    alt=""
                  />
                )}
                {priority === "Medium" && (
                  <img
                    style={{ height: "16px", "margin-top": "5px" }}
                    src={medium}
                    alt=""
                  />
                )}
                {priority === "High" && (
                  <img
                    style={{ height: "16px", "margin-top": "5px" }}
                    src={high}
                    alt=""
                  />
                )}
                {priority === "Urgent" && (
                  <img
                    style={{ height: "16px", "margin-top": "5px" }}
                    src={urgent}
                    alt=""
                  />
                )}

                <h5 style={{ "text-align": "left" }}>{priority}</h5>
                <h5 style={{ "margin-left": "125px", color: "gray" }}>+</h5>
              </div>

              <div>
                {newd?.map((item) => {
                  if (item.priority === index) {
                    return (
                      <div class="card" style={{ width: "18rem" }}>
                        <div class="card-body" style={{ "text-align": "left" }}>
                          <h7 className="cam">{item.id}</h7>
                          
                            
                          <h5 class="card-title">{item.title}</h5>
                          <span class="tag">
                            <img
                              style={{ height: "14px", "margin-top": "-2px" }}
                              src={graydot}
                              alt=""
                            />
                            <span>{item.tag}</span>
                          </span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      )}

{/* user page */}
      {groupingOption === "user" && (
        <div className="flex-row">
          {flagy === "yes" &&
            data?.users?.map((user) => (
              <div className="flex-col" style={{ margin: "9px" }}>
                <div className="flex-row" style={{ width: "200px" }}>
                  {user === "In progress" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={clock}
                      alt=""
                    />
                  )}
                  {user === "Todo" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={todo}
                      alt=""
                    />
                  )}
                  {user === "Backlog" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={Backlog}
                      alt=""
                    />
                  )}
                  {user === "Done" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={Done}
                      alt=""
                    />
                  )}
                  {user === "Cancelled" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={Cancel}
                      alt=""
                    />
                  )}

                  <h5 style={{ "text-align": "left" }}>{user.name}</h5>
                  <h5
                    style={{
                      "text-align": "right",
                      "margin-left": "40px",
                      color: "gray",
                    }}
                  >
                    +
                  </h5>
                </div>
                {newd?.map((ticket) => {
                  if (ticket.userId === user.id)
                    return (
                      <div class="card" style={{ width: "15rem" }}>
                        <div class="card-body flex-row" style={{ "text-align": "left" }}>
                        {ticket.status === "In progress" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={clock}
                    alt=""
                  />
                )}
                {ticket.status === "Todo" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={todo}
                    alt=""
                  />
                )}
                {ticket.status === "Backlog" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={Backlog}
                    alt=""
                  />
                )}
                {ticket.status === "Done" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={Done}
                    alt=""
                  />
                )}
                {ticket.status === "Cancelled" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={Cancel}
                    alt=""
                  />
                  
                )}
                          <h5 class="card-title">{ticket.title}</h5>
                        </div>
                        <div className="flex-row" style={{"margin-top":"-12px","margin-left":"5px"}}>

                        {ticket.priority === 0 && (
                            <span className="prior-in"><img
                            style={{ height: "16px", "margin-top": "0px" }}
                            src={nonet}
                            alt=""
                            /></span>
                            )}
                          {ticket.priority === 1 && (
                            <span className="prior-in"><img
                            style={{ height: "16px", "margin-top": "0px" }}
                            src={low}
                            alt=""
                            /></span>
                            )}
                          {ticket.priority === 2 && (
                              <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={medium}
                              alt=""
                              /></span>
                              )}
                          {ticket.priority === 3 && (
                            <span className="prior-in"><img
                            style={{ height: "16px", "margin-top": "0px" }}
                            src={high}
                            alt=""
                            /></span>
                            )}
                          {ticket.priority === 4 && (
                              <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={urgent}
                              alt=""
                              /></span>
                              )}
                          <span class="tag">
                            <img
                              style={{ height: "14px", "margin-top": "-2px" }}
                              src={graydot}
                              alt=""
                              />
                            <span>{ticket.tag}</span>
                          </span>
                              </div>
                      </div>
                    );
                })}
              </div>
            ))}

{/*  user page if no flag */}
          {flagy === "no" &&
            data?.users?.map((user) => (
              <div className="flex-col" style={{ margin: "9px" }}>
                <div className="flex-row" style={{ width: "200px" }}>
                  {user === "In progress" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={clock}
                      alt=""
                    />
                  )}
                  {user === "Todo" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={todo}
                      alt=""
                    />
                  )}
                  {user === "Backlog" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={Backlog}
                      alt=""
                    />
                  )}
                  {user === "Done" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={Done}
                      alt=""
                    />
                  )}
                  {user === "Cancelled" && (
                    <img
                      style={{ height: "16px", "margin-top": "12px" }}
                      src={Cancel}
                      alt=""
                    />
                  )}

                  <h5 style={{ "text-align": "left" }}>{user.name}</h5>
                  <h5
                    style={{
                      "text-align": "right",
                      "margin-left": "40px",
                      color: "gray",
                    }}
                  >
                    +
                  </h5>
                </div>
                {newd?.map((ticket) => {
                  if (ticket.userId === user.id)
                    return (
                      <div class="card" style={{ width: "15rem" }}>
                        <div class="card-body flex-row" style={{ "text-align": "left" }}>
                        {ticket.status === "In progress" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={clock}
                    alt=""
                  />
                )}
                {ticket.status === "Todo" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={todo}
                    alt=""
                  />
                )}
                {ticket.status === "Backlog" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={Backlog}
                    alt=""
                  />
                )}
                {ticket.status === "Done" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={Done}
                    alt=""
                  />
                )}
                {ticket.status === "Cancelled" && (
                  <img
                    style={{ height: "16px", "margin-top": "2px" }}
                    src={Cancel}
                    alt=""
                  />
                  
                )}
                          <h5 class="card-title">{ticket.title}</h5>
                        </div>
                        <div className="flex-row" style={{"margin-top":"-12px","margin-left":"5px"}}>

                        {ticket.priority === 0 && (
                            <span className="prior-in"><img
                            style={{ height: "16px", "margin-top": "0px" }}
                            src={nonet}
                            alt=""
                            /></span>
                            )}
                          {ticket.priority === 1 && (
                            <span className="prior-in"><img
                            style={{ height: "16px", "margin-top": "0px" }}
                            src={low}
                            alt=""
                            /></span>
                            )}
                          {ticket.priority === 2 && (
                              <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={medium}
                              alt=""
                              /></span>
                              )}
                          {ticket.priority === 3 && (
                            <span className="prior-in"><img
                            style={{ height: "16px", "margin-top": "0px" }}
                            src={high}
                            alt=""
                            /></span>
                            )}
                          {ticket.priority === 4 && (
                              <span className="prior-in"><img
                              style={{ height: "16px", "margin-top": "0px" }}
                              src={urgent}
                              alt=""
                              /></span>
                              )}
                          <span class="tag">
                            <img
                              style={{ height: "14px", "margin-top": "-2px" }}
                              src={graydot}
                              alt=""
                              />
                            <span>{ticket.tag}</span>
                          </span>
                              </div>
                      </div>
                    );
                })}
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default KanbanBoard;
