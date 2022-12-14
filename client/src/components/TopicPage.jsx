import { Outlet, Link } from "react-router-dom";
import React from "react";

const TopicPage = () => {
  return (
    <div>
      <h2>Topics</h2>
      <div>
        <ul>
          <li>
            <Link to="flipcards"> Flip cards should be here</Link>
          </li>
          <li>
            <Link to="wordslist"> Here will be words list</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="test"> test will be here</Link>
          </li>
          <li>
            <Link to="game"> Games will be here</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default TopicPage;
