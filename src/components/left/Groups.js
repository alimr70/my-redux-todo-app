import React from "react";
import Group from "./Group";
import { useSelector } from "react-redux";
const Groups = () => {
  const groups = useSelector((state) => state.groups);
  return (
    <div className="groups">
      {groups.map((group) => {
        return (
          <Group key={group.id} groupId={group.id} groupTitle={group.title} />
        );
      })}
    </div>
  );
};

export default Groups;
