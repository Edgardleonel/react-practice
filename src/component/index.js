import React from "react";
import { useSelector } from "react-redux";
import Actions from '../redux';

function _Redux() {
  const counter = useSelector(state => state);
  return (
    <div>
      <Actions />
      <h1>{counter.num}</h1>
    </div>
  );
}
export default _Redux;