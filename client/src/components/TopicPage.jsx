import { Outlet, Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";

const TopicPage = () => {
  const [wordData, setWordData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/API/keyword/${categoryName}`)
      .then((data) => {
        setWordData(data.data);
        console.log(data.data);
      });
  }, [categoryName]);

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
      {/*  <div>
          {wordData.length ? <FlipCards data={wordData} /> : <p>Loading...</p>}
        </div> */}
      <Outlet />
    </div>
  );
};

export default TopicPage;
