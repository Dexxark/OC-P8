import React, { useState } from 'react';

function Collapse({ title, content, housing, listing }) {
  const [open, setOPen] = useState(false);
  const [rotate, setRotate] = useState('collapse-arrow');

  const toggle = () => {
    setOPen(!open);
    setRotate(open ? 'collapse-arrow reverse' : 'collapse-arrow rotate');
  };

  const collapseClass = `collapse ${housing ? 'housing-collapse' : ''}`;

  const stateCollapse = `${open ? "open" : 'close'}`;

  return (
  <div className={collapseClass}>
      <div className="collapse-header">
        <h2>{title}</h2> 
        <button className={`${rotate}`}  onClick={toggle}>
          <img src="./img/arrow-collapse.png" alt="Flèche" />
        </button>
      </div>
      <div className={`toggle ${stateCollapse}`}>
        {listing ? (
          <div className ="equipments">
            {content.map((item, index) => (
              <p key={index} className="equipment">{item}</p>
            ))}
          </div>
        ) : (
          <p className="content">{content}</p> 
        )}
      </div>
  </div>
  );
}

export default Collapse;