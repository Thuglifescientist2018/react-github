import React from "react";
import { useLocation } from "react-router-dom";
function RepoDetail() {
  const location = useLocation();
  const { item } = location.state;
  console.log(location);

  return <div className="RepoDetail"></div>;
}
export default RepoDetail;
