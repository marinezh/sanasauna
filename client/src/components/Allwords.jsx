import React from "react";
import { Outlet, Link } from "react-router-dom";

const Allwords = () => {
  return (
    <div>
      <h2>cards</h2>
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

      {/* <Routes>
      <Route path="contacts" element={<p>our contacts</p>} />
      <Route path="team" element={<p>our team</p>} />
     
    </Routes> */}
      <Outlet />
    </div>
  );
};

export default Allwords;
