import React, { useState } from 'react';
import "../style/components/_collapse.scss";

function Collapse({ title, content, housing, listing }) {
  const [open, setOPen] = useState(false);
  const [rotate, setRotate] = useState('');

  const toggle = () => {
    setOPen(!open);
    setRotate(open ? 'collapse-arrow reverse' : 'collapse-arrow rotate');
  };

  const collapseClass = `collapse ${housing ? 'housing-collapse' : ''}`;

  return (
  <div className={collapseClass}>
      <div className="collapse_header">
        <h2>{title}</h2> 
        <button className={`${rotate}`}  onClick={toggle}>
          <img src="./img/arrow-collapse.png" alt="Flèche" />
        </button>
      </div>
      <div>
        {open && (
          <div className="toggle">
            {listing ? (
              <ul> 
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p> 
            )}
          </div>
        )}
      </div>
  </div>
  );
}

export default Collapse;