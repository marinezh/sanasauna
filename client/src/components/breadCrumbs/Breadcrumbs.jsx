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
export default Breadcrumbs;
