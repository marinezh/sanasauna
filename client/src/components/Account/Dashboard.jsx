import React from "react";
//import classes from "../TopicPage.module.css";
import classes from "./Dashboard.module.css";

const Dashboard = (data) => {
  return (
    <div className={classes.dashboard}>
      <div>
        <h2>My words</h2>
        <div>
          <button>All words</button>
          <span>522</span>
        </div>
        <div>
          <button>Words to learn</button>
          <span>400</span>
        </div>
        <div>
          <button>Words to repeat</button>
          <span>100</span>
        </div>

        <div>
          <button>Learned Words</button>
          <span>22</span>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Tag</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((word) => (
              <WordListItem key={word.name} word={word} />
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
