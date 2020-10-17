import React from "react";
import AddList from "./AddList";
import Groups from "./Groups";
import PremadeLists from "./PremadeLists";

const Toolbar = () => {
  return (
    <div className="container container-left">
      <div className="left toolbar">
        <ul>
          <PremadeLists />
          {/* Devider */}
          <div className="devider"></div>
          {/* End Devider */}
          <Groups />
        </ul>
      </div>
      {/* Add List */}
      <AddList />
    </div>
  );
};

export default Toolbar;
