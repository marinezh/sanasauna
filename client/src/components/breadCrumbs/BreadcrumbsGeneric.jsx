import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import { capitaliseFirstLetter } from "../../helperFunctions";

import classes from "./Breadcrumbs.module.css";

const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/about", breadcrumb: "About" },
];

const BreadcrumbsGeneric = () => {
  console.log(routes);
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <nav className={classes.breadCrumb}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <React.Fragment key={match.pathname}>
          <NavLink to={match.pathname} className={classes.breadCrumbNav}>
            {breadcrumb}
          </NavLink>
          {index !== breadcrumbs.length - 1 && " / "}
        </React.Fragment>
      ))}
    </nav>
  );
};
export default BreadcrumbsGeneric;
