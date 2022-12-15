import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { capitaliseFirstLetter } from "../../helperFunctions";
import classes from "./Breadcrumbs.module.css";

const DynamicUserBreadcrumb = ({ match }) =>
  capitaliseFirstLetter(match.params.categoryName);

const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: ":categoryName/*", breadcrumb: DynamicUserBreadcrumb },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, {
    excludePaths: [":categoryName"],
  });
  const location = useLocation();
  console.log("location", location);
  console.log("bread", breadcrumbs);

  return (
    <nav className={classes.breadCrumb}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname}>
          <NavLink
            key={match.pathname}
            to={match.pathname}
            className={classes.breadCrumbNav}
          >
            {breadcrumb}
          </NavLink>
          {index !== breadcrumbs.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};
export default Breadcrumbs;
