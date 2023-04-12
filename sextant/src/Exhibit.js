import React from 'react';
import './Exhibit.css';

function Exhibit(props) {
  return (
    <div className="Exhibit">
      <div className="Exhibit-Header">{props.title}</div>
      <div className="Exhibit-Content">{props.children}</div>
    </div>
  );
}

export default Exhibit;
