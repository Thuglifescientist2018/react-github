import React from "react";
import { useLocation } from "react-router-dom";
function RepoDetail() {
  const location = useLocation(); // Trying to access the state through useLocation to fetch the data from the url from repos.js (Doesn't work).TypeError: Cannot destructure property 'item' of 'location.state' as it is null.

  const { item } = location.state;
  console.log(item);

  return <div className="RepoDetail">The repo detail page</div>;
}
export default RepoDetail;
