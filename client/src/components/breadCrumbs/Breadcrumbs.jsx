import React from "react";
import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import classes from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();
  console.log("bread", breadcrumbs);

  return (
    <nav>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link
          key={match.url}
          to={match.url}
          className={
            match.pathname === location.pathname
              ? classes.breadcrumb_active
              : classes.breadcrumb_not_active
          }
        >
          {breadcrumb} /
        </Link>
      ))}
    </nav>
  );
};
export default Breadcrumbs;
