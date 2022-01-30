import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App";

// import FriendList from "camponents/FriendList";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <FriendList /> */}
    {/* <Statistics /> */}
  </React.StrictMode>,
  // <Profile
  //   username={user.username}
  //   tag={user.tag}
  //   location={user.location}
  //   avatar={user.avatar}
  //   stats={user.stats}
  // />,
  document.getElementById("root")
);
