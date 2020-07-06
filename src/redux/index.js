import React from "react";
import { useDispatch } from "react-redux";

function _Redux() {

  const dispatch = useDispatch();
  return (
    <div>

      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            step: 1
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            step: 1
          })
        }
      >
        Decrement
      </button>

    
    </div>
  );
}

export default _Redux;