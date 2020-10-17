import React from "react";

const DetailFooter = () => {
  return (
    <div className="toolbar-item detail-footer">
      <div className="toolbar-inner">
        <div className="toolbar-icon">
          <i className="icon icon-arrow"></i>
        </div>
        <div className="toolbar-title">
          <span>Created on Tue, Oct 13</span>
        </div>
        <div className="add-group detail-delete">
          <button className="btn">
            <i className="icon icon-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailFooter;
