import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Collapse.css";
function Collapse({ title, answer }) {
  const [activeFaq, setActiveFaq] = useState(false);
  return (
    <div className={`collapse ${activeFaq && "active-coll"}`}>
      <div onClick={() => setActiveFaq((prev) => !prev)} className="top-coll">
        <div className="left-coll">
          <h3>{title}</h3>
          <p>Recent Updates</p>
          <p>Project Completion %</p>
        </div>
        <FontAwesomeIcon
          className={`${activeFaq && "rotate"}`}
          icon={faChevronRight}
        />
      </div>
      <div className={`answer ${activeFaq && "active-answer"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Collapse;
